import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store } = useContext(Context);
	const { people, vehicles, planets } = store;

	return (
		<div className="container text-start">
			<div className="row">
				<div className="col-10 align-self-center">
					<h2>Characters</h2>
					<div className="overflow-auto">
						<div className="d-flex flex-nowrap">
							{people.map((person, index) => (
								<div className="text-center mt-5" key={index}>
									<div className="card" style={{ width: "18rem" }}>
										<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTOU1Z2x-YVbmqhk1jiiiy55zDEpi91Y0eYg&s" className="card-img-top" alt="Character" />
										<div className="card-body">
											<h5 className="card-title">Name: {person.result.properties.name}</h5>
											<p className="card-text">Gender: {person.result.properties.gender}</p>
											<p className="card-text">Hair-color: {person.result.properties.hair_color}</p>
											<p className="card-text">Eye-color: {person.result.properties.eye_color}</p>
											<div className="buttons">
												<NavLink
													to={`/characterdetail/${person.result._id}`}
													className="btn btn-primary">
													Learn More!
												</NavLink>
												<a href="#" className="btn btn-primary"><i className="far fa-heart"></i></a>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<br />
				<div className="col-10 align-self-center">
					<h2>Planets</h2>
					<div className="overflow-auto">
						<div className="d-flex flex-nowrap">
							{planets.map((planet, index) => (
								<div className="text-center mt-5" key={index}>
									<div className="card" style={{ width: "18rem" }}>
										<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTOU1Z2x-YVbmqhk1jiiiy55zDEpi91Y0eYg&s" className="card-img-top" alt="Planet" />
										<div className="card-body">
											<h5 className="card-title">Name: {planet.result.properties.name}</h5>
											<p className="card-text">Climate: {planet.result.properties.climate}</p>
											<p className="card-text">Gravity: {planet.result.properties.gravity}</p>
											<div className="buttons">
												<NavLink
													to={`/planetdetail/${planet.result._id}`}
													className="btn btn-primary">
													Learn More!
												</NavLink>
												<a href="#" className="btn btn-primary"><i className="far fa-heart"></i></a>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<br />
				<div className="col-10 align-self-center">
					<h2>Vehicles</h2>
					<div className="overflow-auto">
						<div className="d-flex flex-nowrap">
							{vehicles.map((vehicle, index) => (
								<div className="text-center mt-5" key={index}>
									<div className="card" style={{ width: "23rem" }}>
										<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTOU1Z2x-YVbmqhk1jiiiy55zDEpi91Y0eYg&s" className="card-img-top" alt="Vehicle" />
										<div className="card-body">
											<h5 className="card-title">Name: {vehicle.result.properties.name}</h5>
											<p className="card-text">Class: {vehicle.result.properties.vehicle_class}</p>
											<div className="buttons">
												<NavLink
													to={`/vehicledetail/${vehicle.result._id}`}
													className="btn btn-primary">
													Learn More!
												</NavLink>
												<a href="#" className="btn btn-primary"><i className="far fa-heart"></i></a>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<br />
			<br />
		</div>
	);
};

export default Home;
