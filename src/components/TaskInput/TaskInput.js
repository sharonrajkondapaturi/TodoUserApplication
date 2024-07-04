import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {FidgetSpinner} from 'react-loader-spinner'
import { IoAddSharp } from "react-icons/io5";
import TaskList from "../TaskList/TaskList"
import { BackgroundContainer,Heading,TopContainer,TodoInput,AddButton,MainContainer,Tab,Tabs, LoadContainer,FailureImage} from './styledComponents';

// apiStatus is for loading,suucessfull page and Failure Page

const apiStatus = {
    initial:"INITIAL",
    loading:"LOADING",
    success:"SUCCESS",
    failure:"FAILURE"
}
const TaskInput = ()=>{
    /*the below useState is used for setting up the Api to render the accurate todo so That the user 
    can feel free to search his TodoList using hooks */

    const [currentApiStatus,setApiStatus] = useState(apiStatus.initial)
    const [priority,setPriority] = useState('')
    const [task,setTask] = useState('')
    const [todoList,setTodoList] = useState([])
    const navigate = useNavigate('/')
    
    //fetching the data
    const onRender = async(priority,task)=>{
        setApiStatus(apiStatus.loading)
        const response = await axios.get(`https://todoblog-9.onrender.com/todo/?priority=${priority}&search=${task}`)
        if(response.status === 200){
            const todoData = response.data
            setApiStatus(apiStatus.success)
            setTodoList(todoData)
        }
        else{
            setApiStatus(apiStatus.failure)
        }
    }
    
    //search Bar
    const onTodo = event=>{
        setTask(event.target.value.toUpperCase())
    }
    
    //the loading is displayed until the data has been fetched
    const onRenderLoading = ()=>(
        <LoadContainer>
            <FidgetSpinner visible={true} height="80" width="80" ariaLabel="fidget-spinner-loading" wrapperStyle={{}} wrapperClass="fidget-spinner-wrapper"/>
        </LoadContainer>
        
    )

    //the todo objects will be render successfull and todolist will be fetched from the Created Api
    const onRenderSuccess = ()=>(
        <MainContainer>
            {todoList.map(eachTodo=>
                <TaskList key={eachTodo.id} todo={eachTodo}/>
            )}
        </MainContainer>
    )
   
    //when api fails the fail image will be displayed
  const onRenderFailure = ()=>(
    <div>
        <FailureImage src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*7KCpGW9_D2rIlNV2JhFspQ.png" alt="failure"/>
    </div>
  )


    
    //the status of the Api which states the current situation

    const onRenderStatus = ()=>{
        switch(currentApiStatus){
            case apiStatus.loading:
                return onRenderLoading()
            case apiStatus.success:
                return onRenderSuccess()
            default:
                return onRenderFailure()

        }
    }
     
    //setting up the priority
    const onPriority = event=>{
        setPriority(event.target.value)
    }
    
    //To add a newTodo 
    const onAddTodo = ()=>{
        navigate('/addTodo')
    }
    
    //each priority for their own colors
    const onColor = (colors) =>{
        switch(colors){
            case "LOW":
                return '#e80c3b'
            case 'MEDIUM':
                return '#fffc69'
            case "HIGH":
                return "#0c9c1d"
            default:
                return '#3271a8'
        }
    }
   
    // to render from the initial without calling
    useEffect(()=>{
        onRender(priority,task)
    },[priority,task])

    return(
        <BackgroundContainer>
            <Heading>Todo List</Heading>
            <TopContainer>
                <TodoInput placeholder="Enter Todo" onChange={onTodo} value={task}/>
                <AddButton onClick={onAddTodo}>
                    <IoAddSharp style={{fontSize:20,borderRight:"1px solid #ffffff",marginRight:10,paddingRight:10}}/>
                    AddTodo
                </AddButton>
            </TopContainer>
            <Tabs>
                <Tab onClick={onPriority} value="" color={priority === '' ? onColor(''):"#ffffff"}>ALL</Tab>
                <Tab onClick={onPriority} value="LOW" color={priority === 'LOW' ? onColor('LOW'):"#ffffff"}>LOW</Tab>
                <Tab onClick={onPriority} value="MEDIUM" color={priority === 'MEDIUM' ? onColor('MEDIUM'):"#ffffff"}>MEDIUM</Tab>
                <Tab onClick={onPriority} value="HIGH"  color={priority === 'HIGH' ? onColor('HIGH'):"#ffffff"}>HIGH</Tab>
            </Tabs>
            {onRenderStatus()}
        </BackgroundContainer>
    )
}

export default TaskInput