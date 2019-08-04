import React from "react";
import { Route } from "react-router-dom";
import { useNavigate, useRouter } from "use-react-router-dom";

const App = () => {
  const { history } = useRouter();

  return (
    <div className="App">
      <button onClick={useNavigate("/")}>Home</button>
      <button onClick={() => history.push("/about")}>About</button>
      <button onClick={useNavigate("/gallary")}>Gallary</button>
      <button onClick={useNavigate("/contact")}>Contact</button>

      <Route exact path="/" component={() => <h1>Home</h1>} />
      <Route path="/about" component={() => <h1>About</h1>} />
      <Route path="/gallary" component={() => <h1>Gallery</h1>} />
      <Route path="/contact" component={() => <h1>Contact</h1>} />
    </div>
  );
};

export default App;
