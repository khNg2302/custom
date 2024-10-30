'use client'
import { useState } from "react"
import { TreeCollapseElement } from "./components/CollapseElement"
import { TreeSingleElement } from "./components/SingleElement"

type TreeSingleElementType = {
    key: string
    label: string
    values: { [field: string]: unknown }
    canClick?: boolean
    onClick?: (values: unknown) => void
}

type TreeCollapseElementType = TreeSingleElementType & {
    children: Array<TreeCollapseElementType | TreeSingleElementType>
}

type TreeType = Array<TreeCollapseElementType | TreeSingleElementType>

interface TreeI {
    tree: TreeType
    onItemClick?: (values: unknown) => void
}

export const Tree = ({ tree, onItemClick }: TreeI) => {
    const [collapsedElements, setCollapsedElements] = useState<string[]>([])

    const handleCollapse = (elementKey: string) => {
        setCollapsedElements([...collapsedElements, elementKey])
    }

    const handleUnCollapse = (elementKey: string) => {
        setCollapsedElements([...collapsedElements.filter((key) => key !== elementKey)])
    }

    const toggleFuncCollapse = (collapse: boolean) => {
        if (!collapse) {
            return handleCollapse
        }
        return handleUnCollapse
    }


    return <>
        {tree.map((item, index) => {
            if ((item as TreeCollapseElementType).children) {
                return <TreeCollapseElement toggleFuncCollapse={toggleFuncCollapse} collapsedElements={collapsedElements} eleKey={item.key} label={item.label} key={index}>
                    <Tree onItemClick={onItemClick} tree={(item as TreeCollapseElementType).children} />
                </TreeCollapseElement>

            }

            return <TreeSingleElement key={index} label={item.label} value={item.values} onClick={item.onClick || onItemClick} />
        })}
    </>
}