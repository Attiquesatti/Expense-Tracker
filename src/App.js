import './App.css';
import Addtransaction from './components/Addtransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import Incomeexpense from './components/Incomeexpense';
import Transactionlist from './components/Transactionlist';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
        <Header/>
        <div className='container'>
        <Balance/>
        <Incomeexpense/>
        <Transactionlist/>
        <Addtransaction/>
        </div>
    </GlobalProvider>
  );
}

export default App;
