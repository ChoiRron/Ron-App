import styled from "styled-components";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );

const Container = styled.div`
height:822px;
width:1440px;
display:flex;
background-color:#28bec6;
color:white;
font-size:60px;
font-family:"Times New Roman";
`;

const Italic = styled.i`
margin-left:450px;
padding-top:300px;
`;

const Hobbies = styled.h2`
color:white;
`;
function MainPage() {
    return (
        <Container><Italic>Hello, My Name Is Ron!</Italic></Container>
        <Hobbies>My Hobbies: Play PUBG  |  Read books  |  Chat with my friends</Hobbies>
    )
}

export default MainPage;