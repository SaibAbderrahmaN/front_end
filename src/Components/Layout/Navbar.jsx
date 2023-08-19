



import { useState, useEffect, useContext } from 'react'

import { Link, useNavigate } from 'react-router-dom';
import data from "../Data/data.json"
import styled from "styled-components"
import { MdArrowRight, MdArrowRightAlt, MdCalendarToday, MdClear, MdLogout, MdOutlineArrowForwardIos, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight, MdPerson, MdSearch } from 'react-icons/md';
import { AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai'
import { Badge, IconButton } from '@mui/material';
const DivC = styled.div`
.containern {
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.navbarR {
  height: 60px;
  padding: 0;
  padding: 0px 16px;
  background-color: #fff;
  position: relative;
  box-shadow: 0 0 5px 0 #0003;
}
.logo{
    flex-grow: 1;
}
.logo img{
    height: auto;
    max-height: 30px;
}

.menu-icon {
  display: none;
}

.nav-elements {
    height: 60px;
}

.nav-elements ul {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
  padding: 0;
  height: 60px;
}

.nav-elements ul li:not(:last-child) {
  /* margin-right: 60px; */
}
li{
    height: 60px;
}
.m6{
    margin-left: 8px;
}
.nav-elements ul a {
    position: relative;
  font-size: 16px;
  font-weight: 500;
  line-height: 60px;
  color: #2f234f;
  text-decoration: none;
  padding: 0px 16px;
  display: flex;
  height: 60px;
  align-items: center;
  text-transform: capitalize;
}
.nav-elements ul a:after{
    content: "";
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 2px;
  transition: transform .3s;
  transform: scaleX(0);
  background-color: ${data.theme.Primary};
}
.css-fvc8ir-MuiBadge-badge{
    background-color: ${data.theme.Primary};
    color:#FFF
}
.nav-elements ul a:hover:after{
    transform: none;
}

.nav-elements ul a.active {
  color: #574c4c;
  font-weight: 500;
  position: relative;
}

.nav-elements ul a.active::after {
    transform: none;
}
.cartinfo {
    font-size: 16px;
    font-weight: 700;
    display: flex;
    align-items: center;
}
.cartinfo svg{
height: 22px;width:22px
}
@media (max-width: 768px) {
  .nav-elements ul li:not(:last-child) {
    /* margin-right: 30px; */
  }
}

@media (max-width: 600px) {
  .menu-icon {
    display: block;
    cursor: pointer;
    margin-left: 12px;
  }

  .nav-elements {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #fef7e5;
    width: 0px;
   
    transition: all 0.3s ease-in;
    overflow: hidden;
  }

  .nav-elements.active {
    width: 270px;
  }

  .nav-elements ul {
    display: flex;
    flex-direction: column;
  }

  .nav-elements ul li {
    margin-right: unset;
    margin-top: 22px;
  }
}

`
const Navbar = (props) => {

    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    const Home = () => <h2>You are in the Home</h2>;
    const Blogs = () => <h2>You are in the Blogs</h2>;
    const Projects = () => <h2>You are in the Projects</h2>;
    const About = () => <h2>You are in the About</h2>;
    const Contact = () => <h2>You are in the Contact</h2>;

    return <DivC>
        <nav className="navbarR">
            <div className="containern">
                <div className="logo">
                    <img src='https://risecart.net/static/media/logoff.3665b3ae8542d6493e76.png' />
                </div>

                <div className={`nav-elements  ${showNavbar && "active"}`}>
                    <ul>
                        {
                            data.Menu.headerMenu.listLinks.map((el, key) => {
                                return <li key={key}>
                                    <Link to="#" className={key==0?"active":""}>{el.name}
                                        {/* <div className="m6"></div><MdOutlineKeyboardArrowDown /> */}
                                    </Link>
                                </li>
                            })
                        }


                    </ul>
                </div>
                <div className="flex-grow-1"></div>
                <div className="cartinfo">
                    2300 dzd
                    <div className="m6"></div>

                    <Badge badgeContent={4}  slotProps={{
                        sx:{bgcolor:data.theme.Primary}
                    }}>
                        <AiOutlineShoppingCart />
                    </Badge>

                </div>
                
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <IconButton>
                    <AiOutlineMenu></AiOutlineMenu>
                    </IconButton>
                </div>
            </div>
        </nav>
    </DivC>;



}


export default Navbar