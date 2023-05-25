import React from "react";
import { Link } from "react-router-dom";
import Favlist from "./favlist";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid  nabvar_container">
				<Link className="navbar-brand  navbar_logo"  to={"/"}>
				<img className=" nabvar_logoimg der" src="https://www.teleadhesivo.com/es/img/as555-jpg/folder/products-listado-merchanthover/vinilos-decorativos-logo-star-wars-.jpg" alt="Bootstrap" width="50px" height="54px"/>
				</Link>
				
				<div className=" navbar fav_btn" >
				<ul className="navbar-nav">
					<li className="nav-item dropdown dropstart ">
					<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</a>
					<ul className="dropdown-menu">
						<Favlist/>
					</ul>
					</li>
				</ul>
				</div>
			</div>
		</nav>
	);
};
