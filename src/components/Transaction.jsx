import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


const Transaction = ({transaction}) => {
    const { deleteTransaction } = useContext(GlobalContext) 

    // const sign = transaction.amount < 0 ? '-' : '+'

    //math.abs is used to make the amount as an absolute number to avoid double negative showing
  return (
    <li className={transaction.amount< 0 ? 'minus' : 'plus' }>
          {transaction.text} <span>${Math.abs(transaction.amount)}</span>
          <button className="delete-btn" onClick={()=>deleteTransaction(transaction.id)}>x</button> 
    </li> 
  )
}

export default Transaction
