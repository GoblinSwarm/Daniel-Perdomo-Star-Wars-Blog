import React from "react";
import { Context, useParam } from "../store/appContext";




export const CharacterDetail = () => {
    const { store } = useContext(Context);
    const { people } = store;
    const { uid } = useParams();




    return (
        <>
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://visitghalat.com/wp-content/uploads/st_uploadfont/800x600.gif" class="img-fluid rounded-start" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default CharacterDetail;