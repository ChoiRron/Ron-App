import styled from "styled-components";


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
    return (
        <Container>
        <LeftSide>
            <WelcomeTitle>Welcome Back!</WelcomeTitle>
            <div>
            <Label>Enter Your Username</Label>
            <Input placeholder="👨‍🎓 Enter your username"></Input>
            </div>
            <div>
            <Label>Password</Label>
            <InPut type="password" placeholder="🔑 Enter your password"></InPut>
            </div>
            <LoginButton>Login</LoginButton>
        </LeftSide>
        <RightSide></RightSide>
        </Container>
    )
}

export default LoginPage;