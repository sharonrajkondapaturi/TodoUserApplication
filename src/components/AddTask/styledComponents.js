import style from 'styled-components'

export const Background = style.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-image:url('https://images.pexels.com/photos/2736499/pexels-photo-2736499.jpeg?cs=srgb&dl=pexels-content-pixie-1405717-2736499.jpg&fm=jpg');
min-height:100vh;
background-size:cover;

@media screen and (max-width:575px){
    width:100%;
}
`
export const Heading = style.h1`
font-family:cursive;
font-size:42px;
color:#edd8f2;
margin-left:40px;
`

export const TodoForm = style.form`
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
padding:20px;
height:400px;
width:500px;
background-color:transparent;
border-radius:10px;
`
export const TodoLabel = style.label`
font-family:Roboto;
font-size:25px;
margin-bottom:10px;
font-weight:bold;
`
export const TodoInput = style.input`
width:400px;
height:50px;
padding:10px;
border:none;
margin-bottom:10px;
font-size:18px;
border-radius:10px;
`
export const AddTodo = style.button`
border:none;
color:#ffffff;
font-family:Roboto;
font-size:18px;
padding:8px;
border-radius:10px;
background-color:#6b6dd6;
width:400px;
font-weight:Roboto;
cursor:pointer;
`

export const SelectPriority = style.select`
width:400px;
height:50px;
padding:10px;
border:none;
margin-bottom:10px;
font-size:18px;
border-radius:10px;
cursor:pointer;
`
export const OptionPriority = style.option`
cursor:pointer;
`