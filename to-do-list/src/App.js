
import Header from './MyComponent/Header';
import { Footer } from './MyComponent/Footer';
import { Todos } from './MyComponent/Todos';
import React, { useState } from 'react';
import { Addtodo } from './MyComponent/Addtodo';
import { useEffect } from 'react';


function App() {

  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => 
    {return e!==todo}
    ));
  }

 

  const addTodo = (title,desc) => {
    let sno;
    if(todos.length===0){
      sno = 1;
    }
    else{
      sno = todos[todos.length-1].sno + 1; 
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
  }

  // const [todos, setTodos] = useState("");
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])

  return (
    <>
   <Header title="My Todos List" searchBar={false}/>
   <Addtodo addTodo={addTodo}/>
   <Todos todos={todos} onDelete={onDelete}/>
   <Footer/>
   </>
  );
}

export default App;
