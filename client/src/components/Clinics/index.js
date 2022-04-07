import React, { useState, Fragment, useEffect } from "react";
import "../../Clinic.css";
import data from "../../mock-data.json";
import { nanoid } from "nanoid";
import ReadOnlyRow from "../ReadOnlyRow";
import EditableRow from "../EditableRow";
import {GET_CLINICS} from "../../utils/queries"
import {useQuery} from "@apollo/client"
//import { Link } from 'react-router-dom';
//import  { Form } from 'react-bootstrap'

const Clinics = () => {
  const [contacts, setContacts] = useState('');
  const [addFormData, setAddFormData] = useState({
    clinicName: "",
    doctorName: "",
    phoneNumber: "",
  });

const {loading, error, data } = useQuery(GET_CLINICS, {variables: {username:"joe"}});
console.log("clinicdata", data)



  const [editFormData, setEditFormData] = useState({
    clinicName: "",
    doctorName: "",
    phoneNumber: "",
  });
  const [editContactId, setEditContactId] = useState(null);

useEffect(() => {
// will fetch clinics from server/DB then put into state
const clinicStorage = localStorage.getItem('clinics')
if (!clinicStorage) {
    localStorage.setItem('clinics', JSON.stringify(data))
    setContacts(data);
} else {
    setContacts(JSON.parse(clinicStorage))
}
},[])


  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      clinicName: addFormData.clinicName,
      doctorName: addFormData.doctorName,
      phoneNumber: addFormData.phoneNumber,
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    const clinicStorage = JSON.parse(localStorage.getItem('clinics'))
    clinicStorage.push(newContact)
    localStorage.setItem('clinics', JSON.stringify(clinicStorage));
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      clinicName: editFormData.clinicName,
      doctorName: editFormData.doctorName,
      phoneNumber: editFormData.phoneNumber,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex(
      (contact) => contact.id === editedContact.id
    );

    newContacts[index] = editedContact;
    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      clinicName: contact.clinicName,
      doctorName: contact.doctor,
      phoneNumber: contact.phoneNumber,
    };
    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Clinic</th>
              <th>Doctor</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data && data.clinics.map((contact) => (
              <Fragment>
                {editContactId === contact._id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add</h2>
      <form className="inputClinic" onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="clinicName"
          required="required"
          placeholder="Enter Clinic"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="doctorName"
          required="required"
          placeholder="Enter Doctor"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter Phone #"
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Clinics;
