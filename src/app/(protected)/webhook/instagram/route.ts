import { createChatHistory, getKeywordAutomation, matchKeyword, trackResponse, trackResponses } from '@/actions/webhook/queries';
import { sendDM } from '@/lib/fetch';
import { client } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const hub = req.nextUrl.searchParams.get('hub.challenge');
    return new NextResponse(hub)
}

export async function POST(req: NextRequest) {
    const webhook_payload = await req.json();
    let matcher;
    try {
        if (webhook_payload.entry[0].messaging) {
            matcher = await matchKeyword(
                webhook_payload.entry[0].messaging[0].message.text
            )
        }
        if (webhook_payload.entry[0].changes[0]) {
            matcher = await matchKeyword(
                webhook_payload.entry[0].changes[0].value.text
            )
        }
        if (matcher && matcher.automationId) {

            if (webhook_payload.entry[0].messaging) {

                const automation = await getKeywordAutomation(matcher.automationId, true)
                if (automation && automation.trigger) {
                    if (automation.listener && automation.listener.listener === "MESSAGE") {
                        const direct_message = await sendDM(
                            webhook_payload.entry[0].id,
                            webhook_payload.entry[0].sender.id,
                            automation.listener?.prompt,
                            automation.User?.integrations[0].token!
                        )
                        if (direct_message.status === 200) {
                            const tracked = await trackResponse(automation.id, "DM")
                            if (tracked) {
                                return NextResponse.json({ message: "Message sent" }, { status: 200 })
                            }
                        }
                    }
                    if (automation.listener && automation.listener.listener === "SMARTAI" && automation.User?.subscriptions?.plan === "PRO") {
                        const smart_ai_message = "something something"
                        if (smart_ai_message.choices[0].message.content) {
                            const reciever = createChatHistory(
                                automation.id,
                                webhook_payload.entry[0].id,
                                webhook_payload.entry[0].messaging[0].sender.id,
                                webhook_payload.entry[0].messaging[0].message.text,
                            )
                            const sender = await sendDM(
                                webhook_payload.entry[0].id,
                                webhook_payload.entry[0].messaging[0].sender.id,
                                smart_ai_message.choices[0].message.content,
                                automation.User?.integrations[0].token!
                            )


                            await client.$transaction([reciever, sender])

                            const direct_message = await sendDM(
                                webhook_payload.entry[0].id,
                                webhook_payload.entry[0].messaging[0].sender.id,
                                smart_ai_message.choices[0].message.content,
                                automation.User?.integrations[0].token!
                            )

                            if (direct_message.status === 200) {
                                const tracked = await trackResponses(automation.id, "DM")
                                if (tracked) {
                                    return NextResponse.json({ message: "Message sent" }, { status: 200 })
                                }
                            }
                        }
                    }
                    return NextResponse.json({ message: "No automation set" }, { status: 404 })
                }
                return NextResponse.json({ message: "No automation set" }, { status: 404 })
            }
            // if (webhook_payload.entry[0].changes && webhook_payload.entry[0].changes[0].field === 'comments'){
            //     const automation = await getKeywordAutomation(matcher.automationId, false)
                
            //     const automation_post = await getKeywordPost(
            //         webhook_payload.entry[0].changes[0].value.media.id
            //     )
            // }
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Error" }, { status: 500 })
    }
}