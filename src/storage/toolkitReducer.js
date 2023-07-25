

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
                [{
                    id: 111111,
                    name: 'group1',
                    isActive: true,
                    contacts: [{
                        id: 222222,
                        name: 'name1',
                        surname: 'surname1',
                        prof: 'prof1',
                        phone: '123 - 123',
                        isActive: true,
                    }]
                }],
    },
    reducers: {
        addGroupAction(state, action) {
            state.allContacts.push(action.payload);
        },
        changeActiveStateGroup(state, action) {
            state.allContacts.map(el => el.id === action.payload ? el.isActive = true : el.isActive = false);
        },
        toggleStateIsAddContact(state) {
            state.isAddContact = !state.isAddContact;
        },
        addContactAction(state, action) {
            state.allContacts.map(el => el.isActive ? el.contacts.push(action.payload) : el);
        },
        changeActiveStateContact(state, action) {
            state.allContacts.map(el => {
                if (el.name === action.payload.nameGroup) {
                    el.contacts.map(cont => cont.id === action.payload.contact.id ? cont.isActive = true : cont.isActive = false);
                }
            })
        },
        changePropertyActiveContact(state, action) {
            state.allContacts.map(el => {
                if (el.id === action.payload.groupId) {
                    el.contacts.map(cont => {
                        if (cont.id === action.payload.contactId) {
                            cont[action.payload.prop] = action.payload.value;
                        }
                    })
                }
            })
        }
    }
})

export default toolkitReducer.reducer

export const {
    addGroupAction,
    changeActiveStateGroup,
    toggleStateIsAddContact,
    addContactAction,
    changeActiveStateContact,
    changePropertyActiveContact,
} = toolkitReducer.actions