import styled from "styled-components";

const Container = styled.div`
height:822px;
width:1440px;
display:flex;
background-color:#d9ed92;
`;

const Topic = styled.h1`
color:#560bad;
font-size:50px;
text-shadow:2px 2px 5px red;
margin-top:30px;
margin-left:610px;
`;

const SubTopic = styled.h2`
position:absolute;
margin-top:150px;
margin-left:610px;
`;

const Detail = styled.p`
position:absolute;
margin-top:280px;
margin-left:
`;

const Info = styled.p`

`;

const ImgAboutMe = styled.img`

`;
function LearnPage(){
    return(
        <Container>
            <Topic>About me</Topic>
            <SubTopic>Hello, I am Ron Choi. I am learning <br></br>Web Development, and I am trying <br></br>to make my own web site now.</SubTopic>
            <Detail>I have been learning for Web Development for a while, and I have made many web pages before, and now, I am trying to make a new react page! React page is more complicated than a web page.</Detail>
            {/* <Info>Name:                                             Ron Choi
                <br></br>Email:                                             2027ronchoi@usbccollegiate.org
                <br></br>Phone:                                             010 0000 0000
                <br></br>Birth:                                             August 9th 2009
                </Info>
            <ImgAboutMe src="https://i.pinimg.com/originals/fc/ae/d8/fcaed8e309e8cd7ebd3777a13df667f8.jpg"></ImgAboutMe> */}
        </Container>
    )
};

export default LearnPage;