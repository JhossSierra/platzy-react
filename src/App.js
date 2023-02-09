import React, { useState } from 'react'
import {TodoCounter} from './components/TodoCounter';
import {TodoSearch} from './components/TodoSearch';
import {TodoList} from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import {CreateTodoButton} from './components/CreateTodoButton';

/* const defaultItems = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cur so de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALAA', completed: false },
];
 */

function useLocalStorage(objName, initialState) {

  const localStorageObj= localStorage.getItem(objName)

  let parseObj;

  if (!localStorageObj) {localStorage.setItem(objName, JSON.stringify(initialState))
parseObj=initialState}
  else {parseObj = JSON.parse(localStorageObj)}

  const [obj,setObj]= useState(parseObj)

  const saveItems = (newItems)=>{
    const stringifiedItems=JSON.stringify(newItems)
    localStorage.setItem(objName,stringifiedItems)
    setObj(newItems);
  }

 return [obj,saveItems];
}



function App() {

  const [items,saveItems]= useLocalStorage('TODOS_V1', []);

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
  
 
  const completeItem =(text)=>{
    const itemIndex= items.findIndex(item=> item.text===text)
    items[itemIndex].completed=true;
    const newItems= [...items]
    saveItems(newItems) 
  } 
  const deleteItem =(text)=>{
    const itemIndex= items.findIndex(item=> item.text===text);
    const newItems= [...items];
    newItems.splice(itemIndex,1);
    saveItems(newItems); 
  } 

  return (
    <>
    <TodoCounter totalItems={totalItems} completedItems={completedItems} />
    <TodoSearch input= {input} setInput={setInput} />

    <TodoList>
       {searchedItems.map(item=>(<TodoItem key={item.text} text={item.text} completed={item.completed}
       onComplete={()=>completeItem(item.text)}
       onDelete={()=>deleteItem(item.text)}
       />))}
    </TodoList> 

    <CreateTodoButton/>   

    </>
  );
}

export default App;
