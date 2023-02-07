import React from 'react'

export function TodoItem(props) {
  let onComplete=()=>{alert(`se ha completado: ${props.text}`)};
  let onDelete=()=>{alert(`se ha borrado: ${props.text}`)};
  return (
    <li className="TodoItem">
      <span onClick={onComplete} className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
        √</span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span onClick={onDelete} className="Icon Icon-delete">
        X
      </span>
    </li>
  );
}
