import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
				<img src="https://www.teleadhesivo.com/es/img/as555-jpg/folder/products-listado-merchanthover/vinilos-decorativos-logo-star-wars-.jpg" alt="Bootstrap" width="50px" height="54px"/>
				</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse d-flex justify-content-end " id="navbarNavDropdown">
				<ul className="navbar-nav ">
					<li className="nav-item dropdown ">
					<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</a>
					<ul className="dropdown-menu">
						<li><a className="dropdown-item" href="#">Action</a></li>
						<li><a className="dropdown-item" href="#">Another action</a></li>
						<li><a className="dropdown-item" href="#">Something else here</a></li>
					</ul>
					</li>
				</ul>
				</div>
			</div>
		</nav>
	);
};
