import React from 'react'
import {TodoCounter} from './components/TodoCounter';
import {TodoSearch} from './components/TodoSearch';
import {TodoList} from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import {CreateTodoButton} from './components/CreateTodoButton';

const items = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALAA', completed: false },
];


function App() {
 return (
    <>
    <TodoCounter/>
    <TodoSearch/>

    <TodoList>
       {items.map(item=>(<TodoItem key={item.text} text={item.text} completed={item.completed}/>))}
    </TodoList> 

    <CreateTodoButton/>   

    </>
  );
}

export default App;
