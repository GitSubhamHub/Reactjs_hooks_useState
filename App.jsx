import React, { useState, useEffect } from 'react'

export default function App() {
  let [no, setNo] = useState(10)
  let [count, setCount] = useState(100)
  let inc=()=>{
    setNo(no+1)
  }
  let dec=()=>{
    setCount(count-1)
  }
  useEffect(()=>{
    console.log("useEffect called");
  },[count])
  
  return (
    <main>
      React ⚛️ + Vite ⚡ + Replit
      <h2>App Component</h2>
      <h3>number={no}</h3>
      <button onClick={inc}>Increment</button>
      <h3>Count value={count}</h3>
      <button onClick={dec}>Decrement</button>
    </main>
  )
}
