import {Link} from "react-router-dom";
import TableOfContents from "./TableOfContents";
import Profile from "./Profile";

export default function Atv03() {
  return (
    <>
        <h1>Atividade 03</h1>
        <TableOfContents />
        <Profile />
        <Link to ="/"> Voltar </Link>
    </>
  );
}

