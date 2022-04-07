import React, { useState } from "react";
import { Form, Button, Table } from "react-bootstrap";
import { ADD_VACCINE } from "../../utils/mutations";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ME } from "../../utils/queries";

const Vaccines = () => {
  const [queryValuesText, setText] = useState("");
  const addVaccine = useMutation(ADD_VACCINE);

  const handleChange = (event) => {};

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addVaccine({
        variables: {
          //  _id
          queryValuesText,
        },
      });
      // Clear all the forms formValues
      setText("");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="vaccineContainer d-flex flex-wrap">
      <Form className="w-50 vaccine-form" onSubmit={handleSubmit}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Vaccine</th>
              <th>Administered Data</th>
              <th>Clinic Site</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Please fill out this form out so we can submit this to your
                account.
              </td>
              <td>
                <Form.Control
                  type="text"
                  name="vaccineName"
                  value={queryValuesText}
                  placeholder="Name of the Vaccine"
                />
              </td>
              <td>
                <Form.Control
                  type="date"
                  name="administeredDate"
                  value={queryValuesText}
                  placeholder="When was this vaccine given to you?"
                />
              </td>
              <td>
                <Form.Control
                  type="text"
                  name="location"
                  value={queryValuesText}
                  placeholder="What clinic did you recieve this vaccine at?"
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
        ? (
        <div>
          <Table></Table>
        </div>
        ) : (<h1>Loading vaccines... </h1>
      </div>
    </div>
  );
};

export default Vaccines;
