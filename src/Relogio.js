import React, { useState, useEffect } from 'react';
import './Relogio.css';

function Relogio() {
    <h1>Relógio</h1>

  const [horaAtual, setHoraAtual] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHoraAtual(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const hora = horaAtual.getHours().toString().padStart(2, '0');
  const minutos = horaAtual.getMinutes().toString().padStart(2, '0');
  const segundos = horaAtual.getSeconds().toString().padStart(2, '0');

  return (
    <div>
        <h1>Relógio</h1>
        <h2 id="relogio">{`${hora}:${minutos}:${segundos}`}</h2>
    </div>
  );
}

export default Relogio;
