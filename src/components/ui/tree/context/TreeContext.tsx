import { createContext, ReactNode, useContext } from "react"

const TreeContext = createContext({

})

export const TreeProvider = ({children}:{children:ReactNode}) => {
    return <TreeContext.Provider value={{}}>
        {children}
    </TreeContext.Provider>
}

export const useTreeContext = () => {
    const values = useContext(TreeContext)

    return values
}