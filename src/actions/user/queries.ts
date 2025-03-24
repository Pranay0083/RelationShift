'use server'
import { client } from '@/lib/prisma'

export const findUser = async (clerkId: string) => {
    return await client.user.findUnique({
        where: {
            clerkId
        },
        include: {
            subscriptions: true,
            integrations:
            {
                select: {
                    id: true,
                    token: true,
                    expiresAt: true,
                }
            }
        }
    })
}

export const createUser = async (
    clerkId: string, firstname: string, lastname: string, email: string
) => {
    return await client.user.create({
        data: {
            clerkId, firstname, lastname, email, subscriptions: {
                create: {},
            }
        },
        select: {
            firstname: true,
            lastname: true,
        }
    })
}