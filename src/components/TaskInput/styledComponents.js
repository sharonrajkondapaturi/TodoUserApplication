import style from 'styled-components'

export const BackgroundContainer = style.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
background-image:linear-gradient(to top,#d59edb,#f4ebf5);
min-height:100vh;
width:100%;

@media screen and (max-width:575px){
    width:575px;
}

@media (min-width:576px) and (max-width:767px){
    min-width:576px;
    max-width:767px;
}
`
export const Heading = style.h1`
font-size:38px;
font-family:cursive;
font-weight:bold;
`
export const TopContainer = style.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
margin-top:30px;
`
export const FailureImage = style.img`
height:400px;
width:400px;
`
export const TodoInput = style.input`
border:none;
height:40px;
font-family:Roboto;
padding-left:20px;
font-size:18px;
width:500px;
border-radius:10px;
margin-right:10px;
@media screen and (max-width:575px){
    width:250px;
}
@media (min-width:576px) and (max-width:767px){
    width:300px;
}
`
export const MainContainer = style.ul`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
flex-wrap:wrap;
`
export const LoadContainer = style.div`
margin-top:150px;
`
export const AddButton = style.button`
color:#ffffff;
display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:center;
background-color:#3271a8;
padding:10px;
border:none;
border-radius:10px;
margin-right:10px;
font-size:18px;
width:140px;
cursor:pointer;
height:40px;
@media screen and (max-width:575px){
    width:120px;
}
`
export const Tabs = style.div`
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
margin-top:50px;
margin-bottom:100px;
`

export const Tab = style.button`
border-left:none;
border-right:none;
border-top:none;
border-bottom:2px solid ${props=>props.color};
font-size:25px;
font-amily:Roboto;
background-color:transparent;
color:${props => props.color};
margin-right:60px;
font-weight:bold;
cursor:pointer;
`