import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '../types'

const initialState: User = {
  id: 0,
  name: '',
  birthdate: '',
  points: 0,
}

export const userSlice = createSlice({
  name: 'modalUserState',
  initialState,
  reducers: {
    setModalUser: (_state, action: PayloadAction<User>) => {
      return {...action.payload}
    },
    updateModalUser: (state, action: PayloadAction<Partial<User>>) => {
      return {...state, ...action.payload}
    },
    clearModalUser: () => {
      return initialState
    },
  },
})


export const { setModalUser, updateModalUser, clearModalUser } = userSlice.actions

export default userSlice.reducer
