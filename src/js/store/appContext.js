import React, { useState, useEffect, useContext } from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
const injectContext = PassedComponent => {
	

	const StoreWrapper = props => {
		//this will be passed as the contenxt value
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
			/**
			 * EDIT THIS!
			 * This function is the equivalent to "window.onLoad", it only runs once on the entire application lifetime
			 * you should do your ajax requests or fetch api requests here. Do not use setState() to save data in the
			 * store, instead use actions, like this:
			 *
			 * state.actions.loadSomeData(); <---- calling this function from the flux.js actions
			 *
			 **/
			//change to 100
			fetch("https://www.swapi.tech/api/people?page=2&limit=100")
			.then(response => response.json())
			.then(result => {				
				let pep = result.results.map(x =>{										
					return { ...x, img: `https://starwars-visualguide.com/assets/img/characters/${x.uid}.jpg` }
				})				
				state.actions.loadSomeData(pep,"people")				
			})
			
			.catch(error => console.log('error', error));

			
			//change to 61
			fetch("https://www.swapi.tech/api/planets?page=2&limit=61")
			.then(response => response.json())
			.then(result => {				
				let plan = result.results.map(x =>{										
					return { ...x, img: `https://starwars-visualguide.com/assets/img/planets/${x.uid}.jpg` }
				})				
				state.actions.loadSomeData(plan,"planets")				
			})
			.catch(error => console.log('error', error));

			//change to 40
			fetch("https://www.swapi.tech/api/vehicles?page=2&limit=40")
			.then(response => response.json())
			.then(result => {
				let veh = result.results.map(x=>{
					return{ ...x, img: `https://starwars-visualguide.com/assets/img/vehicles/${x.uid}.jpg`}
				})
				state.actions.loadSomeData(veh,"vehicles")
			})
			.catch(error => console.log('error', error));	

			

		}, []);

		// The initial value for the context is not null anymore, but the current state of this component,
		// the context will now have a getStore, getActions and setStore functions available, because they were declared
		// on the state of this component
		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
