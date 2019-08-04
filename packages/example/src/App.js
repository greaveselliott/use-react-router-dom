import React from "react";
import { Route } from "react-router-dom";
import { useRouter } from "use-react-router-dom";

import "./App.css";

const App = () => {
  const { history } = useRouter();

  console.log(history);

  return (
    <div className="App">
      <button onClick={() => history.push("/")}>Home</button>
      <button onClick={() => history.push("/about")}>About</button>
      <button onClick={() => history.push("/gallary")}>Gallary</button>
      <button onClick={() => history.push("/contact")}>Contact</button>
      <Route exact path="/" component={() => <h1>Home</h1>} />
      <Route path="/about" component={() => <h1>About</h1>} />
      <Route path="/gallary" component={() => <h1>Gallery</h1>} />
      <Route path="/contact" component={() => <h1>Contact</h1>} />
    </div>
  );
};

export default App;
