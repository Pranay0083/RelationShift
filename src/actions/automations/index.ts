'use server'
import { addKeyword, addListener, addTrigger, deleteKeywordQuery } from './queries'
import { onCurrentUser } from '../user'
import { createAutomation, findAutomation, getAutomations, updateAutomation } from './queries'

export const createAutomations = async (id?: string) => {
    const user = await onCurrentUser()
    try {
        const create = await createAutomation(user.id, id)
        if (create) {
            return { status: 200, message: 'Automation created successfully' }
        }
        return { status: 404, message: 'Oops! Something went wrong' }
    }
    catch (error) {
        return { status: 500, message: 'Internal server error' }
    }
}

export const getAllAutomations = async () => {
    const user = await onCurrentUser()
    try {
        const automations = await getAutomations(user.id)
        if (automations) return { status: 200, data: automations.automations }
        return { status: 404, message: 'No automations found', data: [] }
    }
    catch (error) {
        return { status: 500, message: 'Internal server error' }
    }
}

export const getAutomationInfo = async (id: string) => {
    await onCurrentUser()
    try {
        const automaiton = await findAutomation(id)
        if (automaiton) return { status: 200, data: automaiton }
        return { status: 404 }
    } catch (error) {
        return { status: 500 }
    }
}

export const updateAutomationName = async (
    automationId: string,
    data: {
        name?: string
        active?: boolean
        automation?: string
    }
) => {
    await onCurrentUser()
    try {
        const update = await updateAutomation(automationId, data)
        if (update) return { status: 200, data: "Automation updated successfully" }
        return { status: 404, data: "Automation not found" }
    } catch (error) {
        console.log({ error })
        return { status: 500, data: "something went wrong" }
    }
}

export const saveListener = async (
    automationId: string,
    listener: "MESSAGE" | "SMARTAI",
    prompt: string,
    reply?: string
) => {
    await onCurrentUser()
    try {
        const create = await addListener(automationId, listener, prompt, reply)
        if (create) return { status: 200, data: "Listener added successfully" }
        return { status: 404, data: "Automation not found" }
    } catch (error) {
        return { status: 500, data: "Internal server error" }
    }
}

export const saveTrigger = async (automationId: string, trigger: string[]) => {
    await onCurrentUser()
    try {
        const create = await addTrigger(automationId, trigger)
        if (create) return { status: 200, data: "Trigger added successfully" }
        return { status: 404, data: "cannot save trigger" }

    } catch (error) {
        console.log(error)
        return { status: 500, data: "Internal server error" }
    }
}

export const saveKeyword = async (automationId: string, keyword: string) => {
    await onCurrentUser()
    try {
        const create = await addKeyword(automationId, keyword)
        if (create) return { status: 200, data: "Keyword added successfully" }
        return { status: 404, data: "cannot save keyword" }

    } catch (error) {
        console.log(error)
        return { status: 500, data: "Internal server error" }
    }
}

export const deleteKeyword = async (id: string) => {
    await onCurrentUser()
    try {
        const deleted = await deleteKeywordQuery(id)
        if (deleted) return { status: 200, data: "Keyword deleted successfully" }
        return { status: 404, data: "cannot delete keyword" }

    } catch (error) {
        console.log(error)
        return { status: 500, data: "Internal server error" }
    }
}