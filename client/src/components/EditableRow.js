import React from 'react'

export const EditableRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
  return (
    <tr>
        <td>
            <input type="text" 
            required="required"
             placeholder="Enter a Clinic"
            name="clinicName"
            value={editFormData.clinicName}
            onChange={handleEditFormChange}
            ></input>
        </td>
        <td>
        <input type="text" 
            required="required"
             placeholder="Enter a Doctor"
            name="doctorName"
            value={editFormData.doctorName}
            onChange={handleEditFormChange}
            ></input>
        </td>
        <td> <input type="text" 
        required="required"
         placeholder="Enter a Phone #"
        name="phoneNumber"
        value={editFormData.phoneNumber}
        onChange={handleEditFormChange}
        ></input>
        </td>
        <td>
            <button type="submit">Save</button>
            <button type="button" onClick={handleCancelClick}>Cancel</button>
        </td>
    </tr>
  )
}

export default EditableRow;