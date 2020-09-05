import React, { useState, useEffect } from 'react';

export function NavList() {

  const [menuToggle, setMenuToggle] = useState(false)

  const toggleMenu = (e) => {
    e.preventDefault()
    console.log("click")
    setMenuToggle(!menuToggle)
  }

  useEffect(()=> {
    console.log(menuToggle)
  }, [menuToggle])

  return (
    <nav>
      <div className="logo">
        <a href="/">
          <img className="logo" src="/images/text_logo.png" alt="brian hague developer logo" />
        </a>
        <button 
          className = "menuToggle"
          onClick = {toggleMenu}
        >
          {menuToggle ? "X" : "≡"}
        </button>
      </div>
      <div className={menuToggle ? "links" : "hidden"}>
        <a href="https://www.linkedin.com/in/brian-hague-7441908/">
          <img className="svg" src="/images/linkedin-brands.svg" alt="linked in logo" />
          LinkedIn
        </a>
        <a href="https://github.com/alphaseinor">
        <img className="svg" src="/images/github-square-brands.svg" alt="git hub logo" />
          GitHub
        </a>
      </div>
    </nav>
  );
}

export default NavList