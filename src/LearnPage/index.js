import styled from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const Container = styled.div`
height:100%;
display:flex;
background-color:#d9ed92;
flex-direction:column;
`;

const AboutMeContainer = styled.div`
background-color:#d9ed92;
width:100%;
height: 100%;
display:flex;
padding-top:50px;
padding-bottom:80px;
`;

const Topic = styled.h1`
color:#560bad;
font-size:50px;
text-shadow:2px 2px 5px red;
margin-top:30px;
margin-left:610px;
`;

const SubTopic = styled.h2`
margin-top:160px;
margin-left:-225px;
color:black;
`;

const Detail = styled.p`
margin-top:320px;
margin-left:-475px;
`;

const Info = styled.p`
color:#8338ec;
margin-top:480px;
margin-left:-355px;
`;

const Info2 = styled.p`
color:#8338ec;
margin-top:480px;
margin-left:200px;
`;

const ImgAboutMe = styled.img`
width:350px;
height:250px;
margin-top:200px;
margin-left:-930px;
`;

const EducationContainer = styled.div`
background-color:#8eecf5;
display:flex;
flex-direction:column;
width:100%;
justify-content:center;
align-items:center;
`;

const Title = styled.h1`
color:black;
`;

const EducationRowContainer = styled.div`
display:flex;
margin-bottom:10px;
`;

const EducationLable = styled.p`
fon-size:30px;
color:black;
margin-right:100px;
`;

const RowContainer = styled.div`
display:flex;
flex-direction:row;
margin-top:30px;
`;

///////////////////////////////////////////////////

const EducationRowContainer2 = styled.div`
display:flex;
margin-bottom:10px;
`;

const EducationLable2 = styled.p`
fon-size:30px;
color:black;
margin-right:100px;
`;

const RowContainer2 = styled.div`
display:flex;
flex-direction:row;
margin-top:30px;
`;

///////////////////////////////////////////////////

const EducationRowContainer3 = styled.div`
display:flex;
margin-bottom:10px;
`;

const EducationLable3 = styled.p`
fon-size:30px;
color:black;
margin-right:83px;
`;

const RowContainer3 = styled.div`
display:flex;
flex-direction:row;
margin-top:30px;
`;

///////////////////////////////////////////////////

const EducationRowContainer4 = styled.div`
display:flex;
margin-bottom:10px;
`;

const EducationLable4 = styled.p`
fon-size:30px;
color:black;
margin-right:73px;
`;

const RowContainer4 = styled.div`
display:flex;
flex-direction:row;
margin-top:30px;
`;

///////////////////////////////////////////////////

const EducationRowContainer5 = styled.div`
display:flex;
margin-bottom:10px;
`;

const EducationLable5 = styled.p`
fon-size:30px;
color:black;
margin-right:23px;
`;

const RowContainer5 = styled.div`
display:flex;
flex-direction:row;
margin-top:30px;
`;
///////////////////////////////////////////////////

const HobbyContainer = styled.div`
background-color:#06d6a0;
display:flex;
flex-direction:column;
width:100%;
justify-content:center;
align-items:center;
`;

const Title2 = styled.h1`
color:black;
`;

const HobbyDiv = styled.div`
display:flex;
flex-direction:row;
margin-top:30px;
`;

const Hobby1 = styled.div`
width:200px;
height:250px;
`;

const BasketballImg = styled.img`
width:200px;
height:200px;
`;

const Basketball = styled.h4`
color:black;
text-align:center;
`;

const Hobby2 = styled.div`
width:200px;
height:250px;
diplay:flex;
margin-left:30px;
`;

const GolfImg = styled.img`
width:200px;
height:200px;
`;

const Golf = styled.h4`
color:black;
text-align:center;
`;

const Hobby3 = styled.div`
width:200px;
height:250px;
diplay:flex;
margin-left:30px;
`;

const PUBGImg = styled.img`
width:200px;
height:200px;
`;

const PUBG = styled.h4`
color:black;
text-align:center;
`;

const Hobby4 = styled.div`
width:200px;
height:250px;
diplay:flex;
margin-left:30px;
`;

const MusicImg = styled.img`
width:200px;
height:200px;
`;

const Music = styled.h4`
color:black;
text-align:center;
`;

const Hobby5 = styled.div`
width:200px;
height:250px;
diplay:flex;
margin-left:30px;
`;

const MathImg = styled.img`
width:200px;
height:200px;
`;

const Math = styled.h4`
color:black;
text-align:center;
`;

const MyHobby = styled.div`
margin-top:50px;
`;

const EMyHobby = styled.b`
font-size:20px;
text-align:center;
color:#212529;
text-shadow:12px 5px 3px #d6063c;
`;

