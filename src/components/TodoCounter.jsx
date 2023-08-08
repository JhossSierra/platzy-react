import React, { useContext } from 'react';
import '../styles/TodoCounter.css';
import { TodoContext } from './TodoContext';



export function TodoCounter(){
    const{totalItems, completedItems}=useContext(TodoContext)
    
    return(
        <h2 className='TodoCounter'> has completado {completedItems} de {totalItems} tareas</h2>

    )
}
