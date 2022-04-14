import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactList from "./components/TransactList";
import AddTransaction from "./components/AddTransaction";
import "./App.css";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
