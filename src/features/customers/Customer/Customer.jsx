import { useSelector } from "react-redux";

function Customer() {
  const { name, nationalId } = useSelector((store) => store.customer);
  const { balance } = useSelector((store) => store.account);

  return (
    <>
      <h2>Customer Details</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>National ID</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{nationalId}</td>
            <td>${balance}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Customer;
