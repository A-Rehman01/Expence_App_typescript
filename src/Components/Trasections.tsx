import React, { useContext } from 'react'

//Components
import { Contextdata } from './../GlobalContext/Contextdata'

type trasectiommap = {
    text:string;
    amount:number
}

export const Trasections = () => {

    const {state}= useContext(Contextdata)
    console.log('Trasections', state)

    return (
        <div>
            <div className='trasextionheading'>History</div>
            <hr />
            <ul>
                {
                    state.map((traObj:trasectiommap,ind:number) => {
                        return (
                            <li key={ind} className='trasection'>
                                <div className='trasectiondel'>
                                    <div className='deleted'>X</div>
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
