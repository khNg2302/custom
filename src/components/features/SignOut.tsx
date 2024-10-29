import { Icon } from "@iconify/react/dist/iconify.js"
import Button from "../ui/Button"
import { FlexBox } from "../ui/containers/FlexBox"

interface SignOutI {
    onClose: (open: boolean) => void
}

export const SignOut = ({ onClose }: SignOutI) => {
    return (
        <FlexBox styles={{ background: 'white' }}>
            <Icon icon='' />
            <p>Do you want sign out?</p>
            <FlexBox flexDirection="row">
                <Button label="No" onClick={() => onClose(false)}></Button>
                <Button label="Yes"></Button>
            </FlexBox>
        </FlexBox>


    )
}