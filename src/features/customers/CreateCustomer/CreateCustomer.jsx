import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "../customerSlice/customerSlice.js";

function Customer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  const dispatch = useDispatch();

  function handleFullNameChange(event) {
    setFullName(event.target.value);
  }

  function handleNationalIdChange(event) {
    setNationalId(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (fullName.trim().length === 0) {
      return;
    }

    dispatch(createCustomer(fullName, nationalId));
  }

  return (
    <div>
      <h2>Create new customer</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          value={fullName}
          onChange={handleFullNameChange}
          placeholder="Enter your Full Name"
        />
        <input
          value={nationalId}
          onChange={handleNationalIdChange}
          placeholder="Enter your national ID"
        />
        <button>Create new customer</button>
      </form>
    </div>
  );
}

export default Customer;
