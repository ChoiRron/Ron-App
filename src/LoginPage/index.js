import styled from "styled-components";
import React, { useState } from "react";
import {useHistory} from "react-router-dom";

// import LoginPage from "./LoginPage";
// import MainPage from "./MainPage";

const LeftSide = styled.h1`
 color: blue;
 text-align: center;
//  background-color:white;
 height:100%;
 width:50%;
//  line-height:300px;
`;
const RightSide = styled.h1`
background-image: url("https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg");
background-repeat: no-repeat;
 font-size: 100px;
 text-align: center;
 color:black;
 height:100%;
 width:50%;
 line-height:300px;
 margin-top:0;
`;

const Container = styled.div`
height:100vh;
background-color:#28bec6;
display:flex; 
`;

const WelcomeTitle = styled.h1`
color: white;
font-weight: 800;
font-size:40px;
`;

const Label = styled.label`
font-size:24px;
color:black;
`;

const Input = styled.input`
width:300px;
height:30px;
margin-left:30px;
border:white;
border-radius:5px;
`;

const InPut = styled.input`
width:300px;
height:30px;
margin-left:155px;
margin-top:50px;
border:white;
border-radius:5px;
`;

const LoginButton = styled.button`
background-color:green;
color:white;
width:80px;
height:30px;
font-size:15px;
margin-top:50px;
border-radius:8px;
`;
function LoginPage() {
    const history = useHistory();

    const [user, setUser] = useState({
        id: "",
        password: "",
    });
    const { id, password } = user;
    const navigateToMainPage = () => {
        history.push("/main");
    };// when we first load a page we initialize 
      //the states to empty string / null / 0 .
      //states will be filled in when the user does specific action

 const putUserInfo = (e) => {//"e" stands for "events"
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setUser ({
        ...user, //combine strings together
        [name]: value, // to avoid reputatin to using same code
    });
    console.log(user);
 }; 

    return (
        <Container>
            <LeftSide>
                <WelcomeTitle>Welcome Back!</WelcomeTitle>
                <div>
                    <Label>Enter Your Username</Label>
                    {/*we are going to replace empty string to the following input by the user*/}
                    <Input type="text" value={id} name="id" onChange={putUserInfo} placeholder="👨‍🎓 Enter your username"></Input>
                </div>
                <div>
                    <Label>Password</Label>
                    <InPut type="password" value={password} name="password" onChange={putUserInfo} placeholder="🔑 Enter your password"></InPut>
                </div>
                <LoginButton onClick={navigateToMainPage}>Login</LoginButton>
            </LeftSide>
            <RightSide></RightSide>
        </Container>
    )
}

export default LoginPage;