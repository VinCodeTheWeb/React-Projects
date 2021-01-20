const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        transactions: [...state.transactions, action.data],
      };

    case 'REMOVE':
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.id
        ),
      };
    default:
      return state;
  }
};

export { AppReducer };
