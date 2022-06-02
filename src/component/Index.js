import React from 'react'
import {increaseValue,decreaseValue, resetValue} from "../redux/action-creator"
import {useSelector, useDispatch} from "react-redux"



function Index(){

    const myState=useSelector(state=>state.ourState.count)
    const disPatch=useDispatch()
    console.log("++++myState++++", myState)
    return(
        
        <div style = {{
            display:"flex",
            //flexDirection:"column",
            //justifyContent:"center",
            //alignItems:"center",
            fontSize:"18px",
            
        }
        }>
           
           
            <button
            style={{
                width: 150,
                height: 50,                
                backgroundColor:"DarkCyan",
                color:"white",
                margin: 20
            }}
            onClick={()=>disPatch(increaseValue())}
            >Добавить</button>
            <p>{myState}</p>
            <button
            style={{
                width: 150,
                height: 50,                 
                backgroundColor:"DarkCyan",
                color:"white",
                margin: 20
                
            }} 
            onClick={()=>disPatch(decreaseValue())}    
            >Удалить</button>
            
            <button
            style={{
                width: 150,
                height: 50,                 
                backgroundColor:"DarkCyan",
                color:"white",
                margin: 20 
            }}
            onClick={()=>disPatch(resetValue())}              
            >Обнулить</button>
            
            
        </div>
    )
}
export default Index