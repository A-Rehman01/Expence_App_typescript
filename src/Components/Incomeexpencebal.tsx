import React, { useContext} from 'react'
import CountUp from 'react-countup';

//import Context
import { Contextdata } from './../GlobalContext/Contextdata'

import {trasectiommap} from './../Types/Types'
export const Incomeexpencebal = () => {
   
    const { state } = useContext(Contextdata)
   
    let income=state.filter((incObj:trasectiommap)=> (incObj.amount>0))
    let expence=state.filter((incObj:trasectiommap)=> (incObj.amount<0))

    let totalincome=income.map((Obj: trasectiommap) => Obj.amount)
    let totalexpence=expence.map((Obj: trasectiommap) => Obj.amount)
    
    let incomebal:number=totalincome.reduce((total: number, items: number) => (total + items), 0).toFixed(2);
    let expencebal:number=totalexpence.reduce((total: number, items: number) => (total + items), 0).toFixed(2);
    
    return (
        <div className='incomeexpenxe'>
            <div className='income'>
                <div>Income</div>
                <div className='incomevalue'><CountUp separator=',' end={incomebal}/> PKR</div>
            </div>
            <div className='expence'>
                <div>Expenxe</div>
                <div className='expenxevalue'><CountUp separator=',' end={expencebal}/> PKR</div>
            </div>
        </div>
    )
}
