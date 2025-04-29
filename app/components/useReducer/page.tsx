'use client'

import { useReducer } from 'react'

type State = {
  count: number;
}

type Action = {
  type: 'increment' | 'decrement';
}

const initialState: State = { count: 0 };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default function useReducerPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p>useReducer</p>
      <p>{state.count}</p>
      <button type="button" onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button type="button" onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
