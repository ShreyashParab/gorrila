import React from 'react'
import '../../styles/Footer/index'
import { Copyright, Discord, FooterLeft, FooterMain, FooterRight, FooterWrapper, HeadLink, Icons, JoinDiscord, Link, Links, Phone, TextDiv } from '../../styles/Footer/index'
import { BsDiscord , BsTwitter } from 'react-icons/bs'
import { BiMobile } from 'react-icons/bi'

const Footer = () => {
  return (
    <FooterWrapper>
        <FooterMain>
            <FooterLeft>
                <Links>
                    <HeadLink>Fingertipe</HeadLink>
                    <Link>Home</Link>
                    <Link>Blog</Link>
                    <Link>Roadmap</Link>
                    <Link>About</Link>
                </Links>
                <Links>
                    <HeadLink>Resources</HeadLink>
                    <Link>Discord</Link>
                    <Link>Twitter</Link>
                    <Link>Lorem</Link>
                    <Link>Lorem</Link>
                </Links>
                <Links>
                    <HeadLink>About</HeadLink>
                    <Link>Lorem</Link>
                    <Link>Lorem</Link>
                    <Link>Lorem</Link>
                    <Link>Lorem</Link>
                </Links>
            </FooterLeft>
            <FooterRight>
                <Discord>
                    <BsDiscord style={{fontSize:'20px',marginRight:'5px'}}></BsDiscord>&nbsp;Join us on Discord
                </Discord>
                <Phone>
                    <BiMobile style={{fontSize:'20px',marginRight:'5px'}}></BiMobile>&nbsp;(239) 555-0193
                </Phone>
                <Icons>
                    <BsDiscord style={{fontSize:'20px'}}></BsDiscord>
                    <BsTwitter style={{fontSize:'20px'}}></BsTwitter>
                </Icons>
                <JoinDiscord>
                    <BsDiscord style={{fontSize:'20px'}}></BsDiscord>
                    <TextDiv>Join Discord</TextDiv>
                </JoinDiscord>
            </FooterRight>
        </FooterMain>
        <Copyright>@copyright. play 2022</Copyright>
    </FooterWrapper>
  )
}

export default Footer
