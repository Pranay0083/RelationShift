import { BotIcon, Contact2Icon, Home, RocketIcon, Settings } from "lucide-react"
import React from "react"

export const PAGE_BREAD_CRUMBS: string[] = [
    'contacts',
    "automations",
    "integrations",
    "settings"
]

type Props = {
    [page in string] : React.ReactNode
}

export const PAGE_ICON: Props = {
    AUTOMATIONS: <BotIcon />,
    CONTACTS: <Contact2Icon />, 
    INTEGRATIONS: <RocketIcon />, 
    SETTINGS: <Settings />,
    HOME: <Home />
}