import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useQuery, useMutation } from "@apollo/client";
import { RootState } from "./store";
import {
  increment,
  decrement,
  incrementByAmount,
  setCounter,
} from "./store/slices/counterSlice";
import { GET_COUNTER } from "./graphql/queries";
import { SET_COUNTER } from "./graphql/mutations";
import "./App.css";

const App: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const { data, loading, error } = useQuery(GET_COUNTER);

  // Mutation hook for saving the counter
  const [
    setCounterMutation,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(SET_COUNTER);

  useEffect(() => {
    console.log("GraphQL Data:", data); // Log the response
    if (data?.getCounter != null && typeof data.getCounter === "number") {
      console.log("Dispatching setCounter with:", data.getCounter);
      dispatch(setCounter(data.getCounter));
    } else {
      console.log("Skipping dispatch: getCounter is invalid", data?.getCounter);
    }
  }, [data, dispatch]);

  // Handle Save button click
  const handleSave = async () => {
    try {
      await setCounterMutation({ variables: { value: count } });
      alert("Counter saved successfully!");
    } catch (err) {
      console.error("Mutation Error:", err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("GraphQL Error:", error);
    return (
      <div>
        <p>Error: {error.message}</p>
        <p>
          Network Status: {error.networkError ? "Network Issue" : "Query Issue"}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Hello, TypeScript & Redux!</h1>
      <div className="bg-white p-6 rounded shadow-md">
        <p className="text-xl mb-4">Counter: {count}</p>
        <div className="flex space-x-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={() => dispatch(incrementByAmount(5))}
          >
            Add 5
          </button>
          <button
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
            onClick={handleSave}
            disabled={mutationLoading}
          >
            {mutationLoading ? "Saving..." : "Save"}
          </button>
        </div>
        {mutationError && (
          <p className="text-red-500 mt-4">Error: {mutationError.message}</p>
        )}
      </div>
    </div>
  );
};

export default App;
