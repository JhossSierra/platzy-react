import React from 'react';
import './TodoCounter.css';

export function TodoCounter(props){
    return(
        <h2 className='TodoCounter'> has completado {props.completedItems} de {props.totalItems} tareas</h2>

    )
}