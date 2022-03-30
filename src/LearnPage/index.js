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
margin-left:610px;
`;

const Info = styled.p`
position:absolute;
margin-top:450px;
margin-left:610px;
color:#8338ec;
`;

const InfoC = styled.p`
position:absolute;
margin-top:450px;
margin-left:900px;
color:#8338ec;
`;
const ImgAboutMe = styled.img`
width:350px;
height:250px;
position:absolute;
margin-top:200px;
margin-left:130px;
`;
function LearnPage(){
    return(
        <Container>
            <Topic>About me</Topic>
            <SubTopic>Hello, I am Ron Choi. I am learning <br></br>Web Development, and I am trying <br></br>to make my own web site now.</SubTopic>
            <Detail>I have been learning for Web Development for a while,<br></br> and I have made many web pages before, and now, I am <br></br>trying to make a new react page! React page is more<br></br> complicated than a web page.</Detail>
            <Info>Name:
                <br></br>Email:
                <br></br>Phone:
                <br></br>Birth:
                </Info>
            <InfoC>Ron Choi
                <br></br>2027ronchoi@usbccollegiate.org
                <br></br>010 0000 0000
                <br></br>August 9th 2009
            </InfoC>
            <ImgAboutMe src="https://cdn.w600.comps.canstockphoto.com/it-computer-with-book-drawing_csp1661654.jpg"></ImgAboutMe>
        </Container>
    )
};

export default LearnPage;