import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '../types'

export interface UsersState {
  users: Array<User>
}

const initialState: UsersState = {
  users: [
    {
      id: 1,
      name: "Андрей", 
      birthdate: new Date().toISOString().split("T")[0],
      points: 100
    },
    {
      id: 2,
      name: "Алеша", 
      birthdate: new Date().toISOString().split("T")[0],
      points: 150
    },
    {
      id: 3,
      name: "Игорь", 
      birthdate: new Date().toISOString().split("T")[0],
      points: 130
    },
  ]
}

export const userSlice = createSlice({
  name: 'usersState',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<Omit<User, 'id'>>) => {
      state.users.push({...action.payload, id: state.users.length + 1})
      return state
    },
    removeUser: (state, action: PayloadAction<User['id']>) => {
      const userIndex = state.users.findIndex(user => user.id === action.payload)
      state.users.splice(userIndex, 1)
      return state
    },
    editUser: (state, action: PayloadAction<User>) => {
      const userIndex = state.users.findIndex(user => user.id === action.payload.id)
      state.users[userIndex] = {...action.payload}
      return state
    },
  },
})


export const { addUser, removeUser, editUser } = userSlice.actions

export default userSlice.reducer
