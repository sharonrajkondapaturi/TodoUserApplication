import { Component } from "react";
import axios from 'axios'
import { Background, TodoForm, TodoInput, TodoLabel, AddTodo, SelectPriority, OptionPriority,Heading} from "./styledComponents";

// to add New TodoList using Class Component
class AddTask extends Component{
    state={todoName:'',task1:'',task2:'',task3:'',priority:'LOW',accomplished:'No'}

    onTodoName = event=>{
        this.setState({todoName:event.target.value.toUpperCase()})
    }
    onTask1 = event=>{
        this.setState({task1:event.target.value})
    }
    onTask2 = event=>{
        this.setState({task2:event.target.value})
    }
    onTask3 = event=>{
        this.setState({task3:event.target.value})
    }
    onPriority = event=>{
        this.setState({priority:event.target.value.toUpperCase()})
    }
    onAccomplished = event=>{
        this.setState({accomplished:event.target.value})
    }
    
    //Submit the given todoList
    onSubmit = async(event)=>{
        event.preventDefault()
        const {todoName,task1,task2,task3,priority,accomplished} = this.state
        const todoData = {
            todoName,
            task1,
            task2,
            task3,
            priority,
            accomplished
        }
        await axios.post('https://todoblog-9.onrender.com/addTodo',todoData)
        window.history.pushState({}, undefined, "/");
        window.location.reload()
    }
    render(){
        const {todoName,task1,task2,task3,priority,accomplished} = this.state
        return(
            <Background>
                <TodoForm onSubmit={this.onSubmit}>
                    <Heading>Add Todo</Heading>
                    <TodoLabel htmlFor="TodoName">Enter Your Todo</TodoLabel>
                    <TodoInput id="TodoName" onChange={this.onTodoName} value={todoName} placeholder="Enter Todo"/>
                    <TodoLabel htmlFor="Task1">Enter Your Task 1</TodoLabel>
                    <TodoInput id="Task1" onChange={this.onTask1} value={task1} placeholder="Enter Task1"/>
                    <TodoLabel htmlFor="Task2">Enter Your Task 2</TodoLabel>
                    <TodoInput id="Task2" onChange={this.onTask2} value={task2} placeholder="Enter Task2"/>
                    <TodoLabel htmlFor="Task3">Enter Your Task 3</TodoLabel>
                    <TodoInput id="Task3" onChange={this.onTask3} value={task3} placeholder="Enter Task3"/>
                    <TodoLabel htmlFor="Priority" onChange={this.onPriority}>Enter Your Priority</TodoLabel>
                    <SelectPriority onChange={this.onPriority} value={priority} id="Priority">
                        <OptionPriority value="LOW">LOW</OptionPriority>
                        <OptionPriority value="MEDIUM">MEDIUM</OptionPriority>
                        <OptionPriority value="HIGH">HIGH</OptionPriority>
                    </SelectPriority>
                    <TodoLabel htmlFor="Accomplished">Accomplished</TodoLabel>
                    <SelectPriority onChange={this.onAccomplished} value={accomplished} id="Accomplished">
                        <OptionPriority value="Yes">Yes</OptionPriority>
                        <OptionPriority value="No">No</OptionPriority>
                    </SelectPriority>
                    <AddTodo type="submit">
                        Add Todo
                    </AddTodo>
                </TodoForm>
            </Background>
        )
    }
}

export default AddTask