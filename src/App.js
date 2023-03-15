
import { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Home from './component/Home';
function App() {
  const [count, setCount] = useState(0)
  const {c} = useSelector(state=>state.custom)

  return (
    <>
    <h3>inside App component Counter: {c}</h3>
    <Home count={count} setCount={setCount}/>
    </>
  );
}

export default App;
