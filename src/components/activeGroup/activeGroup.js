
import './index.css'

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewContact } from '../../storage/toolkitReducer';

const ActiveGroup = () => {

    const dispatch = useDispatch();
    const allContacts = useSelector(state => state.toolkit.allContacts);

    let isActiveGroupName;
    let contactsList;

    allContacts.map(el => {
        if (el.isActive) {
            isActiveGroupName = el.name;
            contactsList = el.contacts;
        }
        return el;
    })

    function addContact() {
        dispatch(addNewContact({
            surname: 'surname',
            name: 'name',
            tel: '123',
            profession: 'profession',
            vk: 'vk',
        }))
    }
    

    return (
        <div>
            <button onClick={addContact}>добавить контакт</button>
            <div className='active'>
                {isActiveGroupName}
            </div>
            {contactsList.length > 0 ? 
                contactsList.map((el, ind) => <div key={ind}>{el.name}</div>)
                :
                <div>no contacts</div>
            }
        </div>
    );
}

export default ActiveGroup;
