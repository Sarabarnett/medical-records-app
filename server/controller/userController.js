const { User } = require("../models")

const userController = {
	getUsers: async function (req, res) {
		try {
			const userdata = await User.find()
			res.json(userdata)
		} catch (error) {
			res.status(500).json(error)
		}
	},
	createUser: async function (req, res) {
		try {
			const userdata = await User.create(req.body)
			res.json(userdata)
		} catch (error) {
			res.status(500).json(error)
		}

	},
	getUser: async function (req, res) {
		try {
			const userdata = await User.findById(req.params.userId)
			res.json(userdata)
		} catch (error) {
			res.status(500).json(error)
		}
	}

}

module.exports = userController