import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import {
  increaseCounter,
  increaseByTenCounter,
  decreaseCounter,
  decreaseByTenCounter,
  resetCounter,
} from "./redux/Counter/counter.action";

function App(props) {
  return (
    <div className="App">
      <div>Count: {props.count}</div>
      <button onClick={() => props.increaseByTenCounter()}>
        Add Ten Count
      </button>
      <button onClick={() => props.increaseCounter()}>Increase Count</button>
      <button onClick={() => props.resetCounter()}>Reset Count</button>
      <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
      <button onClick={() => props.decreaseByTenCounter()}>
        Remove Ten Count
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("state:", state);
  return {
    count: state.counter.count,
  };
};

const mapDispatchToPros = (dispatch) => {
  return {
    increaseByTenCounter: () => dispatch(increaseByTenCounter()),
    increaseCounter: () => dispatch(increaseCounter()),
    resetCounter: () => dispatch(resetCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
    decreaseByTenCounter: () => dispatch(decreaseByTenCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToPros)(App);
