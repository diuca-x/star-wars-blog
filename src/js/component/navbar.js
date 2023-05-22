import React from "react";
import { Link } from "react-router-dom";
import Favlist from "./favlist";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<Link className="navbar-brand"  to={"/"}>
				<img src="https://www.teleadhesivo.com/es/img/as555-jpg/folder/products-listado-merchanthover/vinilos-decorativos-logo-star-wars-.jpg" alt="Bootstrap" width="50px" height="54px"/>
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse d-flex justify-content-end " id="navbarNavDropdown">
				<ul className="navbar-nav ">
					<li className="nav-item dropdown dropstart">
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
