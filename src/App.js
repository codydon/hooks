import './App.css';
import DataFetching from './components/DataFetching';
import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';
import HookCounter3 from './components/HookCounter3';
import HookCounter4 from './components/HookCounter4';
import IntervalHookCounter from './components/IntervalHookCounter';
// import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';

function App() {
  return (
    <div className="App">
      <HookCounter />
      <hr/>
      <HookCounter2 />
      <hr/>
      <HookCounter3 />
      <hr/>
      <HookCounter4 />
      <hr/>
      <MouseContainer />  
      <hr/>
      <IntervalHookCounter />
      <hr/>
      <DataFetching />
      <hr/>

      <hr/>
      
      <hr/>
      </div>
  );
}

export default App;
