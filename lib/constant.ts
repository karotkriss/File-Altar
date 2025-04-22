import { Element4, Home } from 'iconic-react'
import { Setting2 } from 'iconic-react'
import { Box1 } from 'iconic-react'


export const menuOptions = [
    {
        name: "Dashboard",
        Component: Home,
        href: "/dashboard"
    },
    {
        name: "App",
        Component: Element4,
        href: "/apps"
    },
    {
        name: "Fixtures",
        Component: Box1,
        href: "/fixtures"
    },
    {
        name: "Settings",
        Component: Setting2,
        href: "/settings"
    }
]