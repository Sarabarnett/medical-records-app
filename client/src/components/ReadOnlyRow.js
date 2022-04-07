import React from 'react'

const ReadOnlyRow = ({contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
    <td>{contact.clinicname}</td>
    <td>{contact.primaryDoctor}</td>
    <td>{contact.phoneNumber}</td> 
    <td>
    <button 
    type="button" 
    onClick={(event) => handleEditClick(event, contact)}
    >
        Edit
    </button>
    <button type="button" onClick={()=> handleDeleteClick(contact._id)}>Delete</button>
    </td>
</tr>
  )
}

export default ReadOnlyRow