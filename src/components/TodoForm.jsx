import React, { useContext, useState } from "react"
import { TodoContext } from "./TodoContext"
import '../styles/Todoform.css'
 export function TodoForm(){
    const[textArea, setTextArea]= useState('')
       
    const {addItem,setOpenModal} = useContext(TodoContext)
    
    const onAdd= function(e){
        e.preventDefault()
        addItem(textArea)
        
        setOpenModal(true)
    }
    const onCancel= function(){
        
        setOpenModal(true)
    }

    return(
        <form onSubmit={onAdd}>
            <label>Escribe tu nueva tarea</label>
            <textarea value={textArea} onChange={(e)=> setTextArea(e.target.value)} placeholder="escribe aquí"></textarea>
            <div >
                <button onClick={onCancel} type='button' className="TodoForm-button TodoForm-button--cancel"> cancelar </button>
                <button type="submit"  className="TodoForm-button TodoForm-button--add">agregar</button>
            </div>
        </form>
    )
}