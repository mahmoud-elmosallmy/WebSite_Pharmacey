import React, { useState } from 'react'
import Logo from '../../Assets/logo.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { CgMenuRightAlt , CgClose } from "react-icons/cg";

function Header() {
    const [menuIcon , setMenuIcon] = useState()

    // console.log(menuIcon);

    const menuScrollOpen = () => setMenuIcon(true)
    const menuScrollClose = () => setMenuIcon(false)

    return (
        <HeaderStyle>
            <div className='container'>
                <div className='top_header'>
                    <Link to={'/'} className='logo'>
                        <img src={Logo} alt='logo'/>
                    </Link>
                    <div className={menuIcon ? "nav_bar active" : "nav_bar"}>

                        <div className='links'>
                            <Link to={'/'} onClick={() => setMenuIcon(false)} > الرئيسية </Link>
                            <Link to={'/specialties'} onClick={() => setMenuIcon(false)} > التخصصات </Link>
                            <Link to={'/doctors'} onClick={() => setMenuIcon(false)} > الدكاترة </Link>
                            <Link to={'/support'} onClick={() => setMenuIcon(false)} > الدعم </Link>
                        </div>

                        <div className='mobile-navbar-btn'>
                            <CgMenuRightAlt 
                                name="menu-outline" 
                                className="mobile-nav-icon"
                                onClick={menuScrollOpen}
                            />
                            <CgClose 
                                name="close-outline" 
                                className="mobile-nav-icon close-outline"
                                onClick={menuScrollClose}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.div`
position: sticky;
top: 0px;
z-index: 7;
background-color: white;
box-shadow: 0 4px 13px -3px rgba(0, 0, 0, 0.10196);
border-bottom: 1px solid #d2d2d2;

.top_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px;


    .logo {
        z-index: 99999;
        /* margin-top: 20px; */
    }
    .logo img {
        width: 130px;

    }
    
    .links {

        a {
            text-decoration: none;
            color: #000;
            transition: .3s;
            margin-left: 8px;
        }
        a:hover {
            color: #ff5000;
        }
    }

    .mobile-navbar-btn {
        display: none;
        background-color: transparent;
        cursor: pointer;
        border: none;
    }
    .mobile-nav-icon[name="close-outline"] {
        display: none;
        transition: all 8.4s;
    }
    .close-outline {
        display: none;
    }
} 

@media screen and (max-width: 767px) {
    .links {
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        visibility: hidden;
        opacity: 0;
        transform: translateX(-100%);
        /* transform-origin: top; */
        transition: all .3s linear;
    }

    .active .links {
        width: 100%;
        gap: 45px;
        visibility: visible;
        opacity: 1;
        overflow: hidden;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all .3s linear;

        a {
            font-size: 40px;
            font-weight: bold;
            background-color: #ff5000;
            color: white;
            padding: 15px;
        }
        .navbar-link {
            font-size: 4.2rem;
        }
    }

    .nav_bar .mobile-navbar-btn {
        display: inline-block;  
        z-index: 9999;
        border: black;

        .mobile-nav-icon {
            font-size: 2.2rem;
            color: black
        };
    }
    .active .mobile-nav-icon {
        display: none;
        font-size: 3.2rem;
        position: fixed;
        top: 2%;
        right: 5%;
        color: black;
        z-index: 9999;
        
    }
    .active .close-outline {
        display: inline-block !important;
    }
}
`;

export default Header