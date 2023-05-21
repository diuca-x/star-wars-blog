import React, { useContext } from "react";
import Carousel from "../component/carrousel";
import { Context } from "../store/appContext";
import "../../styles/home.css";


const Home = () => {
	const { store, actions } = useContext(Context);
    
	return(
			<>
				<div className="row mt-5 text-center">
					<div className="col">  
						<Carousel who = {store.people[0]} title = {"Characters"} type = {"people"}/>						
					</div>
				</div>
				<div className="row mt-5 text-center">
					<div className="col">  
						<Carousel who = {store.planets[0]} title = {"Planets"} type = {"planets"}/>						
					</div>
				</div>
				<div className="row mt-5 text-center">
					<div className="col">  
						<Carousel who = {store.vehicles[0]} title = {"Vehicles"} type = {"vehicles"}/>						
					</div>
				</div>
			</>
	);	
	
	};

export default Home
