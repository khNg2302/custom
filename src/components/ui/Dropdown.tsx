'use client'

import { ButtonComp, ToggleDisplayEnum } from "@/types/ui"
import Button from "./Button"
import { Option } from "./Option"
import { useToggleDisplay } from "@/hooks/useToggleDisplay"
import { FlexBox } from "./containers/FlexBox"
import { Components } from "@/types/utlis"
import { ReactNode } from "react"

export type DropdownItem = {
    label: string,
    key: string
    onClick?: (key: string) => void
    type?: Components
    comp?: ReactNode
}

interface DropdownI extends ButtonComp {
    open: boolean
    onChange: (open: boolean) => void
    items: DropdownItem[]
    useOverlay: boolean
}

const dropdownHiddenStyle = {
    opacity: 0
}

const dropdownLeaveStyle = {
    opacity: 0
}

const dropdownDisplayStyle = {
    opacity: 1
}

export const Dropdown = ({ items, open, onChange, useOverlay, ...button }: DropdownI) => {
    const { isDisplay, handleHidden, displayState, handleOutClose } = useToggleDisplay({
        open, onClose: () => onChange(false)
    })

    const currentDropdownDisplayStyle = displayState === ToggleDisplayEnum.enter ? dropdownDisplayStyle : displayState === ToggleDisplayEnum.leave ? dropdownLeaveStyle : dropdownHiddenStyle

    return <div style={{
        position: 'relative',

    }}>
        <Button {...button} onClick={() => onChange(!open)}></Button>
        {isDisplay && <div onClick={handleOutClose} style={{ position: 'fixed', transition: 'all .15s', inset: 0, zIndex: 0, background: useOverlay ? "rgba(0,0,0,.5)" : '', ...currentDropdownDisplayStyle }}></div>}


        {isDisplay && <FlexBox onTransitionEnd={handleHidden} styles={{ transition: 'all .15s', padding: '0', gap: 0, width: '100px', background: 'white', position: 'absolute', top: '110%', justifyContent: 'center', zIndex: 1, ...currentDropdownDisplayStyle }}>
            {items.map((item) => (
                < >
                    {(item.type === Components.OPTION) && <Option key={item.key} onClick={item.onClick} value={item.key} label={item.label}></Option>}
                    {!item.type && item.comp}
                </>
            ))}
        </FlexBox>}
    </div>
}