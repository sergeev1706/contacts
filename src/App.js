import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, addContact } from './storage/toolkitReducer';

function App() {

  const dispatch = useDispatch()
  const allContacts = useSelector(state => state.toolkit.allContacts)
  const count = useSelector(state => state.toolkit.count)

  return (
    <div>
      {count}
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(addContact(prompt()))}>add contact</button>
      {allContacts.length > 0 ? 
        allContacts.map((el, ind) => <div key={ind}>{el}</div>)
        : 
        <div></div> 
      }
    </div>
  );
}

export default App;
