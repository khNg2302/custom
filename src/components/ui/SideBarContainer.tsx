'use client'
import useTheme from "@/hooks/useTheme"
import { SidebarMobile } from "./sidebar/SidebarMobile"
import { ReactNode } from "react"
import { SidebarPC } from "./sidebar/SidebarPC"
import Container from "./containers/Container"

interface SideBarContainerI {
    children: ReactNode
    topElement?: ReactNode
    sidebarElements?: ReactNode
}

export const SideBarContainer = ({ children, topElement,sidebarElements }: SideBarContainerI) => {
    const theme = useTheme()

    return <>
        {
            !theme?.sidebar.active && <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div>
                    <SidebarMobile theme={theme}>{sidebarElements}</SidebarMobile>
                    {topElement}
                </div>
                <Container styles={{ flex: 1 }}>

                    {children}
                </Container>
            </div>
        }

        {
            theme?.sidebar.active && <div style={{ height: '100%', display: 'flex' }}>
                <SidebarPC theme={theme}>{sidebarElements}</SidebarPC>
                <div>
                    {topElement}
                    <Container>{children}</Container>
                </div>

            </div>
        }
    </>
}