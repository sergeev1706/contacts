import './App.css';

import ListGroups from './components/listGroups/ListGroups';
import AddGroupButton from './components/addGroupButton/AddGroupButton';
import SaveButton from './components/saveButton/SaveButton';
import ClearButton from './components/clearButton/ClearButton';
import AddContactButton from './components/addContactButton/AddContactButton';
import ActiveGroup from './components/activeGroup/ActiveGroup';
import ActiveContact from './components/activeContact/ActiveContact';

function App() {


  return (
    <div className='Add'>
      <div className='row'>
        <div className='block'>
          <ListGroups />
        </div>
        <div className='block'>
          <AddGroupButton />
          <AddContactButton />
          <SaveButton />
          <ClearButton />
        </div>
        <div className='block'>
          <ActiveGroup />
        </div>
        <div className='block'>
          <ActiveContact />
        </div>
      </div>
    </div>
  );
}

export default App;
