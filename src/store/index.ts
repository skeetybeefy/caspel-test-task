import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import usersReducer from '../slices/usersSlice.ts'
import modalUserReducer from '../slices/modalUserSlice.ts'
import searchQueriesReducer from '../slices/searchQueriesSlice.ts'

export const store = configureStore({
  reducer: {
    usersState: usersReducer,
    modalUserState: modalUserReducer,
    searchQueriesState: searchQueriesReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
