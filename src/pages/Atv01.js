import Relogio from "../components/Relogio";
import Letreiro from "../components/Letreiro";
import {Link} from "react-router-dom";

export default function Atv01() {
  return (
    <>
        <h1>Atividade 01</h1>
        <Relogio />
        <Letreiro />
        <Link to ="/"> Voltar </Link>
    </>
  );
}
