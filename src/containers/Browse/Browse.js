import React, { useEffect, useState } from 'react'

import ProfileModal from 'components/Modals/ProfileModal/ProfileModal'
import {useNavigate} from 'react-router-dom';
//import { useHistory } from 'react-router-dom'
import Layout from 'hoc/Layout'
import SearchContent from './SearchContent/SearchContent'
import { Home, Movies, Tv, LatestVideo, List } from './routes'

/**
 * Remember: the component where you want to use the context is the one which you wrap
 * with the provider.
 */
const Browse = props => {
    // Render different videoSections based on this route prop
    const { route } = props
    const initialState = localStorage.getItem('profileSelected') ? false : true
    const [modal, setModal] = useState(initialState)
    const navigate = useNavigate()
    let browseContent=null
    

    const profileClickHandler = () => {
        setModal(false)
        localStorage.setItem('profileSelected', true)
    }

       
    if (route === '/browse') {
        browseContent = <Home />
        
    } else if (route === '/browse/movies') {
        browseContent = <Movies />
    } else if (route === '/browse/tv') {
        browseContent = <Tv />
    } else if (route === '/browse/latest') {
        browseContent = <LatestVideo />
    } else if(route === '/browse/list') {
        browseContent = <List />
    }
    else if (route === '/search') {
        browseContent = <SearchContent searchParam={navigate.location.search.substring(3)} />
    }

    return (
        <>
            <ProfileModal modalOpen={modal} profileClickHandler={profileClickHandler} />
            {!modal && <Layout>
                {browseContent}
            </Layout>}
            {
                console.log(browseContent)
            }
        </>
    )
}

/**
 * Remember the thing which gave you trouble here. Never mutate state directly. Since I didn't create
 * a copy of the trending state array, I kept splicing each item all over the place, which 
 * caused unnecessary problems. 
 */

export default Browse