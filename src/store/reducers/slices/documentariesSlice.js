import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import axios from 'baseAxios'
import API_KEY from './config'

export const documentaryAdapter = createEntityAdapter()

export const fetchdocumentary = createAsyncThunk('documentariesSlice/fetchdocumentary',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `/discover/movie?api_key=${API_KEY}&with_genres=99`
            )
            return response.data.results
        } catch (error) {
            if (!error.response) {
                throw error
            }

            return rejectWithValue(error.response.data)
        }
    })

const documentariesSlice = createSlice({
    name: 'documantry',
    initialState: documentaryAdapter.getInitialState({ error: null }),
    extraReducers: {
        [fetchdocumentary.fulfilled]: (state, action) => {
            documentaryAdapter.upsertMany(state, action.payload)
        },

        [fetchdocumentary.rejected]: (state, action) => {
            if (action.payload) {
                state.error = action.payload.status_message
            } else {
                state.error = action.error
            }        }
    }
})

export const {
    selectAll: selectAllDocumantryVideos,
} = documentaryAdapter.getSelectors(state => state.documantry)

export const selectDocumentaryError = state => state.documantry.error

export default documentariesSlice.reducer
