import Contador from "../components/atv02/Contador";
import {Link} from "react-router-dom";

export default function Atv02() {
  return (
    <>
        <h1>Atividade 2</h1>
        <Contador />
        <br></br>
        <Link to="/" />
    </>
  );
}