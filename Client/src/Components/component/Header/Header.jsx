import React from 'react'
import './Header.css';
import logo from '../../../assets/AQualogo.png'; 
import searchIcon from '../../../assets/search.png'
import Wishlist from '../../../assets/wishlist.png';
import Cart from '../../../assets/cart.png';
import Login from '../../../assets/login.png';



export default function Header() {
  return (
    <div>
       {/* Header */}
    <header>
        <div className="navbar">
            {/* logo */}
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            {/* navbar */}
            <nav>
                <a href="#">Home</a>
                <a href="#">Shop</a>
                <a href="#">About</a>
                <a href="#">Track</a>
                <a href="#">Contact</a>
            </nav>
            {/* search box */}
            <div className="search-div">
                <input type="search" placeholder="Search Products" name="" id=""/>
                <img src={searchIcon} alt=""/>
            </div>
            {/* user cart,wishlist,login */}
            <div className="user-icons">
                <a href="#">
                    <img src={Wishlist} alt=""/>
                </a>
                <a href="#">
                    <img src={Cart} alt=""/>
                </a>
                <a href="#">
                    <img src={Login} alt=""/>
                </a>
            </div>
        </div>
    </header>
    </div>
  )
}
