import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const initialState = {
    properties: {
        diameter: "",
        rotation_period: "",
        orbital_period: "",
        gravity: "",
        population: "",
        climate: "",
        terrain: "",
        surface_water: "",
        created: "",
        edited: "",
        name: "",
        url: ""
    },
    description: "",
    _id: "",
    uid: "",
    __v: ""
}


export const PlanetDetail = () => {
    const { store } = useContext(Context);
    const { planets } = store;
    const { uid } = useParams();
    const [planet, setPlanet] = useState(initialState);

    useEffect(() => {
        // Buscar el personaje por uid
        const fetchPlanet = async () => {
            const foundPlanet = planets.find(newPlanet => newPlanet.result.uid === uid);
            if (foundPlanet) {
                setPlanet(foundPlanet.result);
            }
        }
        fetchPlanet();
    }, [uid, planets]);

    return (
        <>
            <div className="container text-start">
                <div className="row">
                    <div className="col-12 mx-auto">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-6">
                                    <img src="https://visitghalat.com/wp-content/uploads/st_uploadfont/800x600.gif" className="img-fluid rounded-start" />
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h3 className="card-title text-center">{planet.properties.name}</h3>
                                        <p>{planet.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="d-flex justify-content-between col-12" style={{ height: "200px" }}>
                                <p className="card-text"><small className="text-body-secondary">Diameter: {planet.properties.diameter}</small></p>
                                <div className="vr"></div>
                                <p className="card-text"><small className="text-body-secondary">Terrain: {planet.properties.terrain}</small></p>
                                <div className="vr"></div>
                                <p className="card-text"><small className="text-body-secondary">Climate: {planet.properties.climate}</small></p>
                                <div className="vr"></div>
                                <p className="card-text"><small className="text-body-secondary">Gravity: {planet.properties.gravity}</small></p>
                                <div className="vr"></div>
                                <p className="card-text"><small className="text-body-secondary">Orbital Period: {planet.properties.orbital_period}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default PlanetDetail;