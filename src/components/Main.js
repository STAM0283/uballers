import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import groundsData from '../data/groundsData.json';
import GroundsList from './GroundsList';
import Ground from './Ground';
import Home from './Home';

// we will transform the object into an array

const data = Object.values(groundsData);

const Main = () => {
  const [grounds, setGrounds] = useState(null);
  useEffect(() => {
    setGrounds(data);
  }, [grounds]);
  return grounds !== null ? (
    <div className="ground">
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/GroundsList">
          <GroundsList data={{
            grounds,
            setGrounds
          }}
          />
        </Route>
        <Route exact path="/Ground">
          <Ground data={{
            grounds
          }}
          />
        </Route>
      </Switch>
    </div>
  ) : (
    <p>LOADING</p>
  );
};

export default Main;
