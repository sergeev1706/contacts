

import { createSlice } from "@reduxjs/toolkit"; 

const toolkitReducer = createSlice({
    name: 'toolkit',
    initialState: {
        count: 0,
        allContacts: [],
    },
    reducers: {
        increment(state) {
            state.count = state.count + 1
        },
        decrement(state) {
            state.count = state.count - 1
        },
        addContact(state, action) {
            state.allContacts.push(action.payload)
        }
    }
})

export default toolkitReducer.reducer

export const { increment, decrement, addContact } = toolkitReducer.actions