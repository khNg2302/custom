import { useToggleDisplay } from "@/hooks/useToggleDisplay"
import { ToggleDisplayEnum } from "@/types/ui"

interface OverlayI {
    open: boolean
    onClick: () => void
}

const overlayHiddenStyle = {
    opacity: 0
}

const overlayLeaveStyle = {
    opacity: 0
}

const overlayDisplayStyle = {
    opacity: 1
}

export const Overlay = ({ open, onClick }: OverlayI) => {

    const { isDisplay, displayState, handleHidden } = useToggleDisplay({ open, onClose: onClick })

    const currentDisplayStyle = displayState === ToggleDisplayEnum.enter ? overlayDisplayStyle : displayState === ToggleDisplayEnum.leave ? overlayLeaveStyle : overlayHiddenStyle


    return (
        <>
            {isDisplay && <div onTransitionEnd={handleHidden} onClick={onClick} style={{
                position: 'fixed',
                inset: 0,
                zIndex: 1,
                transition: '0.15s',
                background: 'rgba(0,0,0,.5)',
                ...currentDisplayStyle
            }}>
            </div>}
        </>
    )
}