import {Link} from 'react-router-dom'
import axios from 'axios';
import { CiEdit } from "react-icons/ci";
import { GrCompliance } from "react-icons/gr";
import { MdIncompleteCircle } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Task,Todo,TodoList,HeadContainer,Button, TaskNum, Priority } from "./styledComponents";

//Tasklist is been display displayed 
const TaskList = props =>{
    const {todo} = props
    const {id,todoName,task1,task2,task3,priority,accomplished} = todo
    const todoData = {
        id,
        todoName,
        task1,
        task2,
        task3,
        priority,
        accomplished
    }
    
    //each priority has its own color
    const onColor = (colors) =>{
        switch(colors){
            case "LOW":
                return '#e80c3b'
            case 'MEDIUM':
                return '#cccc29'
            case "HIGH":
                return "#0c9c1d"
            default:
                return '#3271a8'
        }
    }

    // to delete the task
    const onDelete = async() =>{
       await axios.delete(`https://todoblog-9.onrender.com/deleteTodo/${todoData.id}`)
       window.location.reload()
    }
    //to accomplish the set Task
    const onAccomplish = async()=>{
        if(accomplished === "Yes"){
        await axios.put(`https://todoblog-9.onrender.com/updateAccomplished/${todoData.id}`,{
            accomplished:"No"
        })
        window.location.reload()
      }
        else{
            await axios.put(`https://todoblog-9.onrender.com/updateAccomplished/${todoData.id}`,{
            accomplished:"Yes"
        })
        window.location.reload()
        }
    }

    return(
        <TodoList decoration={accomplished}>
        <Todo>{todoName}</Todo>
        <ul>
        <Task><TaskNum>Task 1:</TaskNum> {task1}</Task>
        <Task><TaskNum>Task 2:</TaskNum> {task2}</Task>
        <Task><TaskNum>Task 3:</TaskNum> {task3}</Task>
        </ul>
        <HeadContainer>
        <Priority color="#000000">Priority: </Priority>
        <Priority color={onColor(priority)}>{priority}</Priority>
        </HeadContainer>
        <HeadContainer>
        <Link to="/updateTodo" state={todoData} style={{textDecoration:"none"}}>
        <Button type="button" color="#0c9c1d">
            <CiEdit fill="#ffffff" style={{marginRight:10,paddingRight:10,borderRight:"1px solid #ffffff"}}/>
            Edit Todo
        </Button>
        </Link>
        <Button type="button" color="#e80c3b" onClick={onDelete}>
            <RiDeleteBin5Line fill="#ffffff" style={{marginRight:10,paddingRight:10,borderRight:"1px solid #ffffff"}}/>
            Delete Todo
        </Button>
        {accomplished === "No"?(
            <Button type="button" color="#4287f5" onClick={onAccomplish}>
            <GrCompliance fill="#ffffff" style={{marginRight:10,paddingRight:10,borderRight:"1px solid #ffffff"}}/>
            Accomplished
        </Button>
        ):(<Button type="button" color="#de632a" onClick={onAccomplish}>
        <MdIncompleteCircle fill="#ffffff" style={{marginRight:10,paddingRight:10,borderRight:"1px solid #ffffff"}}/>
        Unaccomplished
        </Button>)}
        </HeadContainer>
        </TodoList>
    )
}

export default TaskList