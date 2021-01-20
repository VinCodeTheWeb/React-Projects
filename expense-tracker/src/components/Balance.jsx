import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const balance = transactions.reduce((acc, item) => {
    acc += item.amount;
    return acc
  }, 0).toFixed(2)

  const sign = balance !== '0.00' ? balance > 0 ? '+' : '-' : ''

  return (
    <>
      <h4>Your Balance</h4>
      <h1>{sign}${balance}</h1>
    </>
  )
}
