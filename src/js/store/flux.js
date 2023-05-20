const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [
				
			],
			planets: [

			],
			vehicles: [

			]
		},
		actions: {
			
			loadSomeData: (response,where) => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
					
				*/
				const store = getStore()
				setStore({[where]: [...store[where],response]})
				
				
			},

			set_url: () => {
				const store = getStore()
				
				let pep = store.people.map(char => {
					char.img = `https://starwars-visualguide.com/assets/img/characters/${char.uid}.jpg`
					console.log(store)
									
				})
				
				
 			},



			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
