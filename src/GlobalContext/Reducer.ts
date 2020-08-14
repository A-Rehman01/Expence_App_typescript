import { Dispatch } from "react"

type PropsAction = {
    type: string,
    payload: number
}

export function Reducer(state: [], action: PropsAction) {

    switch (action.type) {
        case 'ADD':
            return [action.payload, ...state]
        default:
            return state;
    }
}