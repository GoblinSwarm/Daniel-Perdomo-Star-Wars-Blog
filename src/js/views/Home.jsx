import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/home.css";


export const Home = () => {
	const { store, actions } = useContext(Context);
    const { people } = store;
	const { vehicles } = store;
	const { planets } = store;


	return (
		<div className="container text-start">
			<div className="row">
				<div className="col-10 align-self-center">
					<h2>Characters</h2>
					<div className="text-center mt-5">
						<div className="card" style={{width: "18rem"}}>
	  						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTOU1Z2x-YVbmqhk1jiiiy55zDEpi91Y0eYg&s" className="card-img-top" />
  							<div className="card-body">
    							<h5 className="card-title">Name:</h5>
    							<p className="card-text">Gender:</p> 
								<p className="card-text">Hair-color:</p>
								<p className="card-text">Eye-color:</p> 
								<div className="buttons">
	    							<a href="#" className="btn btn-primary">Learn More!</a>
									<a href="#" className="btn btn-primary"><i className="far fa-heart"></i></a>
								</div>
  							</div>
						</div>
					</div>
					<div>
						<br />
						<h2>Planets</h2>
						<div className="text-center mt-5">
							<div className="card" style={{width: "18rem"}}>
  								<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTOU1Z2x-YVbmqhk1jiiiy55zDEpi91Y0eYg&s" className="card-img-top" />
  								<div className="card-body">
    								<h5 className="card-title">Name:</h5>
    								<p className="card-text">Gender:</p> 
									<p className="card-text">Hair-color:</p>
									<p className="card-text">Eye-color:</p> 
									<div className="buttons">
			    						<a href="#" className="btn btn-primary">Learn More!</a>
										<a href="#" className="btn btn-primary"><i className="far fa-heart"></i></a>
									</div>
  								</div>
							</div>
						</div>
					</div>
				<div>
					<br />
					<h2>Vehicles</h2>
					<div className="text-center mt-5">
						<div className="card" style={{width: "18rem"}}>
  							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTOU1Z2x-YVbmqhk1jiiiy55zDEpi91Y0eYg&s" className="card-img-top" />
  							<div className="card-body">
    							<h5 className="card-title">Name:</h5>
    							<p className="card-text">Gender:</p> 
								<p className="card-text">Hair-color:</p>
								<p className="card-text">Eye-color:</p> 
								<div className="buttons">
	    							<a href="#" className="btn btn-primary">Learn More!</a>
									<a href="#" className="btn btn-primary"><i className="far fa-heart"></i></a>
								</div>
  							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	)
};

export default Home;