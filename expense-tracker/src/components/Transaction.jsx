import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction: { text, amount, id  } }) => {
  const { removeTransaction } = useContext(GlobalContext);

  const sign = amount < 0 ? '' : '+$';
  return (
      <li className={`${amount < 0 ? 'minus': 'plus'}`} onClick={() => removeTransaction(id)}>
      {text} <span>{`${sign}${amount}`}</span><button className="delete-btn">x</button>
      </li>
  )
}
