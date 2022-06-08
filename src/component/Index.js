import React from 'react'
import {increaseValue,decreaseValue, resetValue} from "../redux/action-creator"
import {useSelector, useDispatch} from "react-redux"
import styled from 'styled-components';
import Button from './Button';


function Index(){

    const myState=useSelector(state=>state.ourState.count)
    const disPatch=useDispatch()
    console.log("++++myState++++", myState)
    return(
        
        <Wrapper>           
             <P>{myState}</P> 
             <BtnWrapper>
                <Button symbol={'+'} onClick={()=>disPatch(increaseValue())}/>
                <Button symbol={'R'} onClick={()=>disPatch(resetValue())}/>         
                <Button symbol={'-'} onClick={()=>disPatch(decreaseValue())}/>                
                <Button symbol={'Add'} />
            </BtnWrapper>          
            
        </Wrapper>
    )
}
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #263238;
`

const BtnWrapper = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
`

const P = styled.p`
    font-size: 40px;
    color: #fff;
`

export default Index