import React, { useContext } from 'react'
import '../styles/CreateTodoButton.css'
import { TodoContext } from './TodoContext';

export function CreateTodoButton(props){
    const {openModal,setOpenModal}=useContext(TodoContext)
  
    let onclick = ()=>{!!openModal ? setOpenModal(false):setOpenModal(true)};
    
    return(
        
        <button onClick={onclick} className='CreateTodoButton'>+</button>
    );
}
