// post put delete
import { gql } from "@apollo/client";

export const ADD_VACCINE = gql`
mutation AddVaccine($vaccinedata: VaccineInput, $username: String) {
    addVaccine(vaccinedata: $vaccinedata, username: $username) {
      _id
      username
      email
      vaccine {
        firstDoseProductName
        firstDoseDate
        firstDoseClinic
        secondDoseProductName
        secondDoseDate
        secondDoseClinic
      }
    }
  }`