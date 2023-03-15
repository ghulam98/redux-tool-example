import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Home() {
    const dispatch = useDispatch()
    const {c} = useSelector(state=>state.custom)
    const addBtn = ()=>{
        dispatch({
            type:"increment",
            payload:1
        })
        
    }
    const addBtn25 = ()=>{
        dispatch({
            type:"increment",
            payload:25
        })
    }
    const subBtn = ()=>{
        dispatch({
            type:"decrement"
        })
    }
  return (
    <div>
        <h1>inside Home component Counter: {c}</h1>
        <button onClick={addBtn}>Add</button>
        <button onClick={addBtn25}>AddBy25</button>
        <button onClick={subBtn}>sub</button>
    </div>
  )
}

export default Home
