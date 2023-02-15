import React, {useState, useEffect} from 'react';
import dummyContacts from '../dummyData';
import {ContactList} from './'




const Main = () => {
  const [contacts, setContacts] = useState([])
  
const getContacts = async ()=>{
  try{
    const response = await fetch("http://jsonplace-univclone.herokuapp.com/users");
    const result = await response.json();

    setContacts(result);
  } catch(error){
    console.err(error);
  }
  }
  useEffect(() => {
    getContacts();
  }, []);

    
  
  

  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
        <ContactList contacts={contacts}> </ContactList>
      </div>
    </div>
  );
  }


export default Main;
