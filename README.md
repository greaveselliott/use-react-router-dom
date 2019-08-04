# Use React Router Dom

Interact with your React Router without requiring the `useRouter()` higher order component.

### Installing with NPM

```
npm install use-react-router-dom
```

### Installing with Yarn

```
yarn add use-react-router-dom
```

### Example usage

```javascript
import React from "react";
import { Route } from "react-router-dom";
import { useNavigate } from "use-react-router-dom";

import "./App.css";

const App = () => (
  <div className="App">
    <button onClick={useNavigate("/")}>Home</button>
    <button onClick={useNavigate("/about")}>About</button>
    <button onClick={useNavigate("/gallary")}>Gallary</button>
    <button onClick={useNavigate("/contact")}>Contact</button>

    <Route exact path="/" component={() => <h1>Home</h1>} />
    <Route path="/about" component={() => <h1>About</h1>} />
    <Route path="/gallary" component={() => <h1>Gallery</h1>} />
    <Route path="/contact" component={() => <h1>Contact</h1>} />
  </div>
);

export default App;
```
