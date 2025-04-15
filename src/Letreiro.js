import React, { useEffect, useState } from 'react';
import './Letreiro.css';

function Letreiro() {
  const textoCompleto = "Venha estudar na Fatec!";
  const [texto, setTexto] = useState('');
  const [indice, setIndice] = useState(0);
  const [apagando, setApagando] = useState(false);

  useEffect(() => {
    const intervalo = setTimeout(() => {
      if (!apagando) {
        // Digitando
        if (indice <= textoCompleto.length) {
          setTexto(textoCompleto.slice(0, indice));
          setIndice(indice + 1);
        } else {
          // Espera um pouco antes de começar a apagar
          setTimeout(() => setApagando(true), 1000);
        }
      } else {
        // Apagando
        if (indice >= 0) {
          setTexto(textoCompleto.slice(0, indice));
          setIndice(indice - 1);
        } else {
          // Volta a digitar
          setApagando(false);
          setIndice(0);
        }
      }
    }, 150); 

    return () => clearTimeout(intervalo);
  }, [indice, apagando, textoCompleto]);

  return (
    <div id="texto">
        <h1>Letreiro</h1>
        <h2>{texto}</h2>
    </div>
  );
}

export default Letreiro;
