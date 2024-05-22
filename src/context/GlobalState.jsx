import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial data whose context is to be created to use in the whole application
const initialState = {
    transactions: [ 
        {id:1, text:'Salary', amount:500}
       ],

}

//creating the context 
export const GlobalContext = createContext (initialState)



//In order to access the context we have to make the provider component of the context
//Through GlobalProvider & AppReducer the state i.e. transactions array is accesible to each component to the app
export const  GlobalProvider = ({children})=>{

    const[state, dispatch] = useReducer(AppReducer, initialState)

    const deleteTransaction = (id)=>{

        if (id === 1) {
            alert("Cannot delete the initial transaction");
            return;
        }

        dispatch({
            type: 'DELETE_TRANSACTION',
            payload : id
        })
    }

    const addTransaction = (transaction)=>{

        transaction.amount = -Math.abs(transaction.amount);

        dispatch({
            type: 'ADD_TRANSACTION',
            payload : transaction
        })
    }

    const updateTransaction = (id, amount) => {
        dispatch({ type: 'UPDATE_TRANSACTION', 
        payload: { id, amount }
     });
    };

    return(
        <GlobalContext.Provider value={{transactions: state.transactions,
            deleteTransaction,
            addTransaction,
            updateTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
