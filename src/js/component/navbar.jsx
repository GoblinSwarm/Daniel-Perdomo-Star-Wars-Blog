import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="container text-center">
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><img src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo-1.png"
					                        alt="Star Wars Logo"
											style={{ height: "40px" }}
											/>
					</span>
				</Link>
				<div className="ml-auto">
					{/* Esto debe de ser un dropdown con la palabra 'favoritos' mas la cuenta de cuantos hay 
					Tambien se debe de poder sacar favoritos dentro del dropdown, no esta facil la cosa*/}

					<Link to="/">
						<button className="btn btn-primary">Favorites</button>
					</Link>

				</div>
			</nav>
		</div>
	);
};

export default Navbar;