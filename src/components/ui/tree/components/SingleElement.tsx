import { ReactNode } from "react"
import { Option } from "../../Option"

interface TreeSingleElementI {
    component?: (values: unknown) => ReactNode
    label: string
    value: unknown
    onClick?: (values: unknown) => void
}

export const TreeSingleElement = ({ component, value, onClick }: TreeSingleElementI) => {
    return <>
        {component && component({...value as object})}
        {<Option label={"test"} value={value} onClick={() => {
            onClick && onClick && onClick(value)
        }} />}
    </>
}