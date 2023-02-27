import './App.css';
import React, { useReducer } from 'react'

import DataFetching from './components/DataFetching';
import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';
import HookCounter3 from './components/HookCounter3';
import HookCounter4 from './components/HookCounter4';
import IntervalHookCounter from './components/IntervalHookCounter';
// import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import Counter3 from './components/Counter3';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import ComponentD from './components/ComponentD';
import DataFetching1 from './components/DataFetching1';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
export const CountContext = React.createContext()

const intialState = 0

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return intialState
    default:
      return state
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, intialState)

  return (
    <div className="App">
      <HookCounter />
      <hr />
      <HookCounter2 />
      <hr />
      <HookCounter3 />
      <hr />
      <HookCounter4 />
      <hr />
      <MouseContainer />
      <hr />
      <IntervalHookCounter />
      <hr />
      <DataFetching />
      <hr />
      <UserContext.Provider value={'Donald'}>
        <ChannelContext.Provider value={'codyDon'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
      <hr />
      <Counter1 />
      <hr />
      <Counter2 />
      <hr />
      <Counter3 />
      <hr />
      <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        <div>
          <div>Count - {count}</div>
          <ComponentA />
          <ComponentD />
        </div>
      </CountContext.Provider>
      <hr />
      <DataFetching1 />
      <hr />
    </div>
  );
}

export default App;
