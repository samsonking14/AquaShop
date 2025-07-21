import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../assets/AQualogo.png";
import searchIcon from "../../assets/search.png";
import Wishlist from "../../assets/wishlist.png";
import Cart from "../../assets/fish.png";
import Login from "../../assets/login.png";
import { useCart } from "../Home/Products/AddToCart.jsx";
import data from "../Home/Products/data.jsx";  

export default function Header({ setQuery }) {
  const [scrolled, setScrolled] = useState(false);
  const [inputValue, setInputValue] = useState(""); // User input
  const [filteredResults, setFilteredResults] = useState([]);
  const { cartItems } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //  Handle search logic here
  useEffect(() => {
    if (inputValue.trim() === "") {
      setFilteredResults([]);
    } else {
      const results = data.filter((item) =>
        item.title.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredResults(results);
    }
  }, [inputValue]);

  return (
    <div>
      <header className={scrolled ? "navbar scrolled" : "navbar"}>
        <div className="navbar">
          {/* logo */}
          <div className="logo">
            <img src={logo} alt="" />
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
          <div className={`search-div ${scrolled ? "scrolled" : ""}`} style={{ position: "relative" }}>
            <input
              type="search"
              placeholder="Search Products"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                setQuery(e.target.value); 
              }}
            />
            <button>
              <img src={searchIcon} alt="Search" />
            </button>

            {/*  Dropdown Results */}
            {filteredResults.length > 0 && (
              <div className="search-dropdown">
                {filteredResults.map((item) => (
                  <div
                    key={item.id}
                    className="search-result-item"
                    onClick={() => alert(`Selected: ${item.title}`)} // you can add navigation later
                  >
                    <img src={item.image} alt={item.title} />
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* icons */}
          <div className="user-icons">
            <a href="#"><img className="wishlist" src={Wishlist} alt="" /></a>
            <a href="#" className="cart-container">
              <img className="cart-icon" src={Cart} alt="cart" />
              <span className="cart-count">{cartItems.length}</span>
            </a>
            <a href="#"><img className="loginlogo" src={Login} alt="" /></a>
          </div>
        </div>
      </header>
    </div>
  );
}
