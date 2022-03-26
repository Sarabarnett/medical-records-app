const { Schema, model } = require("mongoose");


const userSchema = new Schema({
	username: {
		type: String,
		unique: true,
		trim: true,
		allowNull: false
	},
	firstName: {
		type: String,
		trim: true,
		allowNull: false
	}
})

const User = model('user', userSchema)

module.exports = User