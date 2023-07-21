
import './index.css'

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeActiveState, addActiveState } from '../../storage/toolkitReducer';

const ListGroups = () => {

    const dispatch = useDispatch()
    const allContacts = useSelector(state => state.toolkit.allContacts);

    function getStatus(id) {
        // удалить isActive у прежнего
        dispatch(removeActiveState())
        // присвоить isActive новому
        dispatch(addActiveState(id))
    }

    let res = allContacts.length > 0 ?
        allContacts.map(el => 
        <div key={el.id} className='row'>
            <div className={el.isActive ? 'active' : ''}
                onClick={() => getStatus(el.id)}
                >{el.name}</div>
            <div>{el.contacts.length}</div>
        </div>)
        :
        <div>
            список групп
        </div>

    


    return (
        <div>{res}</div>
    );
}

export default ListGroups;
