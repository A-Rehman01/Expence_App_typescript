// types
import {PropsAction,trasectiommap} from './../Types/Types'

export function Reducer(state: [], action: PropsAction) {

    switch (action.type) {
        case 'ADD':
            return [action.payload, ...state]
        case 'DEL':
            return state.filter((stateObj: trasectiommap) => stateObj.id !== action.payload);
        default:
            return state;
    }
}