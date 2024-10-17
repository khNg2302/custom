import { Icon } from "@iconify/react/dist/iconify.js"
import Button from "../ui/Button"
import { FlexBox } from "../ui/containers/FlexBox"
import { Modal } from "../ui/Modal"

interface SignOutI {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export const SignOut = ({ open, onOpenChange }: SignOutI) => {
    return (
        <Modal useOverlay={false} open={open} onClose={() => onOpenChange(false)}>
            <FlexBox styles={{ background: 'white' }}>
                <Icon icon='' />
                <p>Do you want sign out?</p>
                <FlexBox flexDirection="row">
                    <Button label="No" onClick={()=>onOpenChange(false)}></Button>
                    <Button label="Yes"></Button>
                </FlexBox>
            </FlexBox>
        </Modal>

    )
}