import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectModalUserState = (state: RootState) => state.modalUserState
export const selectModalUserFields = createSelector(selectModalUserState, state => Object.entries(state).map(([name, value]) => ({name, value})))