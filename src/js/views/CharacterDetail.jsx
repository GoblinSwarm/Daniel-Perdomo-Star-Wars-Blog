import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const initialPerson = {
    name: "",
    description: "",
    birth: "",
    gender: "",
    height: "",
    skin_color: "",
    eye_color: "",
    uid: ""
}

export const CharacterDetail = () => {
    const { store } = useContext(Context);
    const { people } = store;
    const [person, setPerson] = useState(initialPerson);
    const { uid } = useParams();

    useEffect(() => {
        // Buscar el personaje por uid
        const fetchPerson = async () => {
            const foundPerson = people.find(newPerson => newPerson.result.uid === uid);
            if (foundPerson) {
                setPerson(foundPerson);
                console.log(foundPerson)
                //Esta encontrando a la persona y agregandola correctamente
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
                                        <h5 className="card-title">{person.name}</h5>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="card-text"><small className="text-body-secondary">Gender: </small></p>
                        <p className="card-text"><small className="text-body-secondary">Height: </small></p>
                        <p className="card-text"><small className="text-body-secondary">Skin Color: </small></p>
                        <p className="card-text"><small className="text-body-secondary">Eye Color: </small></p>
                    </div>
                </div>
            </div>


        </>
    )
};

export default CharacterDetail;