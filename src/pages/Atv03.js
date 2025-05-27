import TableOfContents from "../components/atv03/TableOfContents";
import Avatar from "../components/atv03/Avatar";
import Profile from "../components/atv03/Profile";
import TodoList from "../components/atv03/TodoList";
import PackingList from "../components/atv03/PackingList";
import List from "../components/atv03/List";
import SpicedChaiRecipe from "../components/atv03/Recipe";
import TeaSet from "../components/atv03/TeaSet";
import {BtnVoltar,BtnProximo} from "../components/ButtonNav";

import {Link} from "react-router-dom";

export default function Atv03() {
  return (
    <>
        <h1>Atividade 3</h1>
        <section style={{
          margin: '20px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: '0.3fr 0.5fr 0.5fr',
          gap: '20px'
        }}>
          <TableOfContents />
              <div>
                <h1>Katherine Johnson</h1>
                <p>
                  Katherine Coleman Goble Johnson (August 26, 1918-February 24, 2020) was an American mathematician, physicist, and space scientist.
                </p>
              </div>
              <Avatar 
                  size={100}
                  person={{
                      name: 'Katherine Johnson',
                      imageId:'0S9jJQe'
                  }}
              />
          <Profile />
          <TodoList />
          <PackingList />
          <TeaSet />
          <List />
          <SpicedChaiRecipe drinkers={4} />
        </section>
        <br/>
        <Link to="/"><BtnVoltar /></Link>
        <Link to="/Atv04"><BtnProximo /></Link>

    </>
  );
}