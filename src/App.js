import React from 'react'
import {TodoCounter} from './components/TodoCounter';
import {TodoSearch} from './components/TodoSearch';
import {TodoList} from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import {CreateTodoButton} from './components/CreateTodoButton';
import { TodoContext } from './components/TodoContext';
/* const defaultItems = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cur so de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALAA', completed: false },
];
 */



function App() {

 

  return (
    <>
    <TodoCounter/>
    <TodoSearch />
    <TodoContext.Consumer>
      {
        ({loading,
          error,
          deleteItem,
          completeItem, 
          searchedItems})=>(<TodoList>
  
     
          {error && <p>Desespérate, hubo un error...</p>}
          
         {loading && <p>Estamos cargando, no desesperes...</p>}
          
          {(!loading && !searchedItems.length) && <p>¡Crea tu primer TODO!</p>}
   
   
   
   
          {searchedItems.map(item=>(<TodoItem key={item.text} text={item.text} completed={item.completed}
          onComplete={()=>completeItem(item.text)}
          onDelete={()=>deleteItem(item.text)}
          />))}
       </TodoList> 

        )
      }
    </TodoContext.Consumer>
    

    <CreateTodoButton/>   

    </>
  );
}

export default App;
