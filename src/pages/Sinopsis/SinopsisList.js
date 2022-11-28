import { Fragment } from "react";
import CardSmall3 from "../../components/CardSmall3";
import React from "react";

const SinopsisList = ({dramas}) => {

    return (
    <>
        <p id="movies3">LIST SINOPSIS K-DRAMA</p>
        <div className="linkk">
            <p><a id="sin" href="/drama">Kembali</a></p>
        </div>
        {dramas.map((drama, index) => (
            <Fragment key={drama.id}>
                <CardSmall3 
                   judul={drama.judul}
                   img={drama.img}
                   sinopsis={drama.sinopsis}
                />
                {drama.length === index + 1 && <div style={{ marginBottom: 80 }} />}
            </Fragment>  
        ))}
    </>
    );
}

export default SinopsisList