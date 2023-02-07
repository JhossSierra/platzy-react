import React from 'react'

export function TodoSearch({input, setInput}){
    

    return(<input value={input} onChange={(e)=>{setInput(e.target.value)}}
    className='TodoSearch' placeholder="Busca tu tarea"/>
    );
}