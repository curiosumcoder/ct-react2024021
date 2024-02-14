import React, { useState } from 'react'
import Compra from './Compra';

function TipoCambio() {
    const [colones, setColones] = useState(515);
  return (
    <div>
        <h4>Tipo Cambio</h4>
        <p>Compra: {colones}</p>
        <input type='number' value={colones} 
        onChange={(ev) => setColones(ev.target.valueAsNumber)}/>

        <Compra cambioCompra={colones}/>
    </div>
  )
}

export default TipoCambio