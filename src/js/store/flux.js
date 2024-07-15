const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase: 'https://www.swapi.tech/api',
			people: [],
			vehicles: [],
			planets: [],
			favorites: []
		},
		actions: {
			getObjectbyID: async (dataUrl) => {
				try {
					let response = await fetch(`${dataUrl}`)
					let data = await response.json()

					if (response.ok) {
						return data;
					} else {
						console.log(`Something bad happened at loolapalloza and ${data}`)
					}
				} catch (error) {
					console.log(error);
				}
			},

			getAllPeople: async () => {
				try {
					let response = await fetch(`${getStore().urlBase}/people`)
					let data = await response.json()

					if (response.ok) {
						let peopleInPage = await Promise.all(
							data.results.map(async (item) => {
								let dataUrl = item.url;
								return await getActions().getObjectbyID(dataUrl);
							})
						);
						setStore({ people: peopleInPage });
					} else {
						console.log(`Respuesta de la funcion getAllPeople: ${data}, ${response}`)
					}

				} catch (error) {
					console.log("Error trying to bring back the info: ", error)
				}
			},

			getAllVehicles: async () => {
				try {
					let response = await fetch(`${getStore().urlBase}/vehicles`)
					let data = await response.json()

					if (response.ok) {
						let vehicleInPage = await Promise.all(
							data.results.map(async (item) => {
								let dataUrl = item.url;
								return await getActions().getObjectbyID(dataUrl);
							})
						);
						setStore({ vehicles: vehicleInPage });
					} else {
						console.log(`Respuesta de la funcion getAllVehicles: ${data}, ${response}`)
					}

				} catch (error) {
					console.log("Error trying to bring back the info: ", error)
				}
			},

			getAllPlanets: async () => {
				try {
					let response = await fetch(`${getStore().urlBase}/planets`)
					let data = await response.json()

					if (response.ok) {
						let planetInPage = await Promise.all(
							data.results.map(async (item) => {
								let dataUrl = item.url;
								return await getActions().getObjectbyID(dataUrl);
							})
						);
						setStore({ planets: planetInPage });
					} else {
						console.log(`Respuesta de la funcion getAllPlanets: ${data}, ${response}`)
					}

				} catch (error) {
					console.log("Error trying to bring back the info: ", error)
				}
			},
			modFavorites: (fav) => {

				let store = getStore();
				let exists = store.favorites.some((item) => item.result._id == fav.result._id)

				if (exists) {
					let newFav = store.favorites.filter((item) => item.result._id != fav.result._id)
					setStore({
						favorites: newFav
					})

				} else {
					setStore({
						favorites: [...store.favorites, fav]
					})

				}
			},
		}
	};
};

export default getState;
