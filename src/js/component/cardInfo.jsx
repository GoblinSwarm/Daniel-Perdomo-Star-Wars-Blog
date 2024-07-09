import React from "react";
import { Link } from "react-router-dom";

export const cardInfo = () => {
	return (
		<div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Learn More!</a>
                <a href="#" class="btn btn-primary"><i class="far fa-heart"></i></a>
            </div>
        </div>
	);
};


export default cardInfo;