import React from 'react'
import { Todo } from './Todo'

export const Todos = (props) => {
    return (
        <div className="container">
            <h2 className="text-center my-5 ">To do's List</h2>
            {props.todos.length === 0 ? <p className="container mb:6rem">"No Todos to display"</p> : 
                props.todos.map((todo) => {
                    return <Todo todo1={todo} key={todo.sno} onDelete={() => { props.onDelete(todo) }} />
                })
            }
            
        </div>
    )
}

