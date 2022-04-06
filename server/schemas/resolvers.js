const { AuthenticationError } = require("apollo-server-express");
const { User, Clinic } = require("../models");
// const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      return User.findOne(username);
    },
    clinics: async (parent, { username }) => {
      const params = username ? { username } : {};
      const clinicName = await Clinic.find(params).sort({ createdAt: -1 });
      return clinicName;
    },
    clinic: async (parent, { _id }) => {
      const oneClinic = await Clinic.findOne({ _id });
      return oneClinic;
    },
    // Vaccines: async (parent, { username }) => {
    //   const vaccine = await Vaccine.findOne;
    // },
  },
};

module.exports = resolvers;
