import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const NavItems = ({menuItem}) => {
    const [menuToggle, setMenuToggle] = useState(false)
    console.log(menuItem)
    switch(menuItem.type){
        case "toggle":
            const toggleMenu = (e) => {
                e.preventDefault()
                setMenuToggle(!menuToggle)
            }
            return(
                <>
                <div>
                    <button 
                        className = "menuToggle"
                        onClick = {toggleMenu}
                    >
                        <div>
                            <img src={menuItem.img.src} className={menuItem.img.className} alt={menuItem.img.alt} />
                            <p>{menuItem.text}</p>
                        </div>
                    </button>
                </div>
                <div className={menuToggle ? "modalMenu links" : "modalMenu toggle"}>
                    {menuItem.subMenu.map((menuItem, index)=><NavItems key={`NavItems-menu-${index}`} menuItem={menuItem} />)}
                </div>
                </>
            )
        case "a":
            return(
                <a href={menuItem.href}>
                    <img src={menuItem.img.src} className={menuItem.img.className} alt={menuItem.img.alt} />
                    <p>{menuItem.text}</p>
                </a>
            )
            
        case "link":
            return(
                <Link to={menuItem.to}>
                    <img src={menuItem.img.src} className={menuItem.img.className} alt={menuItem.img.alt} />
                    <p>{menuItem.text}</p>
                </Link>
            )
        default:
            return (
                <></>
            )
    }
}
    
    // <a href="https://www.linkedin.com/in/brian-hague-7441908/">
    //   <img className="svg" src="/images/linkedin-brands.svg" alt="linked in logo" />
    //   <p>LinkedIn</p>
    // </a>
export default NavItems