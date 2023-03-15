
import { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Home from './component/Home';
function App() {
 
  const {c} = useSelector(state=>state.custom)

  return (
    <>
    <h3>inside App component Counter: {c}</h3>
    <Home />
    </>
  );
}

export default App;
