'use client'
import React, { useState } from 'react'

function Counter() {
    const [numero, setNumero] = useState(0)
  return (
    <>
      <h3>Counter</h3>
      <p>Número: {numero}</p>
      <button onClick={() => setNumero(numero+1)}>Incrementar</button>
    </>
  )
}

export default Counter