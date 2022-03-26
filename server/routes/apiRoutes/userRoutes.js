const router = require("express").Router()
const { getUsers, createUser, getUser } = require("../../controller/userController")


router.route("/")
	.get(getUsers)
	.post(createUser)

router.route("/:userId")
	.get(getUser)
	.put()
	.delete()

module.exports = router