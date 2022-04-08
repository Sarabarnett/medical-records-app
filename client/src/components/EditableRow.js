import React from 'react'

export const EditableRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
  console.log('ddd', editFormData)
  return (
    <tr>
        <td>
            <input type="text" 
            required="required"
             placeholder="Enter a Clinic"
            name="clinicname"
            value={editFormData.clinicname}
            onChange={handleEditFormChange}
            />
        </td>
        <td>
        <input type="text" 
            required="required"
             placeholder="Enter a Doctor"
            name="primaryDoctor"
            value={editFormData.primaryDoctor}
            onChange={handleEditFormChange}
            />
        </td>
        <td> <input type="text" 
        required="required"
         placeholder="Enter a Phone #"
        name="phoneNumber"
        value={editFormData.phoneNumber}
        onChange={handleEditFormChange}
        />
        </td>
        <td>
            <button type="submit">Save</button>
            <button type="button" onClick={handleCancelClick}>Cancel</button>
        </td>
    </tr>
  )
}

export default EditableRow;