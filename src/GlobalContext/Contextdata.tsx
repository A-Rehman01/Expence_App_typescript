import React, { useReducer } from 'react'
import { Reducer } from './Reducer'

type ContextProps = {
    children: React.ReactNode
};

const trasections: object[] = [
]


export const Contextdata = React.createContext<object [] | any>(trasections)

const ContextProvider = ({ children }: ContextProps) => {

    let [state, dispatch] = useReducer<any>(Reducer, trasections)


    return (
        <Contextdata.Provider value={
            {state,dispatch}
        }>
            {children}
        </Contextdata.Provider>
    )
}
export default ContextProvider