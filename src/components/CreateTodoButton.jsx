import React from 'react'
import './CreateTodoButton.css'

export function CreateTodoButton(props){
    let onclick = ()=>{alert('aqui se abre el modal')};
    return(
        
        <button onClick={onclick} className='CreateTodoButton'>+</button>
    );
}
