import styled from "styled-components";


export const FooterWrapper = styled.div`
    color: white;
    height: 350px;
    display: flex;
    flex-direction: column;
    border-top: 2px solid rgba(255,255,255,0.12);
    position: relative;

    @media (max-width:500px){
        height: auto;
    }
`

export const FooterMain = styled.div`
    display: flex;
    height: 100%;
    justify-content: space-around;
    /* align-items: center; */
    padding-top: 4rem;
    padding-bottom: 1rem;

    @media (max-width:500px){
        flex-direction: column;
        align-items: center;
        gap: 50px;
    }
`

export const FooterLeft = styled.div`
    font-size: 16px;
    display: flex;
    gap: 50px;

    @media (max-width:768px){
        font-size: 14px;
    }

    @media (max-width:500px){
        font-size: 13px;
    }
`

export const FooterRight = styled.div`
    font-size: 14px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (max-width:768px){
        font-size: 13px;
    }

    @media (max-width:500px){
        align-items: center;
    }
`

export const Copyright = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 8px;
    font-size: 14px;
    margin-top: 10px;

    @media (max-width:500px){
        margin-top: 15px;
    }
`

export const Links = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const HeadLink = styled.p`
    margin-bottom: 20px;
`

export const Link = styled.p`
    gap: 20px;
`

export const Discord = styled.p`
    color: #5865F2;
    display: flex;
    align-items: center;
`

export const Phone = styled.p`
    display: flex;
    align-items: center;
`

export const Icons = styled.p`
    display: flex;
    gap: 20px;

    @media (max-width:500px){
        /* justify-content: center; */
    }

`

export const JoinDiscord = styled.div`
    width: 100px;
    height: 100px;
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 50%;
    position: absolute;
    bottom: 8%;
    right: 3%;
    cursor: pointer;

    @media (max-width:500px){
        gap: 3px;
        width: 70px;
        height: 70px;
        bottom: 5%;
        padding: 5px;
    }
`

export const TextDiv = styled.p`
    font-family: Graphik;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    text-align: center;
`