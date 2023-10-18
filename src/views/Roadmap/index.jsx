import React from "react";
import '../../styles/Roadmap/index'

import { Description, DescriptionTwo , HeadSection, Header, Line, MainSection, QuarterOneTwentyTwo, Quater, QuaterOneTwentyTwoLeft, QuaterOneTwentyTwoRight, RoadmapWrapper, Subheader, Year , BlueTimestamp, QuarterTwoTwentyTwo, Container, BlackBoxImgRight, QuaterThreeTwentyTwo, DescriptionThree, BlackBoxImgLeft, ContainerTwo, QuaterFourTwentyTwo, QuaterOneTwentyThree, QuaterTwoTwentyThree, ContactUs, ContactTitleContainer, ContactMainContainer, MainContainerLeft, MainContainerRight, TitleDesc, TitleHeader, Country , Para, InputFeedback, Button, ButtonWrapper} from "../../styles/Roadmap/index";

import Infinity from '../../assets/Infinity.png'
import BlueTimestampImg from '../../assets/BlueTimestamp.png'
import BlackBox from '../../assets/Blackbox.png'

const Roadmap = () => {
  return (
    <>
    <Line></Line>
    <RoadmapWrapper id="roadmap">
        <QuarterOneTwentyTwo>
            <QuaterOneTwentyTwoLeft>
                <HeadSection>
                    <Header>Road Map</Header>
                    <Subheader>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Subheader>
                </HeadSection>
                <MainSection>
                    <BlueTimestamp src={BlueTimestampImg} alt="BlueTimestampImg"></BlueTimestamp>
                    <Year>2022</Year>
                    <Quater>Q1</Quater>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor
                    </Description>
                </MainSection>
            </QuaterOneTwentyTwoLeft>
            <QuaterOneTwentyTwoRight src={Infinity}>
            </QuaterOneTwentyTwoRight>
        </QuarterOneTwentyTwo>
        <QuarterTwoTwentyTwo>
            <Container>
                <BlackBoxImgRight src={BlackBox} alt="BlackBox"></BlackBoxImgRight>
                <Year>2022</Year>
                <Quater>Q2</Quater>
                <DescriptionTwo>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor
                </DescriptionTwo>
            </Container>
        </QuarterTwoTwentyTwo>
        <QuaterThreeTwentyTwo>
            <ContainerTwo>
                <BlackBoxImgLeft src={BlackBox} alt="BlackBox"></BlackBoxImgLeft>
                <Year>2022</Year>
                <Quater>Q3</Quater>
                <DescriptionThree>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor
                </DescriptionThree>
            </ContainerTwo>
        </QuaterThreeTwentyTwo>
        <QuaterFourTwentyTwo>
            <Container>
                <BlackBoxImgRight src={BlackBox} alt="BlackBox"></BlackBoxImgRight>
                <Year>2022</Year>
                <Quater>Q4</Quater>
                <DescriptionTwo>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor
                </DescriptionTwo>
            </Container>
        </QuaterFourTwentyTwo>
        <QuaterOneTwentyThree>
            <ContainerTwo>
                <BlackBoxImgLeft src={BlackBox} alt="BlackBox"></BlackBoxImgLeft>
                <Year>2023</Year>
                <Quater>Q1</Quater>
                <DescriptionThree>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor
                </DescriptionThree>
            </ContainerTwo>
        </QuaterOneTwentyThree>
        <QuaterTwoTwentyThree>
            <Container>
                <BlackBoxImgRight src={BlackBox} alt="BlackBox"></BlackBoxImgRight>
                <Year>2023</Year>
                <Quater>Q2</Quater>
                <DescriptionTwo>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor
                </DescriptionTwo>
            </Container>
        </QuaterTwoTwentyThree>
        <ContactUs id="contact">
            <ContactTitleContainer>
                <TitleHeader>Contact Us</TitleHeader>
                <TitleDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TitleDesc>
            </ContactTitleContainer>
            <ContactMainContainer>
                <MainContainerLeft>
                    <Para>Earnmanagement.com</Para>
                    <Para><Country>US </Country> +1 (872) 288 9283</Para>
                    <Para><Country>UA </Country> +1 (872) 288 9283</Para>
                </MainContainerLeft>
                <MainContainerRight>
                    <InputFeedback placeholder="Your Name"></InputFeedback>
                    <InputFeedback placeholder="Your Email Address"></InputFeedback>
                    <InputFeedback placeholder="Describe your needs"></InputFeedback>
                    <ButtonWrapper>
                        <Button>Submit Request</Button>
                    </ButtonWrapper>
                </MainContainerRight>
            </ContactMainContainer>
        </ContactUs>
    </RoadmapWrapper>
    </>
    
  )
}

export default Roadmap
