import { Link } from "react-router-dom";
import Accordion from "../components/atv05/Accordion";
import ContactList from "../components/atv05/ContactList";
import FormQuiz from "../components/atv05/FormQuiz";
import FormTicket from "../components/atv05/FormTicket";

export default function Atv05() {
  return (
    <div className="atividade-container">
      <h1>Atividade 5</h1>
      <div className="components-grid">
        <Accordion />
        <ContactList />
        <FormQuiz />
        <FormTicket />
      </div>
      <Link to="/" className="back-link">
        Voltar à página inicial
      </Link>
    </div>
  );
}