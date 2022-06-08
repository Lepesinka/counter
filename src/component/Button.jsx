import React from 'react';
import styled from 'styled-components';

const Button = (props) => (
    <Btn onClick={props.onClick}>{props.symbol}</Btn>
);

const Btn = styled.button`
width: 150px;
height: 50px;
background-color: #d500f9;
color: #fff;
border: 1px solid #e040fb;
font-size: 25px;
`
export default Button;
