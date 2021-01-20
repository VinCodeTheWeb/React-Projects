import React, { useState, useContext } from 'react'

import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const add = () => addTransaction(text, amount);

  const disabled = ![text, amount].every((require) => require);

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label>Text</label>
          <input type="text" placeholder="Enter text..." value={text} onChange={e => setText(e.target.value)} />
        </div>
        <div className="form-control">
          <label
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" placeholder="Enter amount..." value={amount} onChange={e => setAmount(e.target.value)}/>
        </div>
        <button className="btn" type='button' disabled={disabled} onClick={add}>Add transaction</button>
      </form>
    </>
  )
}
