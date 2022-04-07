const { AuthenticationError } = require("apollo-server-express");
const { User, Clinic } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, { username }) => {
      if (context.user) {
        const userData = user.findOne({ _id: context.user.id })
        return userData
      }
      throw new AuthenticationError("Not logged in")
    },

    clinics: async (parent, { _id }) => {
      if (context.user) {
        const clinicName = await Clinic.find(params).sort({ createdAt: -1 });
        return clinicName;
      }

    },
    vaccine: async (parent, { _id }) => {
      return Vaccine.findOne({ _id })
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    addClinic: async (parent, args, context) => {
      // if (context.user) {
      const clinic = await Clinic.create({
        ...args,
        //      username: context.user.username,
      });

      await User.findOneAndUpdate(
        { username: args.username },
        { $push: { clinic: clinic._id } },
        { new: true }
      );

      return User;
      //  }

      //   throw new AuthenticationError("You need to be logged in!");
    },

    addVaccine: async (parent, args, context) => {
      if (context.user) {
        const vaccine = await Vaccines.create({ ...args, username: context.username })
    
        await User.findOneAndUpdate(
          { username: args.username },
          { $unset: { vaccine: '' } },
          { $push: { vaccine: args.vaccinedata } },
          { new: true }
        )
        return vaccineData
      }
    },
  },
};

module.exports = resolvers;
