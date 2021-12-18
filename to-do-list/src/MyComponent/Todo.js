import React from 'react'

export const Todo = (props) => {
    return (
        <div>
            <h3>{props.todo1.title}</h3>            
            <p>{props.todo1.Desc}</p>
            <button className = "btn btn-sm btn-danger" onClick={props.onDelete}>Delete</button>
        </div>
    )
}
