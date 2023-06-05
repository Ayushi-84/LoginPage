import LoginPage from "./LoginPage";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import SignUp from "./SignUp";
import DisplayAllStates from "./DisplayAllStates";
import {About} from "./Component/TodosList/About"
import {AddTodo} from "./Component/TodosList/AddTodo"
import {Todos} from "./Component/TodosList/Todos"
import {useState,useEffect} from "react";


function App() {

  let initTodo;
  if(localStorage.getItem("todos")===null)
  {
    initTodo=[];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete=(todo)=>{
    console.log("I am onDelete of todo",todo);

    setTodos(todos.filter((e)=>{
      return e!==todo
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo = (title,desc)=>{
       let sno;
       if(todos.length===0){
        sno=0;
       }
       else{
        sno= todos[todos.length-1].sno+1;
       }
        
       const myTodo={
        sno:sno,
        title:title,
        desc:desc
       }
       setTodos([...todos,myTodo])    
      
  }

    const [todos,setTodos]=useState(initTodo);
    useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos));
     },[todos])
    

  return (
    <Router>
       
      <Routes>
      <Route element={<LoginPage/>} path="/" />

        <Route element={<SignUp/>} path="/signup" />

        <Route element={<DisplayAllStates/>} path="/displayallstates" />

        <Route path="/todosList" element={<Todos todos={todos} onDelete={onDelete}/>}/>

    <Route path="/home" element={<> <AddTodo addTodo={addTodo} /> <Todos todos={todos} onDelete={onDelete}/></>}/>

    <Route path="/about" element={<About/>}/>
      </Routes>

    </Router>
    
  );
}

export default App;
