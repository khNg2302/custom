'use client'

import Button from "../ui/Button"
import { useCallback, useState } from "react"
import { Dropdown } from "../ui/Dropdown"
import { SignOut } from "../features/SignOut"
import { Components } from "@/types/utlis"
import { Overlay } from "../ui/Overlay"

export const UserInfo = () => {
    const [openDropdown, setOpenDropdown] = useState(false)
    const [displayOverlay, setDisplayOverlay] = useState(false)
    const [warningSignOut, setWarningSignOut] = useState(false)

    const handleToggleDropdown = useCallback((openValue: boolean) => {
        setOpenDropdown(openValue)
    }, [])

    const handleToggleOverlay = useCallback((openValue: boolean) => {
        setDisplayOverlay(openValue)
    }, [])

    const handleClickDropdownBtn = useCallback((openValue: boolean)=>{
        handleToggleDropdown(openValue)
        handleToggleOverlay(openValue)
    },[handleToggleDropdown, handleToggleOverlay])

    const handleOverlayClick = () => {
        handleToggleDropdown(false)
        handleToggleOverlay(false)
        handleToggleSignOutWarning(false)
    }


    const user = {}

    const handleSignOutWarning = () => {
        handleToggleDropdown(false)
        setWarningSignOut(true)
    }

    const handleToggleSignOutWarning = (openValue: boolean) => {
        if(!openDropdown && !openValue) {
            setDisplayOverlay(false)
        }
        setWarningSignOut(openValue)
    }

    if (user) {
        return <>
            <Overlay open={displayOverlay} onClick={handleOverlayClick}></Overlay>
            <Dropdown useOverlay={false} icon='ci:user-01' label="Nim1" open={openDropdown} onChange={handleClickDropdownBtn} items={[
                {
                    label: 'View profile',
                    key: 'userProfile',
                    onClick: (key) => {
                        console.log(key)
                        handleToggleDropdown(!openDropdown)
                        handleToggleOverlay(!displayOverlay)
                    },
                    type: Components.OPTION
                },
                {
                    label: 'Sign out',
                    key: 'signOut',
                    onClick: (key) => {
                        console.log(key)
                        handleSignOutWarning()
                    },
                    type: Components.OPTION
                }
            ]} />
            <SignOut open={warningSignOut} onOpenChange={handleToggleSignOutWarning} />
        </>
    }

    return <Button icon='ci:user-01' label="Sign in"></Button>
}