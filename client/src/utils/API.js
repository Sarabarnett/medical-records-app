const API = {
	getUsers: async function () {
		try {
			return fetch("/api/users").then((response) => {
				return response.json()
			}).then((data) => {
				return data
			})

		} catch (error) {
			console.log(error);
		}
	}
}

export default API