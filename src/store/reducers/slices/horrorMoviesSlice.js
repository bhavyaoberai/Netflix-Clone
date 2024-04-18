import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import axios from 'baseAxios'
import API_KEY from './config'

export const horrorMovieAdapter = createEntityAdapter()

export const fetchHorrorMovie = createAsyncThunk('horrorMoviesSlice/fetchHorrorMovie',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `/discover/movie?api_key=${API_KEY}&with_genres=27`
            )
            return response.data.results
        } catch (error) {
            if (!error.response) {
                throw error
            }

            return rejectWithValue(error.response.data)
        }
    })

const horrorMoviesSlice = createSlice({
    name: 'horror',
    initialState: horrorMovieAdapter.getInitialState({ error: null }),
    extraReducers: {
        [fetchHorrorMovie.fulfilled]: (state, action) => {
            horrorMovieAdapter.upsertMany(state, action.payload)
        },

        [fetchHorrorMovie.rejected]: (state, action) => {
            if (action.payload) {
                state.error = action.payload.status_message
            } else {
                state.error = action.error
            }        }
    }
})

export const {
    selectAll: selectAllHorrorVideos,
} = horrorMovieAdapter.getSelectors(state => state.documantry)

export const selectHorrorMovieError = state => state.documantry.error

export default horrorMoviesSlice.reducer