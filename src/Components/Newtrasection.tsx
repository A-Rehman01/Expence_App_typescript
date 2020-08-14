import React, { useContext,useState } from 'react'
import {Contextdata} from './../GlobalContext/Contextdata'

export const Newtrasection = () => {
    var expence:number=0;    
    const [text, setText] = useState<string>('')
    const [amount, setAmount] = useState <string>('')

    const {dispatch}=useContext(Contextdata);

    function addTransaction(transaction:object){
        dispatch({
            type:'ADD',
            payload:transaction
        });
    }

    function  Submit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const newTra:object=expence===0?
        {
            id: (Math.random() * 1000000000).toFixed(0),
            text,
            amount:  Math.abs(parseInt(amount)) 
        }:
        {
            id: (Math.random() * 1000000000).toFixed(0),
            text,
            amount: -Math.abs(parseInt(amount))
        }
        addTransaction(newTra)
        expence=0;
        setText('')
        setAmount('');
    }

    function updateText(e:React.ChangeEvent<HTMLInputElement>){
        setText(e.currentTarget.value)
    }
    function updateAmount(e:React.ChangeEvent<HTMLInputElement>){
        setAmount( e.currentTarget.value  )
    }
    return (
        <div className='newTrasection'>
            <div  className='newtrasextionheading'>Add new transaction</div>
            <hr/>
            <form action="" className='NewTrasectionform' onSubmit={Submit}>
                <input className='inputfields' value={text} onChange={updateText} type="text" required placeholder='Enter Text...'/>
                <input className='inputfields' value={amount} onChange={updateAmount} type="number" required placeholder='Enter Amount...'/>
                <div className='NewTrasectionsbtn'>
                    <button className='incomebtn'  onClick={() => (expence = 0)}>Income</button>
                    <button className='expenxebtn'  onClick={() => (expence = 1)}>Expenxe</button>
                </div>
            </form>
        </div>
    )
}
