import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementbyAmount } from './redux/features/counterSlice';
import { useState } from 'react';

function App() {
  const [num,setNum]=useState(5)
  const dispatch=useDispatch();
  const count= useSelector((state)=>state.counter.value);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <input 
      type="number"
      value={num}
      onChange={(e)=>setNum(e.target.value)}  />
      <button onClick={()=>dispatch(incrementbyAmount(Number(num)))}>Increment by Amount</button>
    </>
  )
}

export default App
