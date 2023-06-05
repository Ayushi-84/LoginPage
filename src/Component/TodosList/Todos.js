import React from 'react'
import {TodoItem} from "./TodoItem"
import "./About.css"
import Header from "./Header"
import {Footer} from "./Footer"

export const Todos = (props) => {
  let myStyle={
     minHeight:"70vh"
  }
  return (

    <div>
   <Header title="My Todos List" searchBar={false} /> 

    <div className='container my-3' style={myStyle}>
      <h3 className='heade'>Todos List</h3>
      {props.todos.length===0? "No Todos to display":
       props.todos.map((todo)=>{
        return ( 
         <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        )
      })
      }
       
           
      </div>
      <Footer />
      </div>
  )
}
