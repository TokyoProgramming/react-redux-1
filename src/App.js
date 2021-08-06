import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/index';

function App() {
  const counter = useSelector((state) => state.counterReducer);
  const loggedIn = useSelector((state) => state.loggedReducer);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter</h1>
      <h3>{counter} </h3>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {loggedIn ? <p>you're logged In</p> : <p>you're not logged In</p>}
    </div>
  );
}

export default App;
