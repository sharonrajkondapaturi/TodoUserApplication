import style from 'styled-components'

export const TodoList = style.li`
display:flex;
flex-direction:column;
padding:20px;
width:600px;
height:400px;
background-color:#f5f5f0;
margin-right:30px;
margin-bottom:40px;
border-radius:10px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
text-decoration:${props=>props.decoration === "No"? "none":"line-through"};
@media screen and (max-width:575px){
    width:250px;
    min-height:900px;
    max-height:1000px
}
@media (min-width:576px) and (max-width:767px){
    width:480px;
    min-height:900px;
    max-height:1000px
}
`
export const HeadContainer = style.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
@media screen and (max-width:575px){
    flex-direction:column;
    justify-content:center;
    align-items:center;
}
@media (min-width:576px) and (max-width:767px){
    flex-direction:column;
    justify-content:center;
    align-items:center;
}
`
export const Todo = style.h1`
font-family:cursive;
margin-right:20px;
text-align:center;
`
export const Task = style.li`
font-family:Roboto;
font-size:22px;
margin:10px;
list-style-type: square;
font-weight:bold;
`
export const Button = style.button`
display:flex;
justify-content:center;
align-items:center;
background-color:${props=>props.color};
padding:10px;
border:none;
border-radius:10px;
margin-right:10px;
color:#ffffff;
font-size:18px;
width:190px;
cursor:pointer;
@media screen and (max-width:575px){
   margin-bottom:20px;
}
@media (min-width:576px) and (max-width:767px){
    margin-bottom:20px;
}
`
export const TaskNum = style.span`
font-size:22px;
font-family:Roboto;
margin-right:30px;
font-weight:550;
`
export const Priority = style.p`
color:${props=>props.color};
font-weight:500;
font-size:30px;
margin-left:10px;
`
