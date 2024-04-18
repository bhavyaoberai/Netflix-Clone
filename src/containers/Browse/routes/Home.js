import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import BrowseContent from '../BrowseContent/BrowseContent'
import ErrorPage from 'components/StaticPages/ErrorPage/ErrorPage'
import { fetchTrending, selectAllTrendingVideos, selectTrendingError } from 'store/reducers/slices/trendingSlice'
import { fetchTopRated, selectAllTopRatedVideos, selectTopRatedError } from 'store/reducers/slices/topratedSlice'
import { fetchNetflixOriginals, selectAllNetflixOriginals, selectNetflixError } from 'store/reducers/slices/netflixOriginalsSlice'
import {fetchdocumentary ,selectAllDocumantryVideos,selectDocumentaryError} from 'store/reducers/slices/documentariesSlice'
import {fetchcomedyMovies ,selectAllComedyVideos,selecztComedyMovieError } from 'store/reducers/slices/comedyMoviesSlice'
import {fetchHorrorMovie ,selectAllHorrorVideos,selectHorrorMovieError } from 'store/reducers/slices/horrorMoviesSlice'
import {fetchRomanticMovie ,selectAllRomanticMovieVideos,selectRomanticMovieError } from 'store/reducers/slices/romanceMoviesSlice'


const Home = () => {
    const horrorMovie=useSelector(selectAllHorrorVideos)
    const comedyMovies=useSelector(selectAllComedyVideos)
    const documentryVideos=useSelector(selectAllDocumantryVideos)
    const trendingVideos = useSelector(selectAllTrendingVideos)
    const topRatedVideos = useSelector(selectAllTopRatedVideos)
    const netflixOriginals = useSelector(selectAllNetflixOriginals)
    const romanceMovies = useSelector(selectAllRomanticMovieVideos)


    const horrorError=useSelector(selectHorrorMovieError)
    const comedyError=useSelector(selecztComedyMovieError)
    const documantryError=useSelector(selectDocumentaryError)
    const trendingError = useSelector(selectTrendingError)
    const topRatedError = useSelector(selectTopRatedError)
    const netflixError = useSelector(selectNetflixError)
    const romaceError=useSelector(selectRomanticMovieError)
    //const latestMovieError = useSelector(selectLatestError)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTrending())
        dispatch(fetchTopRated())
        dispatch(fetchNetflixOriginals())
        dispatch(fetchdocumentary())
        dispatch(fetchcomedyMovies())
        dispatch(fetchHorrorMovie())
        dispatch(fetchRomanticMovie())
        //dispatch(fetchLatestVideos());
    }, [dispatch])


    let videoSections = []
    let component 
    if (!trendingError && !topRatedError && !netflixError && !documantryError && !horrorError && !comedyError && !romaceError) {
        videoSections.push({ title: "Netflix Originals", videos: netflixOriginals })
        videoSections.push({ title: "Trending", videos: trendingVideos })
        videoSections.push({ title: "Top Rated", videos: topRatedVideos })
        videoSections.push({ title: "Documantry", videos: documentryVideos})
        videoSections.push({ title: "Comedy", videos: comedyMovies})
        videoSections.push({ title: "Horror", videos: horrorMovie})
        videoSections.push({ title: "Romance", videos: romanceMovies})
        //videoSections.push({ title: "Latest Videos", videos: latestVideos });
        
        component = <BrowseContent videoSections={videoSections} />
    } else {
        component = (
            <ErrorPage errors={[trendingError, topRatedError, netflixError,documantryError,comedyError,horrorError,romaceError]} />
        )
    }

    return component
}

export default Home