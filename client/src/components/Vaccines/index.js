import React, { useState } from "react";
import { Form, Button, Table } from "react-bootstrap";
import { ADD_VACCINE } from "../../utils/mutations";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ME } from "../../utils/queries";

//  user {
//     userName: 'John',
//     email: '',
//     vaccine: {
//         dob: '',
//         patientNumber:'',
//         firstName: '',
//         lastName; '',
//            firstDose: {
//                productName: 'pfizer',
//                date: 'mm/dd/yy',
//                clinicSite: '',
//            },
//secondDose: {
//                productName: 'pfizer',
//                date: 'mm/dd/yy',
//                clinicSite: '',
//     }
// }

const Vaccines = ({ user }) => {
  const [vaccineForm, setVaccineForm] = useState({
    patientNumber: "",
  });

  const [cardForm, setCardForm] = useState({});

  const { loading, data } = useQuery(GET_ME, {
    variables: { username: "joe" },
  });
  const me = data?.me || {};
  const [addVaccine, { error }] = useMutation(ADD_VACCINE);

  const handleChange = (event) => {
    setVaccineForm({ ...vaccineForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      setCardForm({ ...vaccineForm });
      const { data } = addVaccine({
        variables: { vaccinedata: vaccineForm, username: me.username },
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="vaccineContainer d-flex flex-wrap">
      <Form className="w-50 vaccine-form" onSubmit={handleSubmit}>
        <div className="d-flex">
          <Form.Group className="mb-3 mr-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              name="firstName"
              value={vaccineForm.firstName}
              placeholder="First Name"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              name="lastName"
              value={vaccineForm.lastName}
              placeholder="Last Name"
            />
          </Form.Group>
        </div>
        <div className="d-flex">
          <Form.Group className="mb-3 mr-3">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              onChange={handleChange}
              name="dob"
              value={vaccineForm.dob}
              placeholder="Date of Birth"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Patient Number</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              name="patientNumber"
              value={vaccineForm.patientNumber}
              placeholder="patient Number"
            />
          </Form.Group>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Vaccine</th>
              <th>Product Name</th>
              <th>Date</th>
              <th>Clinic Site</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>First Dose</td>
              <td>
                <Form.Control
                  type="text"
                  onChange={handleChange}
                  name="firstDoseProductName"
                  value={vaccineForm.firstDoseProductName}
                  placeholder="product Name"
                />
              </td>
              <td>
                {" "}
                <Form.Control
                  type="date"
                  onChange={handleChange}
                  name="firstDoseDate"
                  value={vaccineForm.firstDoseDate}
                  placeholder="choose date"
                />
              </td>
              <td>
                {" "}
                <Form.Control
                  type="text"
                  onChange={handleChange}
                  name="firstDoseClinic"
                  value={vaccineForm.firstDoseClinic}
                  placeholder="product Name"
                />
              </td>
            </tr>
            <tr>
              <td>Second Dose</td>
              <td>
                {" "}
                <Form.Control
                  type="text"
                  onChange={handleChange}
                  name="secondDoseProductName"
                  value={vaccineForm.secondDoseProductName}
                  placeholder="product Name"
                />
              </td>
              <td>
                {" "}
                <Form.Control
                  type="date"
                  onChange={handleChange}
                  name="secondDoseDate"
                  value={vaccineForm.secondDoseDate}
                  placeholder="choose date"
                />
              </td>
              <td>
                {" "}
                <Form.Control
                  type="text"
                  onChange={handleChange}
                  name="secondDoseClinic"
                  value={vaccineForm.secondDoseClinic}
                  placeholder="clinic"
                />
              </td>
            </tr>
          </tbody>
        </Table>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <div>
        {cardForm.firstName ? (
          <div>
            <div className="d-flex">
              <p>first name:{cardForm.firstName}</p>
              <p>last name:{cardForm.lastName}</p>
            </div>
            <div className="d-flex">
              <p>Date:{cardForm.dob}</p>
              <p>
                Patient Number:
                {cardForm.patientNumber ? cardForm.patientNumber : ""}
              </p>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Vaccine</th>
                  <th>Product Name</th>
                  <th>Date</th>
                  <th>Clinic Site</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>First dose</td>
                  <td>{cardForm.firstDoseProductName}</td>
                  <td>{cardForm.firstDoseDate}</td>
                  <td>{cardForm.firstDoseClinic}</td>
                </tr>
                <tr>
                  <td>Second Dose</td>
                  <td>{cardForm.secondDoseProductName}</td>
                  <td>{cardForm.secondDoseDate}</td>
                  <td>{cardForm.secondDoseClinic}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        ) : (
          <h1>no vaccine submitted</h1>
        )}
      </div>
    </div>
  );
};

export default Vaccines;
