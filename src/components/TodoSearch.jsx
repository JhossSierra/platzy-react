import React, { useContext } from 'react'
import { TodoContext } from './TodoContext';



export function TodoSearch(){
const {setInput,
    input,} = useContext(TodoContext)    

    return(<input value={input} onChange={(e)=>{setInput(e.target.value)}}
    className='TodoSearch' placeholder="Busca tu tarea"/>
    );
}