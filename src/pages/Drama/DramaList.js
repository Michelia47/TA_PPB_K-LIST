import { Fragment } from "react";
import CardSmall2 from "../../components/CardSmall2";
import React from "react";

const DramaList = ({dramas}) => {

    return (
    <>
        <p id="movies2">LIST K-DRAMA</p>
        <div className="linkk">
            <p><a id="sin" href="/sinopsis">List Sinopsis</a></p>
            <p><a id="cas" href="/cast">List Cast</a></p>
        </div>    
        {dramas.map((drama, index) => (
            <Fragment key={drama.id}>
                <CardSmall2
                   judul={drama.judul}
                   genre={drama.genre}
                   episode={drama.episode}
                   tahun={drama.tahun}
                   sinopsis={drama.sinopsis}
                   cast={drama.cast}
                   img={drama.img}
                />
                {drama.length === index + 1 && <div style={{ marginBottom: 80 }} />}
            </Fragment>  
        ))}
    </>
    );
}

export default DramaList