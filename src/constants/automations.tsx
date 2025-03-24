import { Bluetooth, BotIcon, InstagramIcon } from 'lucide-react'
import { v4 } from 'uuid'

export type AutomationListenerProps = {
    id: string
    label: string
    icon: JSX.Element
    description: string
    type: 'SMARTAI' | 'MESSAGE'
}

export type AutomationsTriggerProps = {
    id: string
    label: string
    icon: JSX.Element 
    description: string
    type: "COMMENT" | "DM"
}

export const AUTOMATION_TRIGGERS: AutomationsTriggerProps[] = [
    {
        id: v4(),
        label: "User commetns on my post",
        icon: <InstagramIcon />,
        description: "select if you want to automate comments on your post",
        type: 'COMMENT'
    },
    {
        id: v4(),
        label: "Replies to my dms",
        icon: <InstagramIcon />,
        description: "select if you want to automate DM's on your profile",
        type: 'DM'
    }
]

export const AUTOMATION_LISTENERS: AutomationListenerProps [] = [
    {
        id: v4(),
        label: 'Send the user a message',
        icon: <Bluetooth />,
        description: 'Enter the message that you want to send the user.',
        type: "MESSAGE"
    },
    {
        id: v4(),
        label: 'Run a smart AI',
        icon: <BotIcon />,
        description: 'Select the smart AI that you want to run. (upgrading to premium will unlock more smart AIs)',
        type: "SMARTAI"
    }
]