
import './index.css'

import { useSelector, useDispatch } from "react-redux";
import { changeActiveStateGroup } from '../../storage/toolkitReducer';

const ListGroups = () => {

  const dispatch = useDispatch()
  const allContacts = useSelector(state => state.toolkit.allContacts);

  const clickOnGroup = (id) => {
    dispatch(changeActiveStateGroup(id))
  }

  let res

  if (allContacts.length > 0) {
    res = allContacts.map(el =>
      <div className='row' key={el.id}>
        <div className={el.isActive ? 'active' : ''} onClick={() => clickOnGroup(el.id)}>
          {el.name}
        </div>
        <div>
          {el.contacts.length}
        </div>
      </div>)
  } else res = <div>список пуст</div>

  return (
    <>
      <div>{res}</div>
    </>
  )
}

export default ListGroups;