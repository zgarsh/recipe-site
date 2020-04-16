import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Content from './content.js'

// import './App.css';
// import Recipe from './recipe.js'
// import recipes from './recipes.json'


// function App() {
//   return (
//     <Router>
//       <div>
//         {/* <Recipe 
//           recipe={recipes.chocolate_chip_cookies}
//         /> */}
//         <ul>
//           <li>
//             <Link to="/sorbet">sorbet</Link>
//           </li>
//           <li>
//             <Link to="/ramen_carbonara">ramen carbonara</Link>
//           </li>
//           <li>
//             <Link to="/chocolate_chip_cookies">chocolate_chip_cookies</Link>
//           </li>
//         </ul>
//         <Switch>
//           <Route path="/sorbet">
//             <Sorbet />
//           </Route>
//           <Route path="/ramen_carbonara">
//             <Ramen_carbonara />
//           </Route>
//           <Route path="/chocolate_chip_cookies">
//             <Chocolate_chip_cookies />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Sorbet() {
//   return (
//     <div>
//       <Recipe 
//         recipe={recipes.sorbet}
//       />
//     </div>
//   );
// }

// function Ramen_carbonara() {
//   return (
//     <div>
//       <Recipe 
//         recipe={recipes.ramen_carbonara}
//       />
//     </div>
//   );
// }

// function Chocolate_chip_cookies() {
//   return (
//     <div>
//       <Recipe 
//         recipe={recipes.chocolate_chip_cookies}
//       />
//     </div>
//   );
// }


function App() {
  return (
    <Router>
      <div>
        <Content />
      </div>
    </Router>
  );
}

export default App;