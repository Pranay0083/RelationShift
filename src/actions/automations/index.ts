'use server'

import { stat } from 'fs'
import { onCurrentUser } from '../user'
import { createAutomation, getAutomations } from './queries'

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
