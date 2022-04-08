import React, { useState } from "react";
import { Form,  Table } from "react-bootstrap";
import { ADD_VACCINE } from "../../utils/mutations";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ME } from "../../utils/queries";
 //import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
 import Button from '@mui/material/Button';
//import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';

// let theme = createTheme({
//   palette: {
//     primary: {
//       main: '#28D5CF',
//     },
//     secondary: {
//       main: '#F12B95',
//     },
//     tertiary: {
//       main: '#F7EA34',
//     },
//     quaternary: {
//       main: '#F89514'
//     },
//     quinary: {
//       main: '#607D8B',
//     },
//   },
//   typography: {
//     fontFamily: ["Permanent Marker", "cursive", "Acme", "sans-serif"],
//   },
// }); 


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
    //<ThemeProvider theme={theme}>
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
          <Button
             sx={{
                m: 2,
                color: "white",
                fontSize: 28,
                fontWeight: "400",
                minWidth: "100px",
                fontFamily: "Acme"
              }}
              variant="contained"
              color="primary"
              size="large"
          >
          Submit
          </Button>
        </Form>
      </div>
    //</ThemeProvider>
  );
};

export default Vaccines;
