import React from 'react'

export function TodoList(props){
    return(
        <section className='TodoList'>
            <ul>
                {props.children}
            </ul>
        </section>
    )};