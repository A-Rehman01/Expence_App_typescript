import React from 'react'

export const Newtrasection = () => {
    return (
        <div className='newTrasection'>
            <div  className='newtrasextionheading'>Add new transaction</div>
            <hr/>
            <form action="" className='NewTrasectionform' >
                <input className='inputfields' type="text" required placeholder='Enter Text...'/>
                <input className='inputfields' type="number" required placeholder='Enter Amount...'/>
                <div className='NewTrasectionsbtn'>
                    <button className='incomebtn'>Income</button>
                    <button className='expenxebtn'>Expenxe</button>
                </div>
            </form>
        </div>
    )
}
