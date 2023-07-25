

import { useSelector, useDispatch } from "react-redux";
import { toggleStateIsAddContact } from "../../storage/toolkitReducer";

const AddContact = () => {

  const dispatch = useDispatch();
  const allContacts = useSelector(state => state.toolkit.allContacts);

  const handleClick = () => {
    dispatch(toggleStateIsAddContact());
  }

  return (
    <button
      onClick={handleClick}
      disabled={allContacts.length === 0}>
      добавить контакт в активную группу
    </button>
  )
}

export default AddContact;