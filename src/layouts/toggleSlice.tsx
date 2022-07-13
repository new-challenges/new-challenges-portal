import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface ToggleState {
    value: boolean
}

const initialState: ToggleState = {
    value: true,
}

export const toggleSlice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        toggleMenu: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value = !state.value
        }
    },
})

export const { toggleMenu } = toggleSlice.actions

export default toggleSlice.reducer