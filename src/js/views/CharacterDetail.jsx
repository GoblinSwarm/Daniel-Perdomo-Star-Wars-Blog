import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const initialState = {
    properties: {
        height: "",
        mass: "",
        hair_color: "",
        skin_color: "",
        eye_color: "",
        birth_year: "",
        gender: "",
        created: "",
        edited: "",
        name: "",
        homeworld: "",
        url: ""
    },
    description: "",
    _id: "",
    uid: "",
    __v: ""
}


export const CharacterDetail = () => {
    const { store } = useContext(Context);
    const { people } = store;
    const { uid } = useParams();
    const [character, setCharacter] = useState(initialState);

    useEffect(() => {
        // Buscar el personaje por uid
        const fetchPerson = async () => {
            const foundPerson = people.find(newPerson => newPerson.result.uid === uid);
            if (foundPerson) {
                setCharacter(foundPerson.result);
            }
        }
        fetchPerson();
    }, [uid, people]);

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
                                        <h3 className="card-title text-center">{character.properties.name}</h3>
                                        <p>{character.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="d-flex justify-content-between col-12" style={{ height: "200px" }}>
                                <p className="card-text"><small className="text-body-secondary">Gender: {character.properties.gender}</small></p>
                                <div className="vr"></div>
                                <p className="card-text"><small className="text-body-secondary">Height: {character.properties.height}</small></p>
                                <div className="vr"></div>
                                <p className="card-text"><small className="text-body-secondary">Hair Color: {character.properties.hair_color}</small></p>
                                <div className="vr"></div>
                                <p className="card-text"><small className="text-body-secondary">Eye Color: {character.properties.eye_color}</small></p>
                                <div className="vr"></div>
                                <p className="card-text"><small className="text-body-secondary">Mass: {character.properties.mass}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default CharacterDetail;