import React from 'react';
import ContactList from './Containers/ContactList'
import './App.css';
//import { useSelector, useDispatch} from 'react-redux'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Lista de contactos</p>
        <ContactList/>
      </header>
    </div>
  );
}

export default App;
