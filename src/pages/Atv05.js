import {Link} from "react-router-dom";
import {BtnVoltar,BtnProximo} from "../components/ButtonNav";
import Accordion from "../components/atv05/Accordion";
import ContactList from "../components/atv05/ContactList";
import FormQuiz from "../components/atv05/FormQuiz";
import FormTicket from "../components/atv05/FormTicket";

export default function Atv05() {
  return (
    <>
        <h1>Atividade 5</h1>
        <Accordion />
        <ContactList />
        <FormQuiz />
        <FormTicket />
        
        <Link to="/"><BtnVoltar /></Link>
        <Link to="/"><BtnProximo /></Link>
    </>
  );
}