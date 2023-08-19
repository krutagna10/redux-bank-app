import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "../customerSlice/customerSlice.js";

function Customer() {
  const [name, setName] = useState("");
  const [nationalId, setNationalId] = useState("");

  const dispatch = useDispatch();

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleNationalIdChange(event) {
    setNationalId(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (name.trim().length === 0) {
      return;
    }

    const obj = {
      name: name,
      nationalId: nationalId,
    };
    dispatch(createCustomer(obj));
  }

  return (
    <div>
      <h2>Create new customer</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={handleNameChange}
          placeholder="Enter Your Name"
        />
        <input
          value={nationalId}
          onChange={handleNationalIdChange}
          placeholder="Enter your national ID"
        />
        <button className="btn btn--green">Create new customer</button>
      </form>
    </div>
  );
}

export default Customer;
