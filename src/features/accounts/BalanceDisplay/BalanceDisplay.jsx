import { useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const { balance } = useSelector((state) => state.account);

  return <td className="text-2xl">{formatCurrency(balance)}</td>;
}

export default BalanceDisplay;
