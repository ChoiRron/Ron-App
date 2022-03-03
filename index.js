import styled from "styled-components";


const LeftSide = styled.h1`
 font-size: 100px;
 color: blue;
 text-align: center;
 background-color:red;
 height:300px;
 width:50%;
 line-height:300px;
 margin-top:0;
`;
const RightSide = styled.h1`
 font-size: 100px;
 text-align: center;
 background-color:#5eb407;
 color:black;
 height:300px;
 width:50%;
 line-height:300px;
 margin-top:0;
`;

const Container = styled.div`
height:100vh;
background-color:#28bec6;
display:flex; 
`;
function LoginPage() {
    return (
        <Container>
        <LeftSide>Left half Page</LeftSide>
        <RightSide>Right half Page</RightSide>
        </Container>
    )
}

export default LoginPage;