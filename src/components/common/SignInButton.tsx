'use client'
import { ButtonComp } from "@/types/ui"
import Button from "../ui/Button"
import SignIn from "../features/SignIn"
import { Modal } from "../ui/Modal"
import { useState } from "react"

interface SignInButtonI extends ButtonComp {
    label: string
}

export const SignInButton = ({ ...button }: SignInButtonI) => {
    const [openModal, setOpenModal] = useState(false)
    return <>
        <Button {...button} onClick={() => { setOpenModal(true) }}></Button>
        <Modal useOverlay={true} open={openModal} onClose={() => { setOpenModal(false) }} >
            <SignIn />
        </Modal>
    </>
}