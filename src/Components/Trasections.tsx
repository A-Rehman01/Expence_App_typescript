import React, { useContext } from 'react'
import HistoryIcon from '@material-ui/icons/History';
//Components
import { Contextdata } from './../GlobalContext/Contextdata'

//types
import { trasectiommap } from './../Types/Types'
export const Trasections = () => {

    const { state } = useContext(Contextdata)
    const { dispatch } = useContext(Contextdata);


    function DeleteTrasection(event: number) {

        dispatch({
            type: 'DEL',
            payload: event,
        });

    }
    var today:Date = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    return (
        <div>

            <div className='trasextionheading'><HistoryIcon /> History</div>

            <hr />

            <ul>
                {
                    state.map((traObj: trasectiommap, ind: number) => {
                        return (
                            <li key={ind} className='trasection'>
                                <div className='trasectiondel'>
                                    {traObj.text}
                                    <br/>
                                   <span className='date'> {date} </span>
                                </div>
                                <div>{traObj.amount} PKR 
                                <button
                                        onClick={() => (DeleteTrasection(traObj.id))}
                                        className='deleted'
                                    >
                                        X
                                    </button>
                                </div>
                            </li>)
                    })
                }
            </ul>

        </div>
    )
}
