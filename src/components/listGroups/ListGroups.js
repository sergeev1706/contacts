
import './index.css'

import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { changeActiveStateGroup } from '../../storage/toolkitReducer';
import { addGroupAction } from '../../storage/toolkitReducer';
import { toggleActiveStateAddInput } from '../../storage/toolkitReducer';
import { removeGroupAction } from '../../storage/toolkitReducer';

const ListGroups = () => {

  const dispatch = useDispatch();
  const allContacts = useSelector(state => state.toolkit.allContacts);
  const addGroupInputIsactive = useSelector(state => state.toolkit.addGroupInputIsactive);

  const [value, setValue] = useState('');

  const clickOnGroup = (id) => {
    dispatch(changeActiveStateGroup(id));
  };

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleBlur = () => {
    if (value !== '') {
      dispatch(addGroupAction({
        id: Date.now(),
        name: value,
        isActive: allContacts.length > 0 ? false : true,
        contacts: [],
      }))
    }
    dispatch(toggleActiveStateAddInput());
    setValue('')
  }

  const removeGroup = (id) => {
    dispatch(removeGroupAction(id));
  }

  let res

  if (allContacts.length > 0) {
    res = allContacts.map(el =>
      <div className='row' key={el.id}>
        <div className={el.isActive ? 'active' : ''} onClick={() => clickOnGroup(el.id)}>
          {el.name}
        </div>
        <div>
          <button className='remove-btn' onClick={() => removeGroup(el.id)}>удалить</button>
        </div>
      </div>)
  } else res = <div>список пуст</div>

  return (
    <>
      <div>{res}</div>
      <div>
        {addGroupInputIsactive ?
          <>
            <p>добавлнгие группы</p>
            <input autoFocus value={value} onChange={handleChange} onBlur={handleBlur} />
          </>
          :
          ''
        }
      </div>
    </>
  )
}

export default ListGroups;