


import { Option } from "../Option"
import { SidebarFrame } from "./SidebarFrame"
import { ThemeValues } from "@/types/ui"

interface SidebarPC {
    theme: ThemeValues |null
}

export const SidebarPC = ({ theme }: SidebarPC) => {



    return <>
        <SidebarFrame theme={theme} style={{
            padding:0
        }} elementStyle={{
            padding:0
        }}>
            <Option label={"Option"} value={"1"} icon='material-symbols:1k-plus' />
            <Option label={"Option"} value={"1"} icon='material-symbols:1k-plus' />
            <Option label={"Option"} value={"1"} icon='material-symbols:1k-plus' />
        </SidebarFrame>

    </>

}