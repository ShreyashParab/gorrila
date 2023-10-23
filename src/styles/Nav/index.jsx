import styled from 'styled-components'

export const NavContainer = styled.div`
    /* z-index: 3; */
    padding: 15px;
    color:white;
    display:flex;
    justify-content:space-between;
    align-items: center;
    /* position: sticky;
    top: 0; */
    /* background-color: black; */


    @media (max-width:600px){
        width: 100%;
        flex-direction: column;
        height: ${(props)=>(props.show ? "100vh":"auto")};
    }
`

export const Logo =styled.div`
     @media (max-width:600px){
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`

export const Icon = styled.div`
    img{
        width:50px;
    }
`

export const Button = styled.div`
    display: none;
    font-size: 30px;
    @media (max-width:600px){
        display: block;
    }

`

export const Navlinks = styled.div`
    ul{
        display: flex;
        gap: 30px;

        @media (max-width:600px){
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 80px;
        }
    }

    ul li{
        list-style: none;
    }

    ul li a{
        text-decoration: none;
        color: white;
    }

    ul li a:hover{
        color: cyan;
    } 

    @media (max-width:600px){
        display: ${(props)=>(props.show ? "block":"none")};
    }

`

export const SocialMedia = styled.div`
    display: flex;
    gap: 15px;
    padding: 10px;
    border-radius: 50px;
    border: 0.5px solid rgba(255,255,255,0.12);

    @media (max-width:600px){
        width: 100%;
        border: none;
        border-radius: 0%;
        justify-content: center;
        gap: 30px;
        display: ${(props)=>(props.show ? "flex":"none")};
    }
`
