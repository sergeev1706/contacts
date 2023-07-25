
import { useSelector } from "react-redux";

const SaveButton = () => {

  const allContacts = useSelector(state => state.toolkit.allContacts);

  const handleClick = () => {
    localStorage.setItem('allContacts', JSON.stringify(allContacts));
  }

  return (
    <button onClick={handleClick}>сохранить в localStorage</button>
  )
}

export default SaveButton;