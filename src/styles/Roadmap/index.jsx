import styled from "styled-components";

export const Line = styled.div`
    margin-top: 40px;
    width: 12.6%;
    height: 40px;
    border: 2px solid rgba(255,255,255,0.12);
    border-color: rgba(255,255,255,0.12) rgba(255,255,255,0.12) transparent transparent;
    /* display: flex;
    flex-wrap: wrap; */
    border-top-right-radius: 30px;
    /* border-bottom-right-radius: 1px; */

    @media (max-width:1025px){
        width: 12.65%;
    }

    @media (max-width:770px){
        width: 12.7%;
    }

    @media (max-width:600px){
        width: 15.3%;
    }

    @media (max-width:500px){
        width: 21.50%;
    }

    @media (max-width:376px){
        width: 21.4%;
    }
`

export const RoadmapWrapper = styled.div`
    color: white;
    font-family: Outfit,'san-serif';
    width: 75%;
    margin: 0 auto;

    @media (max-width:600px){
        width: 70%;
    }

    @media (max-width:500px){
        width: 58%;
    }
`

export const QuarterOneTwentyTwo = styled.div`
    display: flex;
    /* height: 320px; */
    border-left: 2px solid rgba(255,255,255,0.12);
    border-bottom: 1px solid rgba(255,255,255,0.12);
    border-bottom-left-radius: 30px;
    position: relative; 

    @media (max-width:900px){
        padding-bottom: 1rem;
    }

    @media (max-width:600px){
        flex-direction: column-reverse;
        align-items: center;
    }
`

export const BlueTimestamp = styled.img`
    width: 150px;
    position: absolute;
    /* left: -6%; */
    left: -70px;

    @media (max-width:770px){
        left: -60px;
        width: 125px; 
    }

    @media (max-width:600px){
        width: 110px;
        left: -50px;
    }

    @media (max-width:500px){
        width: 100px;
        left: -48px;
    }
`

export const QuaterOneTwentyTwoLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* gap: 30px; */
    /* padding: 20px; */

    @media (max-width:600px){
        gap: 30px;
    }

    @media (max-width:600px){
        gap: 20px;
    }
`

export const QuaterOneTwentyTwoRight = styled.img`
    height: 300px;
    border-radius: 900px;
    background: radial-gradient(50.76% 50.76% at 50% 50%,rgba(0, 56, 255, 0.24) 40%, rgba(0, 133, 255, 0.00) 100%);

    @media (max-width:900px){
        width: 250px;
        height: 250px;
    }

    @media (max-width:600px){
        width: 200px;
        height: 200px;
    }
`

export const HeadSection = styled.div`
    padding-left: 2rem;
`

export const MainSection = styled.div`
    padding-left: 4rem;

    @media (max-width:600px){
        padding-left: 3.5rem;
        padding-bottom: 1rem;
    }

    @media (max-width:500px){
        padding-left: 2.6rem;
        padding-bottom: 0;
    }
`

export const Header = styled.h1`
    font-size: 38px;
    letter-spacing: 0.2px;
    font-weight: 500;

    @media (max-width:700px){
        font-size: 32px;
    }
`

export const Subheader = styled.p`
    margin-top: 5px;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.2px;

    @media (max-width:700px){
        font-size: 13px;
    }
`


export const Year = styled.p`
/* color: #FFF; */
font-family: Outfit;
font-size: 35px;
font-style: normal;
font-weight: 100;

@media (max-width:500px){
    font-size: 28px;
}
`

export const Quater = styled.p`
color: #15C4C6;
font-family: Outfit;
font-size: 22px;
font-style: normal;
font-weight: 500;

@media (max-width:500px){
    font-size: 18px;
}

`

export const Description = styled.p`
    color: rgba(255, 255, 255, 0.39);
    margin-top: 2px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    width: 45%;
    /* line-height: 18px; */

    @media (max-width:1025px){
        /* font-size: 13px; */
        width: 90%;
    }

    @media (max-width:900px){
        font-size: 13px;
        width: 90%;
    }

    @media (max-width:700px){
        width: 100%;
    }

    @media (max-width:600px){
        width: 100%;
    }
`

export const QuarterTwoTwentyTwo = styled.div`
    padding: 30px 0px;
   display: flex;
   width: 100%;
   justify-content: flex-end;
   text-align: right;
   border-top: 1px solid rgba(255,255,255,0.12);
   border-right: 2px solid rgba(255,255,255,0.12);
   border-bottom: 1px solid rgba(255,255,255,0.12);
   margin-left: 25px;
   border-top-right-radius:30px;
   border-bottom-right-radius:30px;
    position: relative;
`

export const Container = styled.div`
    padding-right: 5rem;

    @media (max-width:800px){
        padding-right: 4rem;
    }

    @media (max-width:600px){
        padding-right: 3.8rem;
    }

    @media (max-width:500px){
        padding-right: 2.9rem;
    }
`

export const DescriptionTwo = styled.p`
    color: rgba(255, 255, 255, 0.39);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    width: 55%;
    float: right;
    margin-top: 5px;
    /* text-align: right; */

    @media (max-width:900px){
        font-size: 13px;
    }

    @media (max-width:500px){
        width: 100%;
    }
