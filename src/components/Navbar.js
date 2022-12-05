import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    function handleClick(){
        setClick(!click);
    }
    function closeMobileMenu(){
        setClick(false);
    }

    function showButton (){
        if (window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(()=>{
        showButton();
    }, []);

    window.addEventListener("resize", showButton);

    return (
        <>
            <div className ="navbar">
                <div className ="navbar-container">
                    <Link to='/' className='navbar-logo' onClick = {closeMobileMenu}>
                        PawFinder
                        <i class="fa-paw" />
                    </Link>
                    <div className = "menu-icon" onClick = {handleClick}>
                        <i className = {click ? "fas fa-times":"fas fa-bars"} />
                    </div>
                    <ul className = {click ? "nav-menu active":"nav-menu"}>
                        <li className = "nav-item">
                            <Link to = "/about" className = "nav-links" onClick = {closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className = "nav-item">
                            <Link to = "/contacts" className = "nav-links" onClick = {closeMobileMenu}>
                                Contacts
                            </Link>
                        </li>
                        <li className = "nav-item">
                            <Link to = "/add-missing-pet" className = "nav-links" onClick = {closeMobileMenu}>
                                + Add Missing Pet
                            </Link>
                        </li>
                        <li className = "nav-item">
                            <Link to = "/login" className = "nav-links-mobile" onClick = {closeMobileMenu}>
                                Login
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle = 'btn--outline'>Login</Button>}
                </div>
            </div>
        </>
    )
}

export default Navbar