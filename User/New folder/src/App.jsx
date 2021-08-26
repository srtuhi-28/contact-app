import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header.jsx';
import Input from './Components/Input.jsx';
import Output from './Components/Output.jsx';

function App() {
  const LOCAL = "contacts";
  const [contacts, setContacts] = useState([]);
  const addOn = (contact) => {
    setContacts([...contacts, contact]);
  }

  useEffect(()=>{
    const ret = JSON.parse(localStorage.getItem(LOCAL));
    if(ret) setContacts(ret);
  },[]);
  
  useEffect(()=>{
    localStorage.setItem(LOCAL, JSON.stringify(contacts));
  },[contacts]);

  
  return (
    <div className="App">
      <Header></Header>
      <Input addOn={addOn}></Input>
      <Output contacts={contacts}></Output>
    </div>
  );
}

export default App;