`

export const BlackBoxImgRight = styled.img`
    width: 150px;
    position: absolute;
    /* top: 5%; */
    top: 10px;
    right: -75px;

    @media (max-width:900px){
        width: 125px;
        /* right: -9.5%; */
        right: -63px;
    }

    @media (max-width:600px){
        width: 110px;
        right: -55px;
        top: 50px;
    }

    @media (max-width:500px){
        width: 90px;
        right: -46px;
    }

    /* @media (max-width:350px){
        width: 90px;
        right: -45px;
    } */
`

export const QuaterThreeTwentyTwo = styled.div`
    width: 100%;
    padding: 30px;
    border-top: 1px solid rgba(255,255,255,0.12);
    border-left: 2px solid rgba(255,255,255,0.12);
    border-bottom: 1px solid rgba(255,255,255,0.12);
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    display: flex;
    justify-content: flex-start;
    position: relative;
`

export const ContainerTwo = styled.div`
    padding-left: 3rem;

    @media (max-width:1030px){
        padding-left: 4.5rem;
    }

    @media (max-width:900px){
        padding-left: 2.5rem;
    }

    @media (max-width:600px){
        padding-left: 1.8rem;
    }

    @media (max-width:500px){
        padding-left: 1.5rem;
    }

`

export const BlackBoxImgLeft = styled.img`
    width: 150px;
    position: absolute;
    left: -76px;
    top: 12px;
    /* left: -6.5%;   */
    /* top: 5%; */

    @media (max-width:900px){
        width: 125px;
        left: -60px;
        top: 20px;
    }

    @media (max-width:600px){
        width: 110px;
        left:-55px;
        top:30px;
    }

    @media (max-width:500px){
        width: 90px;
        left: -46px;
    }

    /* @media (max-width:350px){
        width: 90px;
        left: -45px;
        top: 50px;
    } */
`

export const DescriptionThree = styled.p`
    color: rgba(255, 255, 255, 0.39);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    width: 55%;
    /* float: right; */
    margin-top: 5px;

    @media (max-width:900px){
        font-size: 13px;
    }

    @media (max-width:500px){
        width: 100%;
    }
`

export const QuaterFourTwentyTwo = styled.div`
    padding: 30px 0px;
   display: flex;
   width: 100%;
   justify-content: flex-end;
   text-align: right;
   border-top: 1px solid rgba(255,255,255,0.12);
   border-right: 2px solid rgba(255,255,255,0.12);
   border-bottom: 1px solid rgba(255,255,255,0.12);
   margin-left: 25px;
   border-top-right-radius:30px;
   border-bottom-right-radius:30px;
    position: relative;
`

export const QuaterOneTwentyThree = styled.div`
    width: 100%;
    padding: 30px;
    border-top: 1px solid rgba(255,255,255,0.12);
    border-left: 2px solid rgba(255,255,255,0.12);
    border-bottom: 1px solid rgba(255,255,255,0.12);
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    display: flex;
    justify-content: flex-start;
    position: relative;
`

export const QuaterTwoTwentyThree = styled.div`
    padding: 30px 0px;
   display: flex;
   width: 100%;
   justify-content: flex-end;
   text-align: right;
   border-top: 1px solid rgba(255,255,255,0.12);
   border-right: 2px solid rgba(255,255,255,0.12);
   border-bottom: 1px solid rgba(255,255,255,0.12);
   margin-left: 25px;
   border-top-right-radius:30px;
   border-bottom-right-radius:30px;
    position: relative;
`

export const ContactUs = styled.div`
    padding: 45px 35px;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    border-top: 1px solid rgba(255,255,255,0.12);
    border-left: 2px solid rgba(255,255,255,0.12);
    border-top-left-radius: 30px;
    /* height: 400px; */

    @media (max-width:600px){
        gap: 3rem;
    }

    @media (max-width:600px){
        padding: 30px 10px 30px 30px;
    }
`

export const ContactTitleContainer = styled.div`
    
`
export const TitleHeader = styled.h1`
    font-size: 35px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0.2px;

    @media (max-width:600px){
        font-size: 28px;
    }
`

export const TitleDesc = styled.p`
    font-size: 11px;
    margin-top: 5px;

    @media (max-width:600px){
        font-size: 10px;
        width: 100%;
    }
`

export const ContactMainContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width:600px){
        flex-direction: column;
        gap: 50px;
    }
`

export const MainContainerLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (max-width:600px){
        gap: 15px;
    }
`

export const Para = styled.p`
    font-size: 16px;

    @media (max-width:600px){
        font-size: 14px;
    }
`

export const Country = styled.span`
    color: #6C6C6C;
`

export const MainContainerRight = styled.div`
    display: flex;
    flex-direction: column;
    gap: 35px;
`

export const InputFeedback = styled.input`
    width: 350px;
    background: none;
    border-top: none;
    border-left:none;
    border-right:none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.21);
    outline: none;

    &::placeholder{
        color: rgba(255, 255, 255, 0.39);
        font-style: normal;
        font-weight: 400;
        line-height: 25px;
        font-size: 12px;
    }

    @media (max-width:900px){
        width:280px;
    }

    @media (max-width:600px){
        width: 100%;
    }

`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const Button = styled.div`
    width: 125px;
    height: 125px;
    background: linear-gradient(180deg, #107BEE 0%, #359DFD 100%);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    cursor: pointer;

    @media (max-width:600px){
        width: 110px;
        height: 110px;
    }

    @media (max-width:500px){
        width: 95px;
        height: 95px;
        font-size: 11px;
    }
`