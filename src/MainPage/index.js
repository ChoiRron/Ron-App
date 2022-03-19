import styled from "styled-components";
// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

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

const MH = styled.h2`
color:white;
font-size:30px;
position:absolute;
top:450px;
left:350px;
`;

const PUBGImg = styled.img`
background: url("https://img0.baidu.com/it/u=750472804,1731221626&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200");
width:200px;
height:200px;
background-repeat:no-repeat;
position:absolute;
top:550px;
left:300px;
line-height:822px;
`;

const BookImg = styled.img`
background:url("https://img2.baidu.com/it/u=3639517522,2392425939&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200");
width:200px;
height:200px;
background-repeat:no-repeat;
position:absolute;
top:550px;
left:660px;
`;

const ChatingImg = styled.img`
background:url("https://img2.baidu.com/it/u=3080209464,2374011713&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200");
width:200px;
height:200px;
background-repeat:no-repeat;
position:absolute;
top:550px;
left:1020px;
`;
function MainPage() {
return (
    <Container><Italic>Hello, My Name Is Ron!</Italic>
        <MH>My Hobbies:Play PUBG | Read books | Chat with my friends</MH>
        <PUBGImg></PUBGImg>
        <BookImg></BookImg>
        <ChatingImg></ChatingImg>
    </Container>
)
};

export default MainPage;