import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import store from './store';

function App() {
  console.log(store);
  const counter = useSelector((state)=>state.counter);
  const dispatch = useDispatch();
  const increment = ()=>{
    dispatch({type:"INC"});
  }
  const decrement = ()=>{
    dispatch({type:"DEC"});
  }
  console.log(counter)
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
