import { ReactNode } from "react"
import { SidebarFrame } from "./SidebarFrame"
import { ThemeValues } from "@/types/ui"

interface SidebarPC {
    theme: ThemeValues | null
    children?: ReactNode
}

export const SidebarPC = ({ theme, children }: SidebarPC) => {
    return <>
        <SidebarFrame theme={theme} style={{
            padding: 0
        }} elementStyle={{
            padding: 0
        }}>
            {children}
        </SidebarFrame>

    </>

}