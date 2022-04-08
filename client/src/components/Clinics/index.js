import React, { useState, Fragment, useEffect } from "react";
import "../../Clinic.css";
import { nanoid } from "nanoid";
import ReadOnlyRow from "../ReadOnlyRow";
import EditableRow from "../EditableRow";
import { GET_ME } from "../../utils/queries";
import { ADD_CLINIC } from "../../utils/mutations";
import { useQuery, useMutation } from "@apollo/client";
//import { Link } from 'react-router-dom';
//import  { Form } from 'react-bootstrap'

const Clinics = () => {
  const [contacts, setContacts] = useState("");
  const [addFormData, setAddFormData] = useState({
    clinicName: "",
    primaryDoctor: "",
    phoneNumber: "",
  });

  const [addClinic] = useMutation(ADD_CLINIC);

  const { data } = useQuery(GET_ME);
  const me = data?.me || [];
  console.log(data);
  //const loggedIn = Auth.loggedIn();

  const [editFormData, setEditFormData] = useState({
    clinicName: "",
    primaryDoctor: "",
    phoneNumber: "",
  });
  const [editContactId, setEditContactId] = useState(null);

  useEffect(() => {
    console.log("", me);
    // will fetch clinics from server/DB then put into state
    const clinicStorage = localStorage.getItem("clinics");
    if (!clinicStorage) {
      localStorage.setItem("clinics", JSON.stringify(data));
      setContacts(data);
    } else {
      setContacts(JSON.parse(clinicStorage));
    }
  }, []);

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
    try {
      const newContact = {
        id: nanoid(),
        clinicname: addFormData.clinicName,
        primaryDoctor: addFormData.primaryDoctor,
        phoneNumber: addFormData.phoneNumber,
      };
      const { data } = addClinic({
        variables: { ...newContact, username: me.username },
      });
    } catch (err) {
      console.log(err);
    }
    //const newContacts = [...contacts, newContact];
    // setContacts(newContacts);
    // const clinicStorage = JSON.parse(localStorage.getItem("clinics"));
    // clinicStorage.push(newContact);
    // localStorage.setItem("clinics", JSON.stringify(clinicStorage));
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      clinicName: editFormData.clinicName,
      primaryDoctor: editFormData.primaryDoctor,
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
      primaryDoctor: contact.doctor,
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
            {me.clinic ? (
              me.clinic.map((contact) => (
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
              ))
            ) : (
              <tr>No Data</tr>
            )}
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
          name="primaryDoctor"
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
