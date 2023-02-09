import React, { useEffect, useState } from 'react'
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
  const [error, setError] =useState(false)
  const [loading, setLoading] =useState(true)
  const [obj,setObj]= useState(initialState)

  useEffect(
    ()=>{setTimeout(()=>{
      try{
      const localStorageObj= localStorage.getItem(objName)

      let parseObj;
    
      if (!localStorageObj) {localStorage.setItem(objName, JSON.stringify(initialState))
    parseObj=initialState}
      else {parseObj = JSON.parse(localStorageObj)}

      setObj(parseObj)
      setLoading(false)
    
      } catch(error){setError(error)}
    },1000)}
  );

  

  

  const saveObj = (newObj)=>{
    try{
      const stringifiedItems=JSON.stringify(newObj)
      localStorage.setItem(objName,stringifiedItems)
      setObj(newObj);}
    catch(error){setError(error)}
  }

 return {obj,saveObj,loading,error};
}



function App() {

  const {obj:items,saveObj:saveItems,loading, error}= useLocalStorage('TODOS_V1', []);

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

  //useEffect(()=>{},[])

  return (
    <>

      

       

    <TodoCounter totalItems={totalItems} completedItems={completedItems} />
    <TodoSearch input= {input} setInput={setInput} />

    <TodoList>
     
     
       {error && <p>Desespérate, hubo un error...</p>}
       
      {loading && <p>Estamos cargando, no desesperes...</p>}
       
       {(!loading && !searchedItems.length) && <p>¡Crea tu primer TODO!</p>}




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
