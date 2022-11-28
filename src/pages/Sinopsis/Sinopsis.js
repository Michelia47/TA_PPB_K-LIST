import React, { useState, useEffect } from "react";
import './Sinopsis.css';
import Api from '../../api/drama-api';
import SinopsisList from "./SinopsisList";

const Sinopsis = () => {
  const [dramas, setDramas] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Api.get('/dramas').then(res=>{
          setDramas(res.data);
        })
        .catch(err => {
          setError(err.message);
        })
        .finally(()=>{
          setLoading(false);
        })
      }, []);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {dramas && <SinopsisList dramas={dramas}/>}
    </div>
  );
}        

export default Sinopsis