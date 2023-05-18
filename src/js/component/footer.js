import React, { Component } from "react";

export const Footer = () => (
	<footer className="py-3 mt-4  fixed-bottom border-top bg-dark ">
            <ul className="nav justify-content-center  pb-3 mb-0">
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary link-light ">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary link-light">Features</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary link-light">Pricing</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary link-light">FAQs</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary link-light">About</a></li>
            </ul>
            <p className="text-center text-body-secondary text-light">© 2023 Company, Inc</p>
    </footer>
);
