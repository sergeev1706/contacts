
import { useSelector } from "react-redux";

const SaveButton = () => {

  const allContacts = useSelector(state => state.toolkit.allContacts);

  const handleClick = () => {
    localStorage.setItem('allContacts', JSON.stringify(allContacts));
  }

  return (
    <button className="btn" onClick={handleClick}>сохранить в localStorage</button>
  )
}

export default SaveButton;