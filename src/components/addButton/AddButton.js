

import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addNewGroup } from '../../storage/toolkitReducer';

const AddButton = () => {

    const dispatch = useDispatch();
    const allContacts = useSelector(state => state.toolkit.allContacts)


    function addGroup() {
        dispatch(addNewGroup({
            id: Date.now(),
            name: prompt(),
            isActive: allContacts.length > 0 ? false : true,
            contacts: [],
        }))
    }

    return (
        <button onClick={addGroup}>добавить группу</button>
    );
}

export default AddButton;
