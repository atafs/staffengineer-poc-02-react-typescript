// src/store/slices/counterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    setCounter: (state, action: PayloadAction<number>) => {
      state.value = action.payload; // New action to set the counter value
    },
  },
});

export const { increment, decrement, incrementByAmount, setCounter } =
  counterSlice.actions;
export default counterSlice.reducer;
