'use client'

import Button from "../ui/Button"
import { useCallback, useState } from "react"
import { Dropdown } from "../ui/Dropdown"
// import { SignOut } from "../features/SignOut"
import { Components } from "@/types/utlis"
import { Overlay } from "../ui/Overlay"
import { Modal } from "../ui/Modal"
import { SignOut } from "./SignOut"

export const UserInfo = () => {
    const [openDropdown, setOpenDropdown] = useState(false)
    const [displayOverlay, setDisplayOverlay] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    const handleToggleDropdown = useCallback((openValue: boolean) => {
        setOpenDropdown(openValue)
    }, [])

    const handleToggleOverlay = useCallback((openValue: boolean) => {
        setDisplayOverlay(openValue)
    }, [])

    const handleClickDropdownBtn = useCallback((openValue: boolean) => {
        handleToggleDropdown(openValue)
        handleToggleOverlay(openValue)
    }, [handleToggleDropdown, handleToggleOverlay])

    const handleCloseAll = () => {
        handleToggleDropdown(false)
        handleToggleOverlay(false)
        handleToggleSignOutWarning(false)
    }

    const user = {}

    const handleSignOutWarning = () => {
        handleToggleDropdown(false)
        setOpenModal(true)
    }

    const handleToggleSignOutWarning = (openValue: boolean) => {
        if (!openDropdown && !openValue) {
            setDisplayOverlay(false)
        }
        setOpenModal(openValue)
    }
    

    if (user) {
        return <>
            <Overlay open={displayOverlay} onClick={handleCloseAll}></Overlay>
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
            <Modal useOverlay={false} open={openModal} onClose={handleCloseAll}>
               <SignOut onClose={handleToggleSignOutWarning} />
            </Modal>
           
        </>
    }

    return <Button icon='ci:user-01' label="Sign in"></Button>
}