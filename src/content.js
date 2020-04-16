import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

// import './App.css';
import Recipe from './recipe.js'
import recipes from './recipes.json'


function Content({location}) {
    console.log(location)
  return (
    <Router>
      <div>
        { location.pathname !== "/" && <Nav />}
        <Switch>
          <Route path="/sorbet">
            <Sorbet />
          </Route>
          <Route path="/ramen_carbonara">
            <Ramen_carbonara />
          </Route>
          <Route path="/Miso_eggplant">
            <Miso_eggplant />
          </Route>
          <Route path="/Gomae">
            <Gomae />
          </Route>
          <Route path="/chocolate_chip_cookies">
            <Chocolate_chip_cookies />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Nav() {
    return(
        <div>
            <ul>
                <li>
                    <Link to="/sorbet">sorbet</Link>
                </li>
                <li>
                    <Link to="/ramen_carbonara">ramen carbonara</Link>
                </li>
                <li>
                    <Link to="/gomae">gomae</Link>
                </li>
                <li>
                    <Link to="/miso_eggplant">miso eggplant</Link>
                </li>
                <li>
                    <Link to="/chocolate_chip_cookies">chocolate chip cookies</Link>
                </li>
                <li>
                    {window.location.pathname}
                </li>  
            </ul>
        </div>
    );
}

function Miso_eggplant() {
    return (
      <div>
        <Recipe 
          recipe={recipes.miso_eggplant}
        />
      </div>
    );
  }

function Sorbet() {
  return (
    <div>
      <Recipe 
        recipe={recipes.sorbet}
      />
    </div>
  );
}

function Ramen_carbonara() {
  return (
    <div>
      <Recipe 
        recipe={recipes.ramen_carbonara}
      />
    </div>
  );
}

function Chocolate_chip_cookies() {
  return (
    <div>
      <Recipe 
        recipe={recipes.chocolate_chip_cookies}
      />
    </div>
  );
}

function Gomae() {
    return (
      <div>
        <Recipe 
          recipe={recipes.gomae}
        />
      </div>
    );
  }

export default withRouter(Content);