import React from "react";
import {Link} from "react-router-dom";

const Home = () =>{
    return(
        <div>
            <h1>Página Inicial</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/Atv01">Atividade 01 - Relógio e Letreiro</Link>
                    </li>
                    <li>
                        <Link to="/Atv02">Atividade 02 - Contador</Link>
                    </li>
                    <li>
                        <Link to="/Atv03">Atividade 03 - Componentes</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Home;