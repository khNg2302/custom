import { HTMLAttributes, ReactNode } from "react"

interface TextI {
    level: 1 | 2 | 3 | 4 | 'p' | 'span'
    children: ReactNode
    style?: HTMLAttributes<unknown>["style"]
}

export const Text = ({ level, children, style }: TextI) => {
    return <>
        {level === 1 && <h1>{children}</h1>}
        {level === 'span' && <span style={{
            ...style
        }}>{children}</span>}
        {level === 'p' && <p style={{
            ...style
        }}>{children}</p>}
    </>
}