

import React from 'react';
import { useSelector } from 'react-redux';

const SaveButton = () => {

    const allContacts = useSelector(state => state.toolkit.allContacts)

    function saveData() {
        localStorage.setItem('allContacts', JSON.stringify(allContacts));
    }

    return (
        <button onClick={saveData}>сохранить данные</button>
    );
}

export default SaveButton;
