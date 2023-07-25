

import './index.css'

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { changePropertyActiveContact } from '../../storage/toolkitReducer';

const ActiveContact = () => {

  const dispatch = useDispatch();
  const allContacts = useSelector(state => state.toolkit.allContacts);

  const [isEdit, setIsEdit] = useState(false); // стэйт показа инпута
  const [value, setValue] = useState('');      // стэйт инпута
  const [prop, setProp] = useState('');        // стэйт свойства сонтакта

  let activeGroupId;
  let contact;
  let activeContactId;

  allContacts.map(el => {
    if (el.isActive) {

      activeGroupId = el.id;
      el.contacts.map(cont => {
        if (cont.isActive) {

          contact = cont;
          activeContactId = cont.id;
        }
      })
    }
  })

  function handleClick(prop, value) {
    setIsEdit(!isEdit);
    setValue(value);
    setProp(prop);
  }

  function handleBlur() {
    setIsEdit(!isEdit); // убираю показ инпута

    dispatch(changePropertyActiveContact({ // смена данных контакта
      groupId: activeGroupId,
      contactId: activeContactId,
      prop: prop,
      value: value,
    }))
  }

  return (
    <div className='contact'>
      {contact ?
        <>
          <div className="prop" onClick={() => handleClick('surname', contact.surname)}><span className='property'>surmane: </span>{contact.surname}</div>
          <div className="prop" onClick={() => handleClick('name', contact.name)}><span className='property'>name: </span>{contact.name}</div>
          <div className="prop" onClick={() => handleClick('prof', contact.prof)}><span className='property'>profession: </span>{contact.prof}</div>
          <div className="prop" onClick={() => handleClick('phone', contact.phone)}><span className='property'>phone: </span>{contact.phone}</div>
        </>
        :
        ''}

      {!isEdit ?
        ''
        :
        <>
          <br />
          <span>{prop}</span>
          <input
            autoFocus
            value={value}
            onBlur={handleBlur}
            onChange={(e) => setValue(e.target.value)}
          />
          <br />
          <br />
          <button>save</button>
        </>
      }
    </div>
  )
}

export default ActiveContact;
