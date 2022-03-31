import React from 'react'

const ReadOnlyRow = ({contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
    <td>{contact.clinicName}</td>
    <td>{contact.doctorName}</td>
    <td>{contact.phoneNumber}</td>
    <td>
    <button 
    type="button" 
    onClick={(event) => handleEditClick(event, contact)}
    >
        Edit
    </button>
    <button type="button" onClick={()=> handleDeleteClick(contact.id)}>Delete</button>
    </td>
</tr>
  )
}

export default ReadOnlyRow