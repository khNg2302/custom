'use client'
import { SideBarContainer } from "@/components/ui/SideBarContainer"
import { Tree } from "@/components/ui/tree"

const Notion = () => {

    return <div style={{ flex: 1, position: 'relative' }}>

        <SideBarContainer sidebarElements={
            <Tree onItemClick={(values)=>{
              console.log(values)  
            }} tree={[
                {
                    key: '1',
                    label: 'Option',
                    values: {},
                   
                },
                {
                    key: '2',
                    label: 'Option',
                    values: {},
                    children: [
                        {
                            key: '3',
                            label: 'Option',
                            values: {},
                            children: [
                                {
                                    key: '6',
                                    label: 'Option child',
                                    values: {}
                                }
                            ]
                        }
                    ]
                },
                {
                    key: '4',
                    label: 'Option',
                    values: {},
                    children: [
                        {
                            key: '5',
                            label: 'Option',
                            values: {}
                        }
                    ]
                }
            ]} />
        }>
            Notion

        </SideBarContainer>

    </div>
}

export default Notion