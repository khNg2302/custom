import React, { HTMLAttributes, ReactNode } from "react"
import { FlexBox } from "../containers/FlexBox"
import { ThemeValues } from "@/types/ui"

interface SidebarFrameI {
    children: ReactNode
    theme: ThemeValues | null
    topElements?: ReactNode
    style?: HTMLAttributes<HTMLDivElement>['style']
    onTransitionEnd?: HTMLAttributes<HTMLDivElement>['onTransitionEnd']
    elementStyle?: HTMLAttributes<HTMLDivElement>['style']

}
export const SidebarFrame = ({ children, topElements, style, theme, elementStyle, onTransitionEnd }: SidebarFrameI) => {

    return <div style={{
        background: 'white',
        height: '100%',
        flexDirection: 'column',
        display: 'flex',
        padding: '0',
        inset: 0,
        gap: '0',
        transition: theme?.transition as string,
        width: '200px',
        overflow: 'hidden',
        ...theme?.sidebar as {},
        ...style,
    }}
        onTransitionEnd={onTransitionEnd}
    >
        {topElements}
        <div style={{ flex: 1, overflow: 'auto' }}>
            <FlexBox styles={{ width: `calc(200px - 1.5rem`, gap: 0, ...elementStyle, borderRadius: '0px' }}>
                {children}
            </FlexBox>
        </div>
    </div >
}