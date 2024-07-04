import {useState,useEffect} from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { TodoLabel,TodoForm,TodoInput,Background,SelectPriority,OptionPriority, UpdateTodo, Heading } from './styledComponents'

//to Edit Task using hooks 
const UpdateTask = ()=>{
    const location = useLocation()
    const navigate = useNavigate()
    const [id,setId] = useState('')
    const [todoName,updateTodoname] = useState('')
    const [task1,updateTask1] = useState('')
    const [task2,updateTask2] = useState('')
    const [task3,updateTask3] = useState('')
    const [priority,updatePriority] = useState('LOW')
    const [accomplished,updateAccomplished] = useState("No")
    
    //to update after the changes made by the user
    const onSubmit = async(event)=>{
        event.preventDefault()
        const todoData = {
            id,
            todoName,
            task1,
            task2,
            task3,
            priority,
            accomplished
        }
        await axios.put(`https://todoblog-9.onrender.com/updateTodo/${id}`,todoData)
        navigate('/')

    }
    
    //edit options
    const onTodoName = event=>{
        updateTodoname(event.target.value.toUpperCase())
    }
    const onTask1 = event=>{
        updateTask1(event.target.value)
    }
    const onTask2 = event=>{
        updateTask2(event.target.value)
    }
    const onTask3 = event=>{
        updateTask3(event.target.value)
    }
    const onPriority = event=>{
        updatePriority(event.target.value.toUpperCase())
    }
    const onAccomplished = event=>{
        updateAccomplished(event.target.value)
    }
    
    //the fillData will be displayed so that the user can easily add and remove the words
    useEffect(()=>{
        setId(location.state.id)
        updateTodoname(location.state.todoName)
        updateTask1(location.state.task1)
        updateTask2(location.state.task2)
        updateTask3(location.state.task3)
        updatePriority(location.state.priority)
        updateAccomplished(location.state.accomplished)
    },[location.state.id,location.state.todoName,location.state.task1,location.state.task2,
        location.state.task3,location.state.priority,location.state.accomplished
    ])

    return(
        <Background>
            <TodoForm onSubmit={onSubmit}>
            <Heading>Update Todo</Heading>
                <TodoLabel htmlFor="TodoName">Enter Your Todo</TodoLabel>
                <TodoInput id="TodoName" onChange={onTodoName} value={todoName}/>
                <TodoLabel htmlFor="Task1">Enter Your Task 1</TodoLabel>
                <TodoInput id="Task1" onChange={onTask1} value={task1}/>
                <TodoLabel htmlFor="Task2">Enter Your Task 2</TodoLabel>
                <TodoInput id="Task2" onChange={onTask2} value={task2}/>
                <TodoLabel htmlFor="Task3">Enter Your Task 3</TodoLabel>
                <TodoInput id="Task3" onChange={onTask3} value={task3}/>
                <TodoLabel htmlFor="Priority">Enter Your Priority</TodoLabel>
                <SelectPriority onChange={onPriority} value={priority} id="Priority">
                        <OptionPriority value="LOW">LOW</OptionPriority>
                        <OptionPriority value="MEDIUM">MEDIUM</OptionPriority>
                        <OptionPriority value="HIGH">HIGH</OptionPriority>
                </SelectPriority>
                <TodoLabel htmlFor="Accomplished">Accomplished</TodoLabel>
                <SelectPriority onChange={onAccomplished} value={accomplished} id="Accomplished">
                        <OptionPriority value="No">No</OptionPriority>
                        <OptionPriority value="Yes">Yes</OptionPriority>
                </SelectPriority>
                <UpdateTodo type="submit">
                    Update Todo
                </UpdateTodo>
            </TodoForm>
        </Background>
    )
}

export default UpdateTask