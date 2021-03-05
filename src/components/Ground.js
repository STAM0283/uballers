import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import star from '../data/image/star.png';
import groundsData from '../data/groundsData.json';

const data = Object.values(groundsData);

const Ground = (props) => {
  const [displayList, setDisplayList] = useState("block");
  const [displayFavorit, setDisplayFavorit] = useState("none");
  const history = useHistory(); 
  let grounds = props.data.grounds;
  let setGrounds = props.data.setGrounds;
  const returnHome = () => {
      history.push("/");
      setGrounds(data); 
  }
  const returnGroundsList = () => {
    history.push("/GroundsList");
    setGrounds(data); 
  }
  const handleFavoritGround = () => {
      setDisplayList("none");
      setDisplayFavorit("block"); 
  }
  const handleGroundsList = () => {
      setDisplayList("block");
      setDisplayFavorit("none")
  }
  return (
    <div>
        <div className={displayList}>
          <div className="redirection">
            <button type="button" onClick={returnGroundsList} style={{marginRight: "10px"}}><i class="fas fa-undo-alt"></i>TERRAINS</button>
            <button type="button" onClick={returnHome}><i class="fas fa-undo-alt"></i>ACCUEIL</button>
          </div>
          <div style={{display: "flex", justifyContent: "space-evenly", flexWrap: "wrap"}}>
      {
        grounds.map((item) => (
          <div className="groundDetails">
             <div className="ground_name">
               <h3>Nom du terrain :</h3>
               <p style={{fontWeight: "bold", fontSize: "large", color: "blue"}}>{item.groundName}</p>
            </div>
            <button type="button" onClick={handleFavoritGround} style={{backgroundColor: "yellow", color: "green"}}><i class="fas fa-plus-circle"></i>Ajouter aux favories</button>
            <h3>Localisation :</h3>
            <p>{item.address}</p>
            <h3>Détails du terrains :</h3>
            <p>{item.limit}</p>
            <h3>Nombre de paniers :</h3>
            <p>{item.basketNumber}</p>
            <h3>L'accès en transport :</h3>
            <p>{item.transport !== "" ? item.transport : "pas d'information à ce sujet"}</p>
          </div>
        ))
      }
       </div>
      </div>
      <div className={displayFavorit}>
          <p style={{fontSize: "large", fontWeight: "bolder"}}>Ce terrain a été ajouté à mes favoris</p>
          <div className="redirectList">
          <button type="button" onClick={handleGroundsList}><i class="fas fa-undo-alt"></i>SELECTION</button>
          <button type="button" onClick={returnGroundsList}><i class="fas fa-undo-alt"></i>TERRAINS</button>
          <button type="button" onClick={returnHome}><i class="fas fa-undo-alt"></i>ACCUEIL</button>
          </div>
          <img className="star" src={star} alt="star about favorite ground"/>
      </div>
    </div>
  );
};
export default Ground;
