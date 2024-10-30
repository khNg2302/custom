
import { useToggleDisplay } from "@/hooks/useToggleDisplay"
import { CloseIcon, ThemeValues, ToggleDisplayEnum } from "@/types/ui"
import { ReactNode, useState } from "react"
import Button from "../Button"
import { Overlay } from "../Overlay"
import { SidebarFrame } from "./SidebarFrame"

interface SidebarMobile {
    theme: ThemeValues | null
    children?:ReactNode
}

export const SidebarMobile = ({ theme, children }: SidebarMobile) => {
    const [activeSidebar, setActiveSidebar] = useState(false)

    const handleToggleSideBar = () => {
        setActiveSidebar(!activeSidebar)
    }

    const { displayState, handleHidden } = useToggleDisplay({ open: activeSidebar, onClose: () => { setActiveSidebar(false) } })

    const currentDisplayStyle = displayState === ToggleDisplayEnum.enter ? {
        transform: 'translateX(0%)'
    } : { transform: 'translateX(-100%)' }
    return <div style={{ height: '100%'}}>
        <Button icon='lineicons:menu' label='' type='ghost' onClick={handleToggleSideBar}></Button>
        <Overlay open={activeSidebar} onClick={() => { setActiveSidebar(false) }} />
        <SidebarFrame style={{ ...currentDisplayStyle, position: 'absolute', inset:0,zIndex:1 }} elementStyle={{paddingLeft:'1.5rem'}} onTransitionEnd={handleHidden} theme={theme} topElements={<div style={{ display: 'flex', justifyContent: 'start' as string }}>
            <Button icon={CloseIcon} label='' type='ghost' onClick={() => setActiveSidebar(false)}></Button>
        </div>}>
           {children}
        </SidebarFrame>
    </div>
}

