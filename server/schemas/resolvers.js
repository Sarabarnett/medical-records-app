const { AuthenticationError } = require("apollo-server-express");
const { User, Clinic } = require("../models");
// const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      const userData = await User.findOne(username);
      return userData;
    },
    // clinics: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   const clinicName = await Clinic.find(params).sort({ createdAt: -1 });
    //   return clinicName;
    // },
    // clinic: async (parent, { _id }) => {
    //   const oneClinic = await Clinic.findOne({ _id });
    //   return oneClinic;
    // },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      // const token = signToken(user);

      return { user };
    },
    // login: async (parent, { email, password }) => {
    //   const user = await User.findOne({ email });

    //   if (!user) {
    //     throw new AuthenticationError("Incorrect credentials");
    //   }

    //   const correctPw = await user.isCorrectPassword(password);

    //   if (!correctPw) {
    //     throw new AuthenticationError("Incorrect credentials");
    //   }

    //   const token = signToken(user);
    //   return { token, user };
    // },
    addClinic: async (parent, args, context) => {
      if (context.user) {
        const clinic = await Clinic.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { clinic: clinic._id } },
          { new: true }
        );

        return User;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
