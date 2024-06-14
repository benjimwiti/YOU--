import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdHome } from "react-icons/io";
import { FcMms } from "react-icons/fc";
import { FaCirclePlus } from "react-icons/fa6"
import boxTalkLogo from '../../public/box-talk.svg'
import { CgDetailsMore } from "react-icons/cg";

const Header = () => {

  function dropUp() {
    document.querySelector("#dropUpMenu").classList.toggle("hidden");
  }

  const accountId = 1 
  return (
    <>
    <section className="nav-pane">

        <div className="brand-container">
          <div className="logo-con">
            <img 
              src={boxTalkLogo} 
              alt="Box-talk-logo"
              height={40}
              width={40}  
            />
          </div>

          <div className="brand-name">
            YOU
          </div>
        </div>

      <nav>        
        <ul className="nav-menu">
          <li><Link to="/" className="nav-link">
            <div className="menu-icon"><IoMdHome/></div>
            <div className="menu-description">Home</div>
            </Link>
          </li>

          <li><Link to="/create" className="nav-link">
            <div className="menu-icon"><FaCirclePlus/></div>
            <div className="menu-description">Create</div>
            </Link>
          </li>


          <li><Link to={`/profile/${accountId}`}>Profile</Link></li>
          <li><Link to="/create">Create</Link></li>
          <li><Link to="/explore">Explore</Link></li>
          <li><Link to="/logout">Logout</Link></li>

          <li>
            <div onClick={dropUp} className="drop-down" >
              <div className="more-nav-icon">
                <CgDetailsMore />
              </div>

                <div className="more-nav-links hidden" id='dropUpMenu'>
                  <ul>
                    <li>
                      <Link to='/login'>login</Link>
                    </li>

                    <li><Link to="/signUp" className="nav-link">
                      <div className="menu-icon"></div>
                      <div className="menu-description">SignUp</div>
                      </Link>
                    </li>

                  </ul>
                </div>
            </div>
          </li>
        </ul>
      </nav>
    </section>
      
    </>
  )
}

export default Header