const { AuthenticationError } = require("apollo-server-express");
const { User, Clinic, Vaccines } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      console.log(context.user)
      if (context.user) {
        const userData = User.findOne({ _id: context.user._id })
        .populate("clinic")
        .populate("vaccine");
        

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },

    clinics: async (parent, { username }) => {
      const params = username ? { username } : {};
      const clinics = await Clinic.find(params);
      return clinics;
    },

    vaccine: async (parent, { username }) => {
      const params = username ? { username } : {};
      const vaccine = await Vaccines.find(params);
      return vaccine;
    },
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
        const clinic = await Clinic.create(
          // ...args,
          // username: context.user.username,
          args
        );

        const user = await User.findOneAndUpdate(
          { username: args.username },
          { $push: { clinic: clinic._id } },
          { new: true }
        ).populate('clinic')
        ;
        
console.log('dddd', user)
        return user;
     // }

    //  throw new AuthenticationError("You need to be logged in!");
    },

    addVaccine: async (parent, args, context) => {
     // if (context.user) {
        const vaccine = await Vaccines.create(
        //  ...args,
      //    username: context.user.username,
      args
        );

        await User.findOneAndUpdate(
          { username: args.username },
          { $push: { vaccine: vaccine._id } },
          { new: true }
        );
        return User;
     // }
     // throw new AuthenticationError("You need to be logged in!");
    },
  },
};
module.exports = resolvers;
