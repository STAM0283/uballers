import React from 'react';
import { useHistory } from 'react-router-dom';

const GroundsList = (props) => {
  let grounds = props.data.grounds;
  let setGrounds = props.data.setGrounds;
  const history = useHistory();

const selectGround = (event) => {
    let id = event.target.id;
    console.log('ididididid', id);
    const filterData = grounds.filter((item) => item.groundId === id);
    setGrounds(filterData);
    console.log('-----', grounds); 
    console.log('@@@@@@',filterData);
    history.push("/Ground");

};
  const returnHome = () => {
    history.push("/")
}

  return  (
    <div>
      <button type="button" onClick={returnHome}><i class="fas fa-undo-alt"></i>ACCUEIL</button>
      <h1>Liste des terrains</h1>
      {
        grounds.map((item) => <div id={item.groundId} onClick={selectGround} className="groundsList"><i class="fas fa-arrow-circle-right"></i><p className="adress" onClick={selectGround}>{item.address}</p></div>)
      }
    </div>
  );
};

export default GroundsList;
