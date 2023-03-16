import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Count from './Count';
import { increment, decrement } from './counterSlice'

function Counter() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

  return (
    <div>
       <Count />
        <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button> <br></br>
      <button onClick={() => dispatch(decrement())}>-</button> <br></br>
    </div>
  )
}

export default Counter
