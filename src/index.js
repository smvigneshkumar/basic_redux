const redux = require("redux");

const counterReducer = (prevState = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return { counter: prevState.counter + 1 };
  }
  if (action.type === "decrement") {
    return { counter: prevState.counter - 1 };
  }
  return prevState;
};
const store = redux.createStore(counterReducer);

const counterComponent = () => {
  const latestState = store.getState();
  console.log(latestState.counter);
};

store.subscribe(counterComponent);

// Initially prints the current state
console.log(store.getState());
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
