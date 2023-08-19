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
    isLoading,
  } = useSelector((state) => state.account);

  function handleDeposit() {
    if (depositAmount > 0) {
      dispatch(deposit(Number(depositAmount), currency));
      setDepositAmount("");
      setCurrency("USD");
    }
  }

  function handleWithdrawal() {
    if (currentBalance - withdrawalAmount >= 0) {
      dispatch(withdraw(Number(withdrawalAmount)));
      setWithdrawalAmount("");
    }
  }

  function handleRequestLoan() {
    const obj = {
      amount: Number(loanAmount),
      loanPurpose: loanPurpose,
    };
    dispatch(requestLoan(obj));
    setLoanAmount("");
    setLoanPurpose("");
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
            <th>Deposit</th>
            <th>Withdraw</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex gap-1">
                <input
                  type="number"
                  onChange={(event) => {
                    setDepositAmount(event.target.value);
                  }}
                  placeholder="Deposit Amount"
                  value={depositAmount}
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

                <button
                  className="btn btn--green"
                  disabled={isLoading}
                  onClick={handleDeposit}
                >
                  Deposit
                </button>
              </div>
            </td>
            <td>
              <div className="flex gap-1">
                <input
                  type="number"
                  value={withdrawalAmount}
                  onChange={(event) => {
                    setWithdrawalAmount(event.target.value);
                  }}
                  placeholder="Withdrawal amount"
                />
                <button className="btn btn--red" onClick={handleWithdrawal}>
                  Withdraw
                </button>
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
              <div className="flex gap-2">
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(event) => {
                    setLoanAmount(event.target.value);
                  }}
                  placeholder="Enter Loan amount"
                />
                <input
                  type="text"
                  value={loanPurpose}
                  onChange={(event) => {
                    setLoanPurpose(event.target.value);
                  }}
                  placeholder="Enter loan purpose"
                />
                <button
                  className="btn btn--green w-full"
                  onClick={handleRequestLoan}
                >
                  Request loan
                </button>
              </div>
            </td>
            <td>
              <div className="grid items-center">
                <button className="btn btn--red" onClick={handlePayLoan}>
                  Pay loan (${currentLoan})
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AccountOperations;
