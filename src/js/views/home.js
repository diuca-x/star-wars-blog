import React, { useContext } from "react";
import Carousel from "../component/carrousel";
import { Context } from "../store/appContext";
import "../../styles/home.css";


const Home = () => {
	const { store, actions } = useContext(Context);
    let people = store.people
    
	return(
			<>
				<div className="text-center mt-5">
						<Carousel people = {people}/>
						<Carousel/>
						<Carousel/>
				
				</div>
			</>
	);	
	
	};

export default Home
