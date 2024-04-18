import React, { useContext } from 'react'

import NavBar from 'containers/NavBar/NavBar'
import {useNavigate} from 'react-router-dom';
//import { useHistory } from "react-router-dom";
import { AuthenticationContext } from 'context/Authentication'
import useDropdown from './useDropdown'

import ProfileCard from 'components/UI/ProfileCard/ProfileCard'
import { NavLink } from 'react-router-dom'

import {
    Weird,
    Profile,
    Smile,
    Normal
} from '../assets/images/index'

const UseNavbar = () => {
    const logoutHandler = () => {
        localStorage.clear();
        authContext.logout()
        navigate('/')
    }
    const logoutSignUpHandler =() =>{
        localStorage.removeItem('profileSelected')
        authContext.logout()
        navigate('/signup/planform')
    }


    const profileDropdownContent = (
        <>
            <ProfileCard
                profileImage={Profile}
                username="Shanu"
                dropdown
            />
            <ProfileCard
                profileImage={Weird}
                username="Siddhant"
                dropdown
            />
            <ProfileCard
                profileImage={Smile}
                username="Chirag"
                dropdown
            />
            <ProfileCard
                profileImage={Normal}
                username="StarBoy"
                dropdown
            />

            <span style={{ borderBottom: '1px solid grey', marginBottom: '7px' }} onClick={logoutSignUpHandler}>Manage Profiles</span>
            <span onClick={logoutSignUpHandler}>Account</span>
            <span>Help Center</span>
            <span onClick={logoutHandler}>Sign out of Netflix</span>
        </>
    )

    const navLinks = (
        <>
            <NavLink className="inactive" activeClassName="active" to="/browse" exact>Home</NavLink>
            <NavLink className="inactive" activeClassName="active" to="/browse/tv" exact>TV Shows</NavLink>
            <NavLink className="inactive" activeClassName="active" to="/browse/movies" exact>Movies</NavLink>
            <NavLink className="inactive" activeClassName="active" to="/browse/latest" exact>Latest</NavLink>
            <NavLink className="inactive" activeClassName="active" to="/browse/list" exact>My List</NavLink>
        </>
    )

    const profileDropdown = useDropdown(profileDropdownContent,
        { top: '42px', right: '0px', width: '20vh', height: '42vh' })

    const navDropdown = useDropdown(navLinks,
        { top: '15px', width: '100px' })

    const authContext = useContext(AuthenticationContext)
    const navigate = useNavigate();

    return (
        <NavBar navigation profileDropdown={profileDropdown}
            navDropdown={navDropdown} />
    )
}

export default UseNavbar