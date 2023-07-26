
// import { addGroupAction } from "../../storage/toolkitReducer";
import { useDispatch, useSelector } from "react-redux";
import { toggleActiveStateAddInput } from '../../storage/toolkitReducer';


const AddGroup = () => {

  const dispatch = useDispatch();
  const allContacts = useSelector(state => state.toolkit.allContacts)

  const handleClick = () => {
    dispatch(toggleActiveStateAddInput());
  }

  return (
    <button className="btn" onClick={handleClick}>добавить группу</button>
  )
}

export default AddGroup;