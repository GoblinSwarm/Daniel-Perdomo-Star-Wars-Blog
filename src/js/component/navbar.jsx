import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";


export const Navbar = () => {
	const { store, actions } = useContext(Context)
	const navigate = useNavigate();

	const handleOnClick = (item) => {
		console.log(item)
		//Aca se debe hacer un switch para navegar dependiendo de lo que halla como item
		if (item.result.properties.url.includes("people"))
			navigate(`/characterdetail/${item.result._id}`)

		if (item.result.properties.url.includes("vehicle"))
			navigate(`/vehicledetail/${item.result._id}`)

		if (item.result.properties.url.includes("planet"))
			navigate(`/planetdetail/${item.result._id}`)

	}

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
					<div className="btn-group">
						<Link to="/">
							<button className="btn btn-primary">Favorite: {store.favorites.length}</button>
						</Link>

						<button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
							<span className="visually-hidden">Toggle Dropdown</span>
						</button>

						<ul className="dropdown-menu dropwdown-menu-end">

							{
								store.favorites.map((item, index) => {
									return (
										< li key={index} className="d-flex px-2" >
											<a className="dropdown-item" onClick={() => handleOnClick(item)}>{item.result.properties.name}</a>
											<span onClick={() => actions.modFavorites(item)}><i className="far fa-trash-alt"></i></span>
										</li>
									)
								})
							}

						</ul>
					</div>
				</div>
			</nav >
		</div >
	);
};

export default Navbar;