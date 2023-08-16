import { useReducer, useState } from "react";
import BalanceDisplay from "../BalanceDisplay/BalanceDisplay.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  deposit,
  payLoan,
  requestLoan,
  withdraw,
} from "../accountSlice/accountSlice.js";

function AccountOperations() {
  const dispatch = useDispatch();

  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");

  const {
    balance: currentBalance,
    loan: currentLoan,
    loanPurpose: currentLoanPurpose,
    isLoading,
  } = useSelector((state) => state.account);

  function handleDeposit() {
    if (depositAmount > 0) {
      const obj = {
        amount: Number(depositAmount),
        currency: currency,
      };
      dispatch(deposit(obj));
      // setDepositAmount("");
    }
  }

  function handleWithdrawal() {
    if (currentBalance - withdrawalAmount >= 0) {
      dispatch(withdraw(Number(withdrawalAmount)));
      // setWithdrawalAmount("");
    }
  }

  function handleRequestLoan() {
    const obj = {
      amount: Number(loanAmount),
      purpose: loanPurpose,
    };
    dispatch(requestLoan(obj));
  }

  function handlePayLoan() {
    dispatch(payLoan());
  }

  return (
    <div>
      <h2>Account Operations</h2>
      <table>
        <thead>
          <tr>
            <th>Balance</th>
            <th>Deposit</th>
            <th>Withdraw</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <BalanceDisplay />
            <td>
              <div className="flex">
                <input
                  type="number"
                  value={depositAmount}
                  onChange={(event) => {
                    setDepositAmount(event.target.value);
                  }}
                />
                <select
                  value={currency}
                  onChange={(event) => {
                    setCurrency(event.target.value);
                  }}
                >
                  <option value="USD">US Dollar</option>
                  <option value="EUR">Euro</option>
                  <option value="GBP">British Pound</option>
                </select>

                <button disabled={isLoading} onClick={handleDeposit}>
                  Deposit
                </button>
              </div>
            </td>
            <td>
              <div className="flex">
                <input
                  type="number"
                  value={withdrawalAmount}
                  onChange={(event) => {
                    setWithdrawalAmount(event.target.value);
                  }}
                />
                <button onClick={handleWithdrawal}>Withdraw</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <h2>Loan Operations</h2>
      <table>
        <thead>
          <tr>
            <th>Request Loan</th>
            <th>Pay Loan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex justify-center">
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(event) => {
                    setLoanAmount(event.target.value);
                  }}
                  placeholder="Loan amount"
                />
                <input
                  value={loanPurpose}
                  onChange={(event) => {
                    setLoanPurpose(event.target.value);
                  }}
                  placeholder="Loan purpose"
                />
                <button onClick={handleRequestLoan}>Request loan</button>
              </div>
            </td>
            <td>
              <button onClick={handlePayLoan}>Pay loan (${currentLoan})</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AccountOperations;
