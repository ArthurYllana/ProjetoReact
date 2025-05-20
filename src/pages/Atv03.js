import TableOfContents from "../components/TableOfContents";
import Avatar from "../components/Avatar";
import Gallery from "../components/Profile";
import Card from "../components/Card";
import TodoList from "../components/TodoList";
import PackingList from "../components/PackingList";
import List from "../components/List";
import SpicedChaiRecipe from "../components/Recipe";
import TeaSet from "../components/TeaSet";

import {Link} from "react-router-dom";
import './styleGeral.css';

export default function Atv03() {
  return (
    <>
        <h1>Atividade 3</h1>
          <TableOfContents />
          <Card>
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
          </Card>
          <Gallery />
          <TodoList />
          <PackingList />
          <TeaSet />
          <List />
          <SpicedChaiRecipe drinkers={4} />
    </>
  );
}