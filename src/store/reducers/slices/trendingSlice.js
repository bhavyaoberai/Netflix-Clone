import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import axios from 'baseAxios'
import API_KEY from './config'

export const trendingAdapter = createEntityAdapter()

export const fetchTrending = createAsyncThunk('trendingSlice/fetchTrending',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `trending/all/week?api_key=${API_KEY}&language=en-US`
            )
            return response.data.results
        } catch (error) {
            if (!error.response) {
                throw error
            }

            return rejectWithValue(error.response.data)
        }
    })

const trendingSlice = createSlice({
    name: 'trending',
    initialState: trendingAdapter.getInitialState({ error: null }),
    reducers: {},
    extraReducers: {
        [fetchTrending.fulfilled]: (state, action) => {
            trendingAdapter.upsertMany(state, action.payload)
        },

        [fetchTrending.rejected]: (state, action) => {
            if (action.payload) {
                state.error = action.payload.status_message
            } else {
                state.error = action.error
            }
        }
    }
})

export const {
    selectAll: selectAllTrendingVideos,
} = trendingAdapter.getSelectors(state => state.trending)

export const selectTrendingError = state => state.trending.error

export default trendingSlice.reducer
