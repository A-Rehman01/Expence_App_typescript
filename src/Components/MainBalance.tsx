import React, { useContext} from 'react'
import CountUp from 'react-countup';

//import Context
import { Contextdata } from './../GlobalContext/Contextdata'

//import type
import {trasectiommap} from './../Types/Types'

export const MainBalance = () => {
    const { state } = useContext(Contextdata)
    let amount= state.map((Obj: trasectiommap) => Obj.amount)
    let balance: number = amount.reduce((total: number, items: number) => (total + items), 0).toFixed(2);
  
    return (
        <div className='mainblance'>
            <div className='mainbalanceheaing'>Your Balance</div>
            <div className='mainbalancevalue'><CountUp separator=',' end={balance}/> PKR</div>
        </div>
    )
}
