import React from 'react'
import '../../styles/Hero/index'
import Crypto from '../../assets/Crypto.png'
import { ButtonWrapper, Content, CryptoImg, Header, HeroWrapper, ImageContainer, Info1, Info2, Info3, Info4, Input, Para, Searchbox, SelectButton, SubHeader, SubmitButton} from '../../styles/Hero/index'


const Hero = () => {
  return (
    <HeroWrapper>
        <Content>
            <Header>Guild Hub of the Metaverse</Header>
            <SubHeader>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis mattis hendrerit. Praesent vel risus in risus vestibulum aliquet. </SubHeader>
            <Searchbox>
              <Input type='text' placeholder='Enter your Email Address'></Input>
              <svg xmlns="http://www.w3.org/2000/svg" width="2" height="49" viewBox="0 0 2 49" fill="none">
                  <path d="M1 0V48.5" stroke="#404053"/>
              </svg>
              <ButtonWrapper>
                <SelectButton>
                  <span>Owner</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                  <path d="M2.83325 6.375L8.49992 12.0417L14.1666 6.375" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </SelectButton>
                <SubmitButton>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21.8296 11.693L2.22414 1.8633C2.14445 1.82345 2.05304 1.81408 1.96632 1.83517C1.7671 1.88439 1.64289 2.08595 1.6921 2.28751L3.71242 10.5422C3.74289 10.6664 3.83429 10.7672 3.95617 10.807L7.41789 11.9953L3.95851 13.1836C3.83664 13.2258 3.74523 13.3242 3.71711 13.4485L1.6921 21.7149C1.67101 21.8016 1.68039 21.893 1.72023 21.9703C1.81164 22.1555 2.03664 22.2305 2.22414 22.1391L21.8296 12.3656C21.9023 12.3305 21.9609 12.2695 21.9984 12.1992C22.0898 12.0117 22.0148 11.7867 21.8296 11.693ZM4.00304 19.3664L5.18195 14.5477L12.1007 12.1735C12.1546 12.1547 12.1991 12.1125 12.2179 12.0563C12.2507 11.9578 12.1991 11.8524 12.1007 11.8172L5.18195 9.44533L4.00773 4.64533L18.7265 12.0258L4.00304 19.3664Z" fill="white"/>
                  </svg>
                </SubmitButton>
              </ButtonWrapper>
            </Searchbox>
        </Content>
        <ImageContainer>
            <CryptoImg src={Crypto}></CryptoImg>
           <Info1>
              <Para>
                Automate payments for quick transparent cashout?
              </Para>
           </Info1>
           <Info2>
              <Para>
                You mean, i can track my scholars’ performance
              </Para>
           </Info2>
           <Info3>
              <Para>
                All on one platform that doesn’t lag? You’re Kidding
              </Para>
           </Info3>
           <Info4>
              <Para>
                Search and Breed Axies and NFTs
              </Para>
           </Info4>
        </ImageContainer>
    </HeroWrapper>
    
  )
}

export default Hero
