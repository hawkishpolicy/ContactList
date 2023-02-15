import React from 'react'
import {ContactRow} from './';

const ContactList = (props) => {
  return (
  <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
        {
          props.contacts.map(contact => {
            console.log(contact)
            console.log(props.contacts)
            return <ContactRow contact = {contact} key = {`droid ID is: ${contact.id}`}></ContactRow>
          })
        }
      </tbody>
  </table>
);
}
    

export default ContactList

