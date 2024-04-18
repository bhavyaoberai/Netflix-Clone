//Working : 
import React, { useState, useEffect, useCallback } from "react";
import "./NavBar.css";
import { NetflixLogo } from "assets/images/";
import Button from "components/UI/Button/Button";
// import Button from '@mui/material/Button';
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faBell } from "@fortawesome/free-solid-svg-icons";
import Search from '../Search/Search'
import { useNavigate } from "react-router-dom";
import { Typography } from "@material-ui/core";
//import { useMovieList } from "containers/Browse/routes/MovieListContext";

const NavBar = props => {
  const { navigation, profileDropdown, navDropdown, loginButton } = props
  const [isNavbarAtTop, setIsNavbarAtTop] = useState(true);
  const initialState = localStorage.getItem('profileSelected') ? false : true
    const [btnClick,setBtnClick] = useState(false);

    
    var extractNameFromEmail = localStorage.getItem("email");
    function capitalizeFirstCharacter(inputString) {
      return inputString.charAt(0).toUpperCase() + inputString.slice(1);
    }
  if (extractNameFromEmail) {
    var i = extractNameFromEmail.indexOf('@');
    extractNameFromEmail = extractNameFromEmail.substring(0, i);
    extractNameFromEmail = capitalizeFirstCharacter(extractNameFromEmail);
  }
  const navigate=useNavigate();

  useEffect(()=>{
    
  },[btnClick])
  const handleaccount =()=>{
    localStorage.removeItem('profileSelected'); 
    setBtnClick(!btnClick);
    window.location.reload();
  }

  const scrollNavbarStateHandler = useCallback(() => {
    const navbarAtTop = window.scrollY < 45
    if (navbarAtTop !== isNavbarAtTop) {
      setIsNavbarAtTop(navbarAtTop)
    }
  }, [isNavbarAtTop])

  useEffect(() => {
    document.addEventListener('scroll', scrollNavbarStateHandler)
    return () => {
      document.removeEventListener('scroll', scrollNavbarStateHandler)
    }
  }, [scrollNavbarStateHandler])

  let navTiles = null
  let flexStyle = { justifyContent: 'space-between', backgroundColor: !isNavbarAtTop && 'black' }

  if (navigation) {
    navTiles = (
      <>
        <div className="LinkContainer">
          <div className="Horizontal">
          <NavLink className="inactive" activeclassname="active" to="/browse" exact={true}>Home</NavLink>
            <NavLink className="inactive" activeclassname="active" to="/browse/tv" exact={true}>TV Shows</NavLink>
            <NavLink className="inactive" activeclassname="active" to="/browse/movies" exact={true}>Movies</NavLink>
            <NavLink className="inactive" activeclassname="active" to="/browse/latest" exact={true}>Latest</NavLink>
            <NavLink className="inactive" activeclassname="active" to="/browse/list" exact={true}>My List</NavLink>
            
          </div>
          <div className="Vertical">
            {navDropdown}
          </div>
        </div>

        <div className="OptionsContainer">
          <Search />
          {/* <Button className="ExtraOptions"  style={{ fontWeight: '350' }} >KIDS</Button> */}
          <button style={{ background: 'transparent', color: '#fff', border: 'none' }} onClick={handleaccount}>KIDS</button>          
          <FontAwesomeIcon className="ExtraOptions" size="lg" icon={faGift} />
          <FontAwesomeIcon className="ExtraOptions" size="lg" icon={faBell}/>   
          <Typography style={{marginRight:"10px"}}><span>Hi, </span>{extractNameFromEmail}</Typography>
          {profileDropdown}
          
        </div>
      </>
    )
  }

  return (
    <div className="NavBar Sticky" style={flexStyle}>
      <img src={NetflixLogo} alt="Logo" />
      {navTiles}
      {loginButton && <Link to="/login">
        <Button
          height="34px"
          width="75px"
          backgroundColor="#e50914"
          textColor="#fff"
        >
          Sign In
      </Button>
      </Link>}
    </div>
  );
};

export default NavBar;
