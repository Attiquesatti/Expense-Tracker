import React, { useState , useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Addtransaction = () => {
    const [text, setText] = useState()
    const [amount, setAmount]=useState()

    const handleOnchange=(e)=>{
        setText(e.target.value)
    }
    
    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = e =>{
      e.preventDefault();

      const newTransaction = {
        id: Math.floor(Math.random()*10000000),
        text,
        amount: +amount
      }

      addTransaction(newTransaction);
      setText('')
      setAmount('')
    }
  return (
    <>
    <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={handleOnchange} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount
          </label>
          <input type="number" value={amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}


export default Addtransaction
