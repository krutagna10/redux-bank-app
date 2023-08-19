import CreateCustomer from "./features/customers/CreateCustomer/CreateCustomer.jsx";
import AccountOperations from "./features/accounts/AccountOperations/AccountOperations.jsx";
import Customer from "./features/customers/Customer/Customer.jsx";
import BalanceDisplay from "./features/accounts/BalanceDisplay/BalanceDisplay.jsx";
import { useSelector } from "react-redux";

function App() {
  const name = useSelector((state) => state.customer.name);

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {name.trim().length === 0 ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
        </>
      )}
    </div>
  );
}

export default App;
