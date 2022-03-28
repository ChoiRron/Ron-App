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
top:400px;
left:350px;
`;

const PUBGImg = styled.img`
background: url("https://img0.baidu.com/it/u=750472804,1731221626&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200");
width:200px;
height:200px;
background-repeat:no-repeat;
position:absolute;
top:500px;
left:260px;
line-height:822px;
`;

const BookImg = styled.img`
background:url("https://img2.baidu.com/it/u=3639517522,2392425939&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200");
width:200px;
height:200px;
background-repeat:no-repeat;
position:absolute;
top:500px;
left:620px;
`;

const ChatingImg = styled.img`
background:url("https://img.utdstc.com/icon/d74/b34/d74b34fd33c4150cc5005522d3038f521653d21276928aadd51181f69b200745:200");
width:200px;
height:200px;
background-repeat:no-repeat;
position:absolute;
top:500px;
left:980px;
`;

const RonImg = styled.img`
background:url("https://img.women.com/images/images/000/041/406/square/Ron-Weasley-Confused-Reaction-Harry-Potter-600x300.jpg");
background-repeat:no-repeat;
width:200px;
height:200px;
position:absolute;
top:30px;
left:620px;
`;

const LearnMoreButton = styled.button`
background-color:#cfbaf0;
color:#ae2012;
width:150px;
height:50px;
font-size:15px;
margin-top:50px;
border-radius:8px;
margin-top:750px;
margin-left:-385px;
`;
function MainPage() {
return (
    <Container><Italic>Hello, My Name Is Ron!</Italic>
        <RonImg></RonImg>
        <MH>My Hobbies:Play PUBG | Read books | Chat with my friends</MH>
        <a href="https://na.battlegrounds.pubg.com/" target="_blank"><PUBGImg></PUBGImg></a>
        <a href="https://www.amazon.com/books-used-books-textbooks/b?ie=UTF8&node=283155" target="_blank"><BookImg></BookImg></a>
        <a href="https://www.kakaocorp.com/page/service/service/KakaoTalk?lang=en" target="_blank"><ChatingImg></ChatingImg></a>
        <a href="https://learn-more.eu/" target="_blank"><LearnMoreButton>Learn More</LearnMoreButton></a>
    </Container>
)
};

export default MainPage;