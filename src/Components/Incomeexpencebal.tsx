import React, { useContext} from 'react'

//import Context
import { Contextdata } from './../GlobalContext/Contextdata'

export const Incomeexpencebal = () => {
   
    const { state } = useContext(Contextdata)
   
    let income:any=state.filter((incObj:any)=> (incObj.amount>0))
    let expence:any=state.filter((incObj:any)=> (incObj.amount<0))

    let totalincome:any=income.map((Obj: any) => Obj.amount)
    let totalexpence:any=expence.map((Obj: any) => Obj.amount)
    
    let incomebal:any=totalincome.reduce((total: number, items: number) => (total + items), 0).toFixed(2);
    let expencebal:any=totalexpence.reduce((total: number, items: number) => (total + items), 0).toFixed(2);
    
    return (
        <div className='incomeexpenxe'>
            <div className='income'>
                <div>Income</div>
                <div className='incomevalue'>{incomebal} PKR</div>
            </div>
            <div className='expence'>
                <div>Expenxe</div>
                <div className='expenxevalue'>{expencebal} PKR</div>
            </div>
        </div>
    )
}
