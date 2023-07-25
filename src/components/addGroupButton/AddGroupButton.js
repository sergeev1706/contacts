
import { addGroupAction } from "../../storage/toolkitReducer";
import { useDispatch, useSelector } from "react-redux";

const AddGroup = () => {

  const dispatch = useDispatch();
  const allContacts = useSelector(state => state.toolkit.allContacts)

  const handleClick = () => {
    dispatch(addGroupAction({
      id: Date.now(),
      name: prompt(),
      isActive: allContacts.length > 0 ? false : true,
      contacts: [],
    }))
  }

  return (
    <button onClick={handleClick}>добавить группу</button>
  )
}

export default AddGroup;