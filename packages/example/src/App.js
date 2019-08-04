import React from "react";
import { Route } from "react-router-dom";
import { useNavigate } from "use-react-router-dom";

import "./App.css";

const App = () => {
  const navigate = useNavigate("/gallary?page={page}");

  return (
    <div className="App">
      <button onClick={useNavigate("/")}>Home</button>
      <button onClick={useNavigate("/about")}>About</button>
      <button onClick={() => navigate({ page: 2 })}>Gallary</button>
      <button onClick={useNavigate("/contact")}>Contact</button>

      <Route exact path="/" component={() => <h1>Home</h1>} />
      <Route path="/about" component={() => <h1>About</h1>} />
      <Route path="/gallary" component={() => <h1>Gallery</h1>} />
      <Route path="/contact" component={() => <h1>Contact</h1>} />
    </div>
  );
};

export default App;
