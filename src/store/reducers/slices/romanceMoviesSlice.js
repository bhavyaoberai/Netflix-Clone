import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import axios from 'baseAxios'
import API_KEY from './config'

export const romanticMovieAdapter = createEntityAdapter()

export const fetchRomanticMovie = createAsyncThunk('romanceMoviesSlice/fetchRomanticMovie',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `/discover/movie?api_key=${API_KEY}&with_genres=10749`
            )
            return response.data.results
        } catch (error) {
            if (!error.response) {
                throw error
            }

            return rejectWithValue(error.response.data)
        }
    })

const romanceMoviesSlice = createSlice({
    name: 'romance',
    initialState: romanticMovieAdapter.getInitialState({ error: null }),
    extraReducers: {
        [fetchRomanticMovie.fulfilled]: (state, action) => {
            romanticMovieAdapter.upsertMany(state, action.payload)
        },

        [fetchRomanticMovie.rejected]: (state, action) => {
            if (action.payload) {
                state.error = action.payload.status_message
            } else {
                state.error = action.error
            }        }
    }
})

export const {
    selectAll: selectAllRomanticMovieVideos,
} = romanticMovieAdapter.getSelectors(state => state.romance)

export const selectRomanticMovieError = state => state.romance.error

export default romanceMoviesSlice.reducer