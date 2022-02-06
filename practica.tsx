import { useContext, createContext, PropsWithChildren, ReactNode } from 'react'

interface IAppContext {
    title?: string;
}

const defaultState = {
    title: 'Default Title'
}

//Partial: Make all properties in an object optional
// export const DataContext = createContext<Partial<IAppContext>>(defaultState);

//Required: Make all properties in an object required

const DataContext = createContext<IAppContext>(defaultState);

type ContextProp = {
    children?: ReactNode
}

// export const AppProvider = ({ children }:PropsWithChildren<{}>): JSX.Element => {
export const AppProvider = ({ children }: ContextProp): JSX.Element => {
    return (
        <DataContext.Provider value={{ title: 'Hello' }}>
            {children}
        </DataContext.Provider>
    )
}

export const useAppContext = () => useContext(DataContext) as IAppContext