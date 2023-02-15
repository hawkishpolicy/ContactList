import React from 'react'

const ContactList = (props) => {
  console.log(props)
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
            return <tr key = {`droid ID is: ${contact.id}`}>
              <td>{contact.name}</td>
              <td>{contact.phone}</td>
              <td>{contact.email}</td>
            </tr>;
          })
        }
      </tbody>
  </table>
);
}
    

export default ContactList

