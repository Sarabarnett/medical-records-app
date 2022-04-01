import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Form, Button, Table } from 'react-bootstrap';

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
        firstName: '',
        lastName: '',
        dob: '',
        patientNumber: '',
        firstDoseProductName: '',
        firstDoseDate: '',
        firstDoseClinic: '',
        secondDoseProductName: '',
        secondDoseDate: '',
        secondDoseClinic: '',
    });

    const handleChange = (event) => {
        setVaccineForm({ ...vaccineForm, [event.target.name]: event.target.value })

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // format request body
        // send POST/PUT request
        // ONce response comes back request updated user info

    }


    return (

        <div className="vaccineContainer d-flex flex-wrap">
            <Form className="w-50 vaccine-form" onSubmit={handleSubmit}>
                <div className="d-flex" >
                    <Form.Group className="mb-3 mr-3" >
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" onChange={handleChange} name="firstName" value={vaccineForm.firstName} placeholder="First Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" onChange={handleChange} name="lastName" value={vaccineForm.lastName} placeholder="Last Name" />
                    </Form.Group>
                </div>
                <div className="d-flex">
                    <Form.Group className="mb-3 mr-3" >
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" onChange={handleChange} name="dob" value={vaccineForm.dob} placeholder="Date of Birth" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Patient Number</Form.Label>
                        <Form.Control type="text" onChange={handleChange} name="patientNumber" value={vaccineForm.patientNumber} placeholder="patient Number" />
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
                                    type="text" onChange={handleChange} name="firstDoseProductName" value={vaccineForm.firstDoseProductName} placeholder="product Name" />
                            </td>
                            <td> <Form.Control
                                type="date" onChange={handleChange} name="firstDoseDate" value={vaccineForm.firstDoseDate} placeholder="choose date" /></td>
                            <td> <Form.Control
                                type="text" onChange={handleChange} name="firstDoseClinic" value={vaccineForm.firstDoseClinic} placeholder="product Name" /></td>
                        </tr>
                        <tr>
                            <td>Second Dose</td>
                            <td> <Form.Control
                                type="text" onChange={handleChange} name="secondDoseProductName" value={vaccineForm.secondDoseProductName} placeholder="product Name" /></td>
                            <td> <Form.Control
                                type="date" onChange={handleChange} name="secondDoseDate" value={vaccineForm.secondDoseDate} placeholder="choose date" /></td>
                            <td> <Form.Control
                                type="text" onChange={handleChange} name="secondDoseClinic" value={vaccineForm.secondDoseClinic} placeholder="clinic" /></td>
                        </tr>
                    </tbody>
                </Table>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <div>
                {user.vaccine.firstName ? (
                    <div>
                        <div className="d-flex">
                            <p>first name:{user.vaccine.firstName}</p>
                            <p>last name:{user.vaccine.lastName}</p>
                        </div>
                        <div className="d-flex">
                            <p>Date:{user.vaccine.dob}</p>
                            <p>Patient Number:{user.vaccine.patientNumber ? user.vaccine.patientNumber : ""}</p>
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
                                    <td>{user.vaccine.firstDose.productName}</td>
                                    <td>{user.vaccine.firstDose.date}</td>
                                    <td>{user.vaccine.firstDose.clinic}</td>
                                </tr>
                                <tr>
                                    <td>Second Dose</td>
                                    <td>{user.vaccine.secondDose.productName}</td>
                                    <td>{user.vaccine.secondDose.date}</td>
                                    <td>{user.vaccine.secondDose.clinic}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                ) : <h1>no vaccine submitted</h1>}
            </div>
        </div>

    )


};

export default Vaccines;