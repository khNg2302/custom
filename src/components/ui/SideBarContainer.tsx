'use client'
import useTheme from "@/hooks/useTheme"
import { SidebarMobile } from "./sidebar/SidebarMobile"
import { ReactNode } from "react"
import { SidebarPC } from "./sidebar/SidebarPC"

interface SideBarContainerI {
    children: ReactNode
    topElement?: ReactNode
}

export const SideBarContainer = ({ children, topElement }: SideBarContainerI) => {
    const theme = useTheme()

    return <>
        {
            !theme?.sidebar.active && <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div>
                    <SidebarMobile theme={theme}></SidebarMobile>
                    {topElement}
                </div>
                <div style={{ flex: 1 }}>

                    {children}
                </div>
            </div>
        }

        {
            theme?.sidebar.active && <div style={{ height: '100%', display: 'flex' }}>
                <SidebarPC theme={theme} />
                <div>
                    {topElement}
                    <div>{children}</div>
                </div>

            </div>
        }
    </>
}