import styled from "styled-components";
import gorrila from '../../assets/gorrila.png'

export const HeroWrapper = styled.div`
    z-index: -1;
    height: 85vh;
    color: white;
    display: flex;
    justify-content: center;
     align-items: center; 
     width: 90%;
    margin: 0 auto;

   @media (max-width:930px){
    flex-direction: column;
    width: 100%;
    height: 100%;
   } 
`

export const Content = styled.div`
    width: 50%;

    @media (max-width:930px){
        width: 90%;
    }
`


export const Header = styled.h1`
    color: var(--light-text, #FFF);
    font-size: 58px;
    font-weight: 500;
    letter-spacing: 0.2px;

    @media (max-width:930px){
        font-size: 30px;
        text-align: center;
    }
`
export const SubHeader = styled.p`
    margin-top: 20px;
    color: var(--light-text, #FFF);
    font-size: 18px;
    font-weight: 400;
    line-height: 30px; /* 150% */
    letter-spacing: 0.2px;
    width: 90%;

    @media (max-width:930px){
        font-size: 16px;
        text-align: center;
        line-height: 23px;
        width: 100%;
    }
`
export const Searchbox = styled.div`
    display: flex;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 89px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    /* width: 400px; */
    width: 50%;
    height: 50px;
    margin-top: 20px;

    @media (max-width:930px){
        margin: 20px auto;
    }

    @media (max-width:500px){
        margin: 20px auto;
        width: 90%;
    }
`

export const Input = styled.input`
/* width: 260px; */
width: 70%;
background: rgba(255, 255, 255, 0.03);
border-top-left-radius: 89px;
border-bottom-left-radius: 89px;
border: none;
outline: none;
padding-left:15px;
color: white;

::placeholder{
    font-weight:400;
    font-size:14px;
}
`

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    background: rgba(255, 255, 255, 0.03);
    width: 138px;
    /* width: 40%; */
    border-top-right-radius:89px;
    border-bottom-right-radius:89px;
    padding: 1px 1px 1px 10px;
`
export const SelectButton = styled.p`
    display: flex;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;

    span{
        margin-right: 5px;
        font-size: small;
    }
    svg{
        width: 15px;
    }
`

export const SubmitButton = styled.div`
   background-color: #2d96fa;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 46px;
   height: 46px;
   border-radius: 50%;
   cursor: pointer;
`
export const ImageContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    /* width: 500px; */
    width: 500px;
    height: 500px;
    background: url(${gorrila});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    @media(max-width: 400px){
        width: 95%;
        margin: 0 auto;
        background-size: 300px;
    }

    @media(max-width: 500px){
        width: 95%;
        margin: 0 auto;
        background-size: 550px;
    }
`
export const CryptoImg = styled.img`
    /* display: grid; */
    width: 150px;
    height: 250px;
    grid-row-start:4;
    grid-row-end:6;
    grid-column-start:3;
    grid-column-end:5;
    /* place-self: center; */

    @media(max-width: 500px){
        height: 200px;
        grid-row-start:3;
        grid-row-end:6;
        grid-column-start:2;
        grid-column-end:6; 
        place-self: center;
    }
`

export const Info1 = styled.div`
    padding: 10px;
    fill: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(40px);
    width: 190px;
    height: 60px;
    display: flex;
    align-items: center;
    text-align: center;
    border-radius: 90px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 3;

    @media (max-width:500px){
        width: 150px;
    }

    @media (max-width:400px){
        width: 130px;
        height: 60px;
        padding: 10px;
        grid-row-start: 2;
        grid-row-end: 4;
        grid-column-start: 1;
        grid-column-end: 3;
        align-self: center;
    }
`

export const Info2 = styled.div`
    padding: 10px;
    fill: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(40px);
    width: 190px;
    height: 60px;
    display: flex;
    align-items: center;
    text-align: center;
    border-radius: 90px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    grid-row-start: 2;
    grid-row-end:3;
    grid-column-start: 4;
    grid-column-end: 6;
    justify-self: end;

    @media (max-width:500px){
        width: 150px;
    }

    @media (max-width:400px){
        width: 130px;
        height: 60px;
        grid-row-start: 2;
        grid-row-end:3;
        grid-column-start: 4;
        grid-column-end: 6;
        justify-self: center;
        align-self: end;
    }

    @media (max-width:350px){
        
        grid-row-start: 2;
        grid-row-end:3;
        grid-column-start: 4;
        grid-column-end: 6;
        justify-self: end;
        align-self: center;
    }
`

export const Info3 = styled.div`
    padding: 10px;
    fill: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(40px);
    width: 190px;
    height: 60px;
    display: flex;
    align-items: center;
    text-align: center;
    border-radius: 90px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    grid-row-start: 4;
    grid-row-end: 5;
    grid-column-start: 1;
    grid-column-end: 3;
    justify-self: center;
    align-self: end;

    @media (max-width:500px){
        width: 150px;
    }

    @media(max-width:400px){
        width: 130px;
        height: 60px;
        align-self: start;
    }

    @media(max-width:350px){
        align-self: center;
    }
`

export const Info4 = styled.div`
    padding: 10px;
    fill: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(40px);
    width: 190px;
    height: 60px;
    display: flex;
    align-items: center;
    text-align: center;
    border-radius: 90px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    grid-row-start:4;
    grid-row-end: 5;
    grid-column-start: 4;
    grid-column-end: 6;
    align-self: center;
    justify-self: end;

    @media (max-width:500px){
        width: 150px;
    }   

    @media(max-width:400px){
        width: 130px;
        height: 60px;
        grid-row-start:3;
        grid-row-end: 4;
        grid-column-start: 4;
        grid-column-end: 6;
        align-self: end;
        justify-self: start;
    }

    @media (max-width:350px){
        grid-row-start:3;
        grid-row-end: 4;
        grid-column-start: 4;
        grid-column-end: 6;
        justify-self: end;
    }

`

export const Para = styled.p`
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;

    @media (max-width:400px){
        font-size: 10px;
    }
`

