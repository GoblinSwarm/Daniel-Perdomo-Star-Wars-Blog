import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const initialState = {
    properties: {
        model: "",
        vehicle_class: "",
        manufacturer: "",
        cost_in_credits: "",
        length: "",
        crew: "",
        passengers: "",
        created: "",
        edited: "",
        name: "",
        max_atmosphering_speed: "",
        url: ""
    },
    description: "",
    _id: "",
    uid: "",
    __v: ""
}


export const VehicleDetail = () => {
    const { store } = useContext(Context);
    const { vehicles } = store;
    const { _id } = useParams();
    const [vehicle, setVehicle] = useState(initialState);

    useEffect(() => {

        const fetchVehicle = async () => {
            const foundVehicle = vehicles.find(newVehicle => newVehicle.result._id === _id);
            if (foundVehicle) {
                setVehicle(foundVehicle.result);
            }
        }
        fetchVehicle();
    }, [_id, vehicles]);

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
                                        <h3 className="card-title text-center">{vehicle.properties.name}</h3>
                                        <p>{vehicle.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="d-flex justify-content-between col-12" style={{ height: "200px" }}>
                                <p className="card-text"><small className="text-body-secondary">Model: {vehicle.properties.model}</small></p>
                                <div className="vr"></div>
                                <p className="card-text"><small className="text-body-secondary">Class: {vehicle.properties.vehicle_class}</small></p>
                                <div className="vr"></div>
                                <p className="card-text"><small className="text-body-secondary">Manufacturer: {vehicle.properties.manufacturer}</small></p>
                                <div className="vr"></div>
                                <p className="card-text"><small className="text-body-secondary">Length: {vehicle.properties.length}</small></p>
                                <div className="vr"></div>
                                <p className="card-text"><small className="text-body-secondary">Crew: {vehicle.properties.crew}</small></p>
                                <div className="vr"></div>
                                <p className="card-text"><small className="text-body-secondary">Max Speed: {vehicle.properties.max_atmosphering_speed}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default VehicleDetail;