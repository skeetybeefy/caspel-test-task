import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface SearchQueriesState {
  name: string,
  birthdate: string,
  points: string,
}

const initialState: SearchQueriesState = {
  name: '',
  birthdate: '',
  points: ''
}

export const searchQueriesSlice = createSlice({
  name: 'searchQueryState',
  initialState,
  reducers: {
    setNameQuery: (state, action: PayloadAction<SearchQueriesState['name']>) => {
      return {...state, name: action.payload}
    },
    setBirthdateQuery: (state, action: PayloadAction<SearchQueriesState['birthdate']>) => {
      return {...state, birthdate: action.payload}
    },
    setPointsQuery: (state, action: PayloadAction<SearchQueriesState['points']>) => {
      return {...state, points: action.payload}
    }
  },
})


export const { setNameQuery, setBirthdateQuery, setPointsQuery } = searchQueriesSlice.actions

export default searchQueriesSlice.reducer
