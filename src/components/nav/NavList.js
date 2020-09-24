import React, { useState } from 'react';
import NavItems from './NavItems';
import {Link} from 'react-router-dom'

const NavList = () => {

  const [menuState] = useState([
    {
      type: "a",
      href: "https://www.linkedin.com/in/brian-hague-7441908/",
      img: {
        src: "/images/linkedin-brands.svg",
        className: "svg",
        alt: "linked in"
      },
      text: "LinkedIn"
    },
    {
      type: "a",
      href: "https://github.com/alphaseinor",
      img: {
        src: "/images/github-square-brands.svg",
        className: "svg",
        alt: "git hub"
      },
      text: "GitHub"
    },
    {
      type: "toggle",
      toggle: false,
      img: {
        src: "/images/loaf-arrow-down-1.svg",
        className: "svg",
        alt: "experiments"
      },
      text: "Experiments",
      subMenu: [
        {
          type: "link",
          to: "/",
          img:{
            src: "/images/angle-right-duotone.svg",
            className: "svg",
            alt: "home"
          },
          text: "Home"
        },
        {
          type: "link",
          to: "/markdown/",
          img:{
            src: "/images/markdown-brands.svg",
            className: "svg",
            alt: "mark down"
          },
          text: "Markdown"
        },
        {
          type: "link",
          to: "/rocketreach/",
          img:{
            src: "/images/rocketreach.svg",
            className: "svg",
            alt: "rocketreach"
          },
          text: "RocketReach"
        }
      ]
    }
  ])

  const [menuToggle, setMenuToggle] = useState(false)

  const toggleMenu = (e) => {
    e.preventDefault()
    setMenuToggle(!menuToggle)
  }

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img className="logo" src="/images/text_logo.png" alt="brian hague developer logo" />
        </Link>
        <button 
          className = "menuToggle"
          onClick = {toggleMenu}
        >
          {menuToggle ? "X" : "≡"}
        </button>
      </div>
      <div className={menuToggle ? "links" : "hidden"}>
        {menuState.map((menuItem, index)=><NavItems key={`navList-menu-${index}`} menuItem={menuItem} />)}
      </div>
    </nav>
  );
}

export default NavList