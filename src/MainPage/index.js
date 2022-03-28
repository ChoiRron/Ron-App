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
left:260px;
line-height:822px;
`;

const BookImg = styled.img`
background:url("https://img2.baidu.com/it/u=3639517522,2392425939&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200");
width:200px;
height:200px;
background-repeat:no-repeat;
position:absolute;
top:550px;
left:620px;
`;

const ChatingImg = styled.img`
background:url("https://img2.baidu.com/it/u=3080209464,2374011713&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200");
width:200px;
height:200px;
background-repeat:no-repeat;
position:absolute;
top:550px;
left:980px;
`;

const RonImg = styled.img`
background:url("https://i.insider.com/568d4264dd0895a83d8b45eb?width=1048&format=jpeg");
background-size:400px 200px;
background-repeat:no-repeat;
position:absolute;
top:30px;
left:580px;
`;
function MainPage() {
return (
    <Container><Italic>Hello, My Name Is Ron!</Italic>
        <RonImg></RonImg>
        <MH>My Hobbies:Play PUBG | Read books | Chat with my friends</MH>
        <a href="https://www.google.com/search?q=pubg&source=lmns&bih=746&biw=1309&hl=zh-CN&sa=X&ved=2ahUKEwir66Gfvef2AhXWRvUHHVSwAXwQ_AUoAHoECAEQAA"><PUBGImg></PUBGImg></a>
        <a href="https://www.amazon.com/books-used-books-textbooks/b?ie=UTF8&node=283155"><BookImg></BookImg></a>
        <a href="https://www.google.com/search?q=kakaotalk&oq=kakaotalk&aqs=chrome..69i57j0i512l9.2296j1j7&sourceid=chrome&ie=UTF-8"><ChatingImg></ChatingImg></a>
    </Container>
)
};

export default MainPage;