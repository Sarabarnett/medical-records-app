const router = require("express").Router()
const path = require("path")

router.get("/api/users", (req, res) => {
	const tempObj = {
		name: "Eric",
		address: "you don't get it"
	}
	res.json(tempObj)
})

router.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
module.exports = router



