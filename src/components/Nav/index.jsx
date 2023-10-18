import React, { useState } from 'react'
import { NavContainer, Logo, Button, Icon, Navlinks, SocialMedia } from '../../styles/Nav'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { BsDiscord , BsTwitter } from 'react-icons/bs'
import logo from '../../assets/Logo.png'

const Nav = () => {
  const [toggleOn, setToggleOn] = useState(false)

  const toggle = () =>{
    console.log("clicked");
    setToggleOn((prevToggle)=> !prevToggle)
    toggleOn ? document.body.style.overflow='visible' : document.body.style.overflow='hidden'
  }


  return (
    <NavContainer show={toggleOn}>
       <Logo>
          <Icon>
            <img src={logo} alt="logo" />
          </Icon>
          <Button onClick={toggle}>
            {toggleOn ? <AiOutlineClose/> : <GiHamburgerMenu/>}
          </Button>
       </Logo>
       <Navlinks show={toggleOn}>
         <ul>
            <li>
              <a href="#roadmap" onClick={toggle}>Road Map</a>
            </li>
            <li>
              <a href="#contact" onClick={toggle}>Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
         </ul>
       </Navlinks>
       <SocialMedia show={toggleOn}>
          <BsDiscord/>
          <BsTwitter/>
       </SocialMedia>
    </NavContainer>
  )
}

export default Nav