const EMyHobby2 = styled.p`
`;

const EMyHobby3 = styled.p`

`;

function LearnPage() {
    const barStyle = {
        width:"300px",
        backgroundColor:"#cfbaf0",
        height: "30px;"
    }
    return (
        <Container>
            <AboutMeContainer>
                    <Topic>About me</Topic>
                    <SubTopic>Hello, I am Ron Choi. I am learning <br></br>Web Development, and I am trying <br></br>to make my own web site now.</SubTopic>
                    <Detail>I have been learning for Web Development for a while,<br></br> and I have made many web pages before, and now, I am <br></br>trying to make a new react page! React page is more<br></br> complicated than a web page.</Detail>
                    <Info>Name:
                        <br></br>Email:
                        <br></br>Phone:
                        <br></br>Birth:
                    </Info>
                    <Info2>Ron Choi
                    <br></br>2027ronchoi@usbccollegiate.org
                        <br></br>010 0000 0000
                        <br></br>August 9th 2009
                    </Info2>
                    <ImgAboutMe src="https://cdn.w600.comps.canstockphoto.com/it-computer-with-book-drawing_csp1661654.jpg"></ImgAboutMe>
            </AboutMeContainer>
            <EducationContainer>
                <Title>Education</Title>
                <EducationRowContainer>
                    <RowContainer>
                    <EducationLable>GPA</EducationLable>
                    <ProgressBar style={barStyle} label={`4.8 / 5.0`} max={5.0} min={0.0} now={4.8} />
                    </RowContainer>
                </EducationRowContainer>
                <EducationRowContainer2>
                    <RowContainer2>
                    <EducationLable2>SAT</EducationLable2>
                    <ProgressBar style={barStyle} label={`1580 / 1600`} max={1600} min={0} now={1580} />
                    </RowContainer2>
                </EducationRowContainer2>
                <EducationRowContainer3>
                    <RowContainer3>
                    <EducationLable3>TOFEL</EducationLable3>
                    <ProgressBar style={barStyle} label={`80 / 120`} max={120} min={0} now={80} />
                    </RowContainer3>
                </EducationRowContainer3>
                <EducationRowContainer4>
                    <RowContainer4>
                    <EducationLable4>AP CS A</EducationLable4>
                    <ProgressBar style={barStyle} label={`5 / 5`} max={5} min={0} now={5} />
                    </RowContainer4>
                </EducationRowContainer4>
                <EducationRowContainer5>
                    <RowContainer5>
                    <EducationLable5>AP CAULCULUS</EducationLable5>
                    <ProgressBar style={barStyle} label={`3 / 5`} max={5} min={0} now={3} />
                    </RowContainer5>
                </EducationRowContainer5>
            </EducationContainer>
            <HobbyContainer>
                <Title2>Hobbies</Title2>
                <HobbyDiv>
                <Hobby1>
                    <BasketballImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF2XYknScDwsCYga3IIewa_zXrqigTu3FJ1w&usqp=CAU"></BasketballImg>
                    <Basketball>I like to play basketball</Basketball>
                </Hobby1>
                <Hobby2>
                    <GolfImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRYwYWHdvV9Ppuz26In6ZyM5UZyM5oW9R98g&usqp=CAU"></GolfImg>
                    <Golf>I like to play golf</Golf>
                </Hobby2>
                <Hobby3>
                    <PUBGImg src="https://www.freepngimg.com/thumb/logo/93238-pubg-icons-text-brand-tshirt-computer-corporation-thumb.png"></PUBGImg>
                    <PUBG>I like to play PUBG</PUBG>
                </Hobby3>
                <Hobby4>
                    <MusicImg src="https://cdn.dribbble.com/users/3547568/screenshots/14395014/media/0b94c75b97182946d495f34c16eab987.jpg?compress=1&resize=400x300&vertical=top"></MusicImg>
                    <Music>I like listening to music</Music>
                </Hobby4>
                <Hobby5>
                    <MathImg src="https://static.vecteezy.com/system/resources/thumbnails/006/916/615/small/hand-drawn-math-formula-and-chemistry-formula-mathematics-background-physics-formula-physics-chemistry-formula-education-and-learning-background-vector.jpg"></MathImg>
                    <Math>I like to solve some math problems</Math>
                </Hobby5>
                </HobbyDiv>
                <MyHobby>
                    <EMyHobby><EMyHobby2>I have many hobbies, I like to play basketball, golf, PUBG, and I sometimes</EMyHobby2>
                              <EMyHobby3>listen to music when I am boring and I also like to solve math problems.</EMyHobby3>
                    </EMyHobby>
                </MyHobby>
            </HobbyContainer>
        </Container>
    )
};

export default LearnPage;