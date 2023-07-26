
import './index.css'

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContactAction } from "../../storage/toolkitReducer";
import { toggleStateIsAddContact } from "../../storage/toolkitReducer";
import { changeActiveStateContact } from "../../storage/toolkitReducer";
import { removeContactAction } from '../../storage/toolkitReducer';

const ActiveGroup = () => {

  const dispatch = useDispatch();
  const isAddContact = useSelector(state => state.toolkit.isAddContact);
  const allContacts = useSelector(state => state.toolkit.allContacts);

  // стэйты инпута
  const [nameValue, setNameValue] = useState('');
  const [surnameValue, setSurnameValue] = useState('');
  const [profValue, setProfValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');

  let isActiveGroupName;
  let contactsList;

  allContacts.map(el => {
    if (el.isActive) {
      isActiveGroupName = el.name;
      contactsList = el.contacts;
    }
    return el;
  })

  function handleClick(groupName, el) {
    dispatch(changeActiveStateContact({
      nameGroup: groupName,
      contact: el,
    }))
  }

  function removeContact(id) {
    dispatch(removeContactAction(id))
  }

  let result = (
    <>
      {isActiveGroupName ?
        <>
          <div className='active-group'>
            {isActiveGroupName ? isActiveGroupName : ''} <span> - контактов: </span> {contactsList.length}
          </div>
          <div>
            {contactsList ?
              contactsList.map(el =>
                <div
                  key={el.id}
                  className={el.isActive ? 'active-contact flex' : 'flex'}
                  onClick={() => handleClick(isActiveGroupName, el)}>
                  <div>{el.name} {el.surname}</div>
                  <button className='remove-btn' onClick={() => removeContact(el.id)}>удалить</button>
                </div>

              )
              :
              <div>no contacts</div>
            }
          </div>
        </>
        :
        <div></div>
      }
    </>
  )

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nameValue !== '' && surnameValue !== '') {
      dispatch(addContactAction({
        id: Date.now(),
        name: nameValue,
        surname: surnameValue,
        prof: profValue,
        phone: phoneValue,
        isActive: false,
      }))
    }

    dispatch(toggleStateIsAddContact());
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className='input-group'><span>name: </span><input autoFocus type="text" onChange={(e) => setNameValue(e.target.value)} /></div>
      <div className='input-group'><span>surn: </span><input type="text" onChange={(e) => setSurnameValue(e.target.value)} /></div>
      <div className='input-group'><span>prof: </span><input type="text" onChange={(e) => setProfValue(e.target.value)} /></div>
      <div className='input-group'><span>prof: </span><input type="text" onChange={(e) => setProfValue(e.target.value)} /></div>

      <button className='btn' type="submit">submit</button>
    </form>
  )

  return (
    <div>
      {isAddContact ? form : result}
    </div>
  )
}

export default ActiveGroup;