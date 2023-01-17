import "./DropDown.css";
import { RxHamburgerMenu } from "react-icons/all"

import { useState } from 'react'


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="">
        <div className="menu-icon" onClick={handleShowNavbar}>
          <RxHamburgerMenu/>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <button>
                Home
            </button>
            <button>
              Blog
            </button>
            <button>
              Projects
            </button>
            <button>
              About
            </button>
            <button>
              Contact
            </button>
          </ul>
        </div>
      </div>
    </nav>
  )
}


export default Navbar;