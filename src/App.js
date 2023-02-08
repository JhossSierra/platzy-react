import React, { useState } from 'react'
import {TodoCounter} from './components/TodoCounter';
import {TodoSearch} from './components/TodoSearch';
import {TodoList} from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import {CreateTodoButton} from './components/CreateTodoButton';

const defaultItems = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cur so de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALAA', completed: false },
];


function App() {
  const localStorageItems = localStorage.getItem('ITEMS_V1')
  let parsedItems;
  
  if(!localStorageItems){
    localStorageItems.setItem('ITEMS_V1', JSON.stringify([]));
    parsedItems=[]
  }
  else{parsedItems=JSON.parse(localStorageItems)}
 

  const [items,setItems]= useState(parsedItems)
  const [input,setInput]= useState('')

  const completedItems= items.filter((item)=>!!item.completed).length;
  const totalItems= items.length;
  
  let searchedItems=[];
  if (!input>=1) {
    searchedItems= items
  } 
  else{
    searchedItems=items.filter(item=>{
    const itemText=item.text.toLowerCase()
    const searchText=input.toLowerCase()
    return itemText.includes(searchText)
    })
  }
  
  const saveItems = (newItems)=>{
    const stringifyerItems=JSON.stringify(newItems)
    localStorage.setItem('ITEMS_V1', stringifyerItems)
    setItems(newItems)
  }

  const checkItem = (text)=> {
    const itemIndex= items.findIndex(item => item.text === text);
    const newItem = [...items];
    newItem[itemIndex].completed=true;
    saveItems(newItem)
  }

   
  const deleteItem = (text)=> {
    const itemIndex= items.findIndex(item => item.text === text);
    const newItem = [...items];
    newItem.splice(itemIndex,1);
    saveItems(newItem)
  }
  
  

  return (
    <>
    <TodoCounter totalItems={totalItems} completedItems={completedItems} />
    <TodoSearch input= {input} setInput={setInput} />

    <TodoList>
       {searchedItems.map(item=>(<TodoItem key={item.text} text={item.text} completed={item.completed}
       onComplete={()=> checkItem(item.text)}
       onDelete={()=> deleteItem(item.text)}
       />))}
    </TodoList> 

    <CreateTodoButton/>   

    </>
  );
}

export default App;
