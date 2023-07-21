import './App.css';

import AddButton from './components/addButton/AddButton';
import SaveButton from './components/saveButton/SaveButton';
import ClearButton from './components/clearButton/ClearButton';
import ListGroups from './components/listGroups/ListGroups';
import ActiveGroup from './components/activeGroup/activeGroup';

function App() {

  return (
    <div className='Add'>
      <div className='block'>
        <div className='card'>
          <ListGroups />
        </div>
        <div className='card'>
          <AddButton />
          <SaveButton />
          <ClearButton />
        </div>
      </div>
      <div className='block'>
        <ActiveGroup />
      </div>
      <div className='block'>
        карточка контакта
      </div>
      
    </div>
  );
}

export default App;
