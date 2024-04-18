import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import axios from 'baseAxios'
import API_KEY from './config'

export const comedyAdapter = createEntityAdapter()

export const fetchcomedyMovies = createAsyncThunk('comedyMoviesSlice/fetchcomedyMovies',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `/discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_networks=213&include_null_first_air_dates=false`
            )
            return response.data.results
        } catch (error) {
            if (!error.response) {
                throw error
            }

            return rejectWithValue(error.response.data)
        }
    })

const comedyMoviesSlice = createSlice({
    name: 'comedy',
    initialState: comedyAdapter.getInitialState({ error: null }),
    extraReducers: {
        [fetchcomedyMovies.fulfilled]: (state, action) => {
            comedyAdapter.upsertMany(state, action.payload)
        },

        [fetchcomedyMovies.rejected]: (state, action) => {
            if (action.payload) {
                state.error = action.payload.status_message
            } else {
                state.error = action.error
            }        }
    }
})

export const {
    selectAll: selectAllComedyVideos,
} = comedyAdapter.getSelectors(state => state.documantry)

export const selecztComedyMovieError = state => state.documantry.error

export default comedyMoviesSlice.reducer
