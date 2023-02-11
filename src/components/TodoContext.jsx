import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import React from "react";

export const TodoContext= createContext()

export function TodoProvider(props){

    const {obj:items,saveObj:saveItems,loading, error}= useLocalStorage('TODOS_V1', []);

    const [input,setInput]= useState('')
    const [openModal, setOpenModal]=useState('false')
    
  
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
    
    const addItem =(text)=>{
        const newItems= [...items]
      newItems.push({completed:false, text})
      saveItems(newItems) 
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
    
    return(
    
    <TodoContext.Provider value={{
        loading,
        error,
        deleteItem,
        completeItem, 
        saveItems,
        completedItems,
        totalItems,
        setInput,
        input,
        searchedItems,
        openModal,
        setOpenModal,
        addItem,

    }}>
        {props.children}
    </TodoContext.Provider>

    )
}

