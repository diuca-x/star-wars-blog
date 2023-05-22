const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [
				
			],
			planets: [

			],
			vehicles: [

			],

			active : true,

			current: null,

			favorites: [

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
			

			detail_loadinator: (what,id) =>{				

				fetch(`https://www.swapi.tech/api/${what}/${id}`)
				.then(response => response.json())
				.then(result => {
					if(what == "people"){
						what = "characters"
					}
					let thing = { ...result.result.properties, img: `https://starwars-visualguide.com/assets/img/${what}/${id}.jpg`}
					setStore({current: thing})
				})
				.catch(err => console.error(err))

				

			},

			fav_agregator: (to_add) =>{
				const store = getStore()
				setStore({"favorites": [...store["favorites"],to_add]})
				
				

			},

			fav_deletinator: (to_delete) =>{
				console.log("todelete: "+to_delete.uid)
				const store = getStore()
				let filtered_store = store.favorites.filter(x=> x.uid != to_delete.uid)
				console.log(filtered_store)
				
				setStore({"favorites": filtered_store})
				
				
				console.log(getStore())
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
