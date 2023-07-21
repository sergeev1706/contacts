

import { createSlice } from "@reduxjs/toolkit"; 

const toolkitReducer = createSlice({
    name: 'toolkit',
    initialState: {
        count: 0,
        allContacts: 
            JSON.parse(localStorage.getItem('allContacts')) 
            ? 
            JSON.parse(localStorage.getItem('allContacts')) 
            : 
            []
    },
    reducers: {
        addNewGroup(state, action) {
            state.allContacts.push(action.payload)
        },
        removeActiveState(state) {
            state.allContacts.map(el => el.isActive ? el.isActive = false : el)
        },
        addActiveState(state, action) {
            state.allContacts.map(el => el.id === action.payload ? el.isActive = true : el)
        },
        addNewContact(state, action) {
            state.allContacts.map(el => el.isActive ? el.contacts.push(action.payload) : el)
        }
    }
})

export default toolkitReducer.reducer

export const { addNewGroup,
    removeActiveState,
    addNewContact,
    addActiveState } = toolkitReducer.actions