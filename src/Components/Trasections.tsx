import React, { useContext } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import HistoryIcon from '@material-ui/icons/History';
//Components
import { Contextdata } from './../GlobalContext/Contextdata'

//types
import {trasectiommap} from './../Types/Types'
export const Trasections = () => {

    const { state } = useContext(Contextdata)
    const { dispatch } = useContext(Contextdata);


    function DeleteTrasection(event: number) {

        dispatch({
            type: 'DEL',
            payload:event,
        });

    }

    return (
        <div>
            
            <div className='trasextionheading'><HistoryIcon/> History</div>
            
            <hr />
            
            <ul>
                {
                    state.map((traObj: trasectiommap, ind: number) => {
                        return (
                            <li key={ind} className='trasection'>
                                <div className='trasectiondel'>
                                    <button 
                                    onClick={() => (DeleteTrasection(traObj.id))}
                                    className='deleted'
                                    >
                                    <DeleteIcon  className='delicon'/>
                                    </button>
                                    {traObj.text}
                                </div>
                                <div>{traObj.amount} PKR</div>
                            </li>)
                    })
                }
            </ul>

        </div>
    )
}
