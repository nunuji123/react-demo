
/**
 * 使用useReducer 替代 useState 方案
 */
import React, { useState, useEffect, useReducer } from "react";
const initialState = {
  count: 0
}

function reducer (state, action) {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1
      }
    case 'decrement':
      return {
        count: state.count - 1
      }

    default:
      throw new Error()
  }
}
export default function CounterReducer () {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <div>
    <p>Count: {state.count}</p>
    <button onClick={() => dispatch({
      type: 'decrement'
    })}>-</button>
    <button onClick={() => dispatch({
      type: 'increment'
    })}>+</button>
  </div>
}















