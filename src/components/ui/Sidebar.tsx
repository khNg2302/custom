'use client'

import useTheme from "@/hooks/useTheme"
import Button from "./Button"
import { FlexBox } from "./containers/FlexBox"
import { Option } from "./Option"
import { CloseIcon, ToggleDisplayEnum } from "@/types/ui"
import { useToggleDisplay } from "@/hooks/useToggleDisplay"
import { useEffect, useState } from "react"
import { Overlay } from "./Overlay"

interface SidebarI {

}

export const Sidebar = ({ }: SidebarI) => {
    const [activeSidebar, setActiveSidebar] = useState(false)

    const handleToggleSideBar = () => {
        setActiveSidebar(!activeSidebar)
    }

    const { displayState, handleHidden } = useToggleDisplay({ open: activeSidebar, onClose: () => { setActiveSidebar(false) } })
    const theme = useTheme()
    const currentDisplayStyle = displayState === ToggleDisplayEnum.enter ? {
        transform: 'translateX(0%)'
    } : { transform: 'translateX(-100%)' }
    return <>
        <Button icon='lineicons:menu' label='' type='ghost' onClick={handleToggleSideBar}></Button>
        <Overlay open={activeSidebar} onClick={() => { setActiveSidebar(false) }} />
        <div style={{
            zIndex: 2,
            background: 'white',
            height: '100%',
            flexDirection: 'column',
            display: 'flex',
            ...currentDisplayStyle,
            padding: '0',
            position: 'absolute',
            inset: 0,
            gap: '0',
            ...theme?.sidebar as {},
            transition: theme?.transition as string,
            width: '200px',
            overflow: 'hidden',
            borderRadius: theme?.borderRadius
        }}>
            <div style={{ display: 'flex', justifyContent: 'start' as string }}>
                <Button icon={CloseIcon} label='' type='ghost' onClick={() => setActiveSidebar(false)}></Button>
            </div>
            <div style={{ flex: 1, overflow: 'auto' }}>
                <FlexBox onTransitionEnd={handleHidden} styles={{ width: `calc(200px - 1.5rem`, gap: 0, paddingLeft: '1.5rem' }}>
                    <Option label={"Option"} value={"1"} icon='material-symbols:1k-plus' />
                    <Option label={"Option"} value={"1"} icon='material-symbols:1k-plus' />
                    <Option label={"Option"} value={"1"} icon='material-symbols:1k-plus' />
                </FlexBox>
            </div>
        </div >
    </>

}