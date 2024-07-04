import { BrowserRouter,Routes,Route } from 'react-router-dom';
import TaskInput from './components/TaskInput/TaskInput'
import AddTask from './components/AddTask/AddTask'
import UpdateTask from './components/UpdateTask/UpdateTask'
import './App.css';


 //The Below code is to Route for TodoList,AddTodo and UpdateTodo


const App = ()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<TaskInput/>}/>
      <Route path="/addTodo" element={<AddTask/>}/>
      <Route path="/updateTodo" element={<UpdateTask/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
