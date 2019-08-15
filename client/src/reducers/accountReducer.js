import {
  ADD_ACCOUNT,
  DELETE_ACCOUNT,
  GET_ACCOUNTS,
  ACCOUNTS_LOADING,
  GET_TRANSACTIONS,
  TRANSACTIONS_LOADING,
  GET_AUTH
} from "../actions/types";

const initState = {
  accounts: [],
  transactions: [],
  auth: [],
  accountsLoading: false,
  transactionsLoading: false
};

export default function(state = initState, action) {
  switch (action.type) {
    case ACCOUNTS_LOADING:
      return {
        ...state,
        accountsLoading: true
      };
    case ADD_ACCOUNT:
      return {
        ...state,
        accounts: [action.payload, ...state.accounts]
      };
    case DELETE_ACCOUNT:
      return {
        ...state,
        accounts: state.accounts.filter(
          account => account._id !== action.payload
        )
      };
    case GET_ACCOUNTS:
      return {
        ...state,
        accounts: action.payload,
        accountsLoading: false
      };
    case TRANSACTIONS_LOADING:
      return {
        ...state,
        transactionsLoading: true
      };
    case GET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
        transactionsLoading: false
      };
    case GET_AUTH:
      return {
        ...state,
        auth: action.payload
      };
    default:
      return state;
  }
}
