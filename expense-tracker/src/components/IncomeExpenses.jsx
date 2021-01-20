import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const moneyPlus = transactions.reduce((acc, item) => {
    if (item.amount > 0) acc += item.amount;
    return acc;
  }, 0).toFixed(2);

  const moneyMinus = transactions.reduce((acc, item) => {
    if (item.amount < 0) acc += item.amount;
    return acc;
  }, 0).toFixed(2);

  return (
    <div className="inc-exp-container">
    <div>
      <h4>Income</h4>
        <p className="money plus">+${moneyPlus}</p>
    </div>
    <div>
      <h4>Expense</h4>
        <p className="money minus">-${moneyMinus}</p>
    </div>
  </div>
  )
}
