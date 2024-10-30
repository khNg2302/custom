import { Icon } from "@iconify/react/dist/iconify.js"
import { Text } from "../../Text"
import { ReactNode } from "react"
import { useToggleDisplay } from "@/hooks/useToggleDisplay"
import { ToggleDisplayEnum } from "@/types/ui"

interface TreeCollapseElement {
    label: string
    children: ReactNode
    collapsedElements: string[]
    eleKey: string
    toggleFuncCollapse: (collapse: boolean) => (elementKey: string) => void
}

export const TreeCollapseElement = ({ label, collapsedElements, toggleFuncCollapse, eleKey, children }: TreeCollapseElement) => {
    const collapsed = collapsedElements.includes(eleKey)
    const handleToggleCollapse = toggleFuncCollapse(collapsed)

    const { displayState, handleHidden } = useToggleDisplay({ open: collapsed, onClose: () => handleToggleCollapse(eleKey) })

    const currentChildrenBoxDisplayStyle = displayState === ToggleDisplayEnum.enter ? {
        height: 'fit-content'
    } : {
        height: '28px'
    }

    const currentArrowDisplayStyle = displayState === ToggleDisplayEnum.enter ? {
        rotate: '180deg'
    } : {
        rotate: '0deg'
    }

    const currentChildrenDisplayStyle = displayState === ToggleDisplayEnum.enter ? {
        transform: 'translateX(0px)'
    } : {
        transform: 'translateX(-1rem)'
    }

    return <div style={{ ...currentChildrenBoxDisplayStyle, transition: '.15s', overflow: 'hidden' }} onTransitionEnd={handleHidden}>
        <div onClick={() => handleToggleCollapse(eleKey)} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '.5rem',

        }}>
            <Text level='span'>{label}</Text>
            <Icon icon='icon-park-outline:down' style={{ ...currentArrowDisplayStyle, transition: '.15s' }} />
        </div>
        {displayState !== ToggleDisplayEnum.hidden && <div style={{
            paddingLeft: '1rem',
            ...currentChildrenDisplayStyle
        }}>{
                children
            }</div>}


    </div>
}