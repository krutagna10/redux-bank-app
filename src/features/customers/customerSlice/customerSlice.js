import { createSlice } from "@reduxjs/toolkit";

const initialStateCustomer = {
  name: "",
  nationalId: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState: initialStateCustomer,
  reducers: {
    createCustomer(state, action) {
      state.name = action.payload.name;
      state.nationalId = action.payload.nationalId;
    },
    updateName(state, action) {
      state.name = action.payload;
    },
  },
});

export const { createCustomer, updateName } = customerSlice.actions;

export default customerSlice.reducer;
