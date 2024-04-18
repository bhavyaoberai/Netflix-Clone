import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import trendingReducer from './slices/trendingSlice'
import topRatedReducer from './slices/topratedSlice'
import netflixOriginalsReducer from './slices/netflixOriginalsSlice'
import moviesByGenresReducer from './slices/moviesByGenreSlice'
import tvByGenresReducer from './slices/tvByGenreSlice'
import latestVideoReducer from './slices/latestVideoSlice'
import documentaryReducer from './slices/documentariesSlice'
import comedyReducer from './slices/comedyMoviesSlice'
import romananceReducer from './slices/romanceMoviesSlice'
import latestReducer from './slices/latestVideoSlice' 

const store = configureStore({
    reducer: {
        trending: trendingReducer,
        toprated: topRatedReducer,
        netflixOriginals: netflixOriginalsReducer,
        moviesByGenre: moviesByGenresReducer,
        tvByGenre: tvByGenresReducer,
        latestVideos: latestVideoReducer,
        documantry: documentaryReducer,
        comedy:comedyReducer,
        romance:romananceReducer,
        latestVideos : latestReducer

    },
    // Clear this in production, as it is done by default 
    middleware: [...getDefaultMiddleware({ immutableCheck: false })]
})

export default store 
