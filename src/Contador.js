import React, { useState } from 'react';

function ControleDeValores() {
    const [valorHomens, setValorHomens] = useState(0);
    const [valorMulheres, setValorMulheres] = useState(0);

    const adicionarValor = (tipo) => {
        if (tipo === 'homens') {
            setValorHomens(valorHomens + 1);
        } else if (tipo === 'mulheres') {
            setValorMulheres(valorMulheres + 1);
        }
    };

    const diminuirValor = (tipo) => {
        if (tipo === 'homens' && valorHomens > 0) {
            setValorHomens(valorHomens - 1);
        } else if (tipo === 'mulheres' && valorMulheres > 0) {
            setValorMulheres(valorMulheres - 1);
        }
    };

    const resetarValores = () => {
        setValorHomens(0);
        setValorMulheres(0);
    };

    const atualizarTotal = () => {
        return valorHomens + valorMulheres;
    };

    return (
        <div id="app">
            <h1>Controle de Valores</h1>
            <h2>Total: <span id="total">{atualizarTotal()}</span></h2>
            <p>Homens: <span id="valorHomens">{valorHomens}</span></p>
            <p>Mulheres: <span id="valorMulheres">{valorMulheres}</span></p>
            <button onClick={() => adicionarValor('homens')} id="btnHomens">Adicionar para Homens</button>
            <button onClick={() => adicionarValor('mulheres')} id="btnMulheres">Adicionar para Mulheres</button>
            <button onClick={() => diminuirValor('homens')} id="btnDiminuirHomens">Diminuir Homens</button>
            <button onClick={() => diminuirValor('mulheres')} id="btnDiminuirMulheres">Diminuir Mulheres</button>
            <button onClick={resetarValores} id="btnReset">Resetar</button>
        </div>
    );
}

export default ControleDeValores;
