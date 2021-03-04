import React from 'react';
import { useHistory } from 'react-router-dom';
import Slide from "./Slide";


const Home = () => {
    const history = useHistory();

    const handleGroundList = () => {
        history.push("/GroundsList");
    }
    return (
        <div className="home">
            <h1 className="welcome">BIENVENUE SUR NOTRE PLATE-FORME UBALLERS</h1>
            <Slide />
            <div>
              <button type="button" onClick={handleGroundList}><i class="fas fa-arrow-circle-right">Liste Des terrains</i></button>
            </div>
            
        </div>
    )
}

export default Home
