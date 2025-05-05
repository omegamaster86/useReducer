'use client'

import { useReducer } from 'react'

type Action = {
  type: 'increment' | 'decrement';
}

const reducer = (state: number, action: Action): number => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};

export default function useReducerPage() {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p>useReducer</p>
      <p>{state}</p>
      <button type="button" onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button type="button" onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
