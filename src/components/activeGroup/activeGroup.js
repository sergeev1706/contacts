
import './index.css'

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContactAction } from "../../storage/toolkitReducer";
import { toggleStateIsAddContact } from "../../storage/toolkitReducer";
import { changeActiveStateContact } from "../../storage/toolkitReducer";

const ActiveGroup = () => {

  const dispatch = useDispatch();
  const isAddContact = useSelector(state => state.toolkit.isAddContact);
  const allContacts = useSelector(state => state.toolkit.allContacts);

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

  let result = (
    <>
      <div className='active'>
        {/* название активной группы */}
        {isActiveGroupName ? isActiveGroupName : ''} <span> - контактов: </span> {contactsList.length}
      </div>
      <div>
        {/* список контактов активной группы */}
        {contactsList ?
          contactsList.map(el =>
            <div
              key={el.id}
              className={el.isActive ? 'active-contact' : ''}
              onClick={() => handleClick(isActiveGroupName, el)}>
              {el.name} {el.surname}
            </div>)
          :
          <div>no contacts</div>
        }
      </div>
    </>
  )

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addContactAction({
      id: Date.now(),
      name: nameValue,
      surname: surnameValue,
      prof: profValue,
      phone: phoneValue,
      isActive: false,
    }))

    dispatch(toggleStateIsAddContact());
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <span>name: </span><input autoFocus type="text" onChange={(e) => setNameValue(e.target.value)} /><br />
      <span>surn: </span><input type="text" onChange={(e) => setSurnameValue(e.target.value)} /><br />
      <span>prof: </span><input type="text" onChange={(e) => setProfValue(e.target.value)} /><br />
      <span>phon: </span><input type="text" onChange={(e) => setPhoneValue(e.target.value)} /><br />
      <br />
      <button type="submit">submit</button>
    </form>
  )

  return (
    <div>
      {isAddContact ? form : result}
    </div>
  )
}

export default ActiveGroup;