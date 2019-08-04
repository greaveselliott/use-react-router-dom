# Use React Router Dom

A collection of React Hooks that let your functional React components interact with your React Router context without requiring the `useRouter()` higher order component.

---

## Getting started

#### 1. Installing packages

###### NPM

```
npm install use-react-router-dom

# Install React-Router
npm install react-router react-router-dom
```

###### Yarn

```
yarn add use-react-router-dom

# Install React-Router
yarn add react-router react-router-dom
```

#### 1. Encapsulate your app with one of the `react-router-dom` routers

`<BrowserRouter>` `<HashRouter>` `<MemoryRouter>` `<StaticRouter>`

##### Example

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
```

#### 3. Using useRouter

Calling `useRouter()` provides your functional component with access to the nearest React Routers context, exposing the `History`, `Match` and `Location` properties.

##### Example

Using the history API, we can update the browsers URL by pushing to the exposed history object.

```javascript
import React from "react";
import { Route } from "react-router-dom";
import { useRouter } from "use-react-router-dom";

import "./App.css";

const App = () => (
  const { match, history, location } = useRouter();

  <div className="App">
    <button onClick={history.push("/")}>Home</button>
    <button onClick={history.push("/about")}>About</button>

    <Route exact path="/" component={() => <h1>Home</h1>} />
    <Route path="/about" component={() => <h1>About</h1>} />
  </div>
);

export default App;
```

---

#### useNavigate( path: _String_ )

Simple utility providing Memoized route updates the browser history, preventing unecessary re-renders

Calling `useNavigate` updates the URL with

```javascript
import React from "react";
import { Route } from "react-router-dom";
import { useNavigate } from "use-react-router-dom";

import "./App.css";

const App = () => (
  <div className="App">
    <button onClick={useNavigate("/")}>Home</button>
    <button onClick={useNavigate("/about")}>About</button>

    <Route exact path="/" component={() => <h1>Home</h1>} />
    <Route path="/about" component={() => <h1>About</h1>} />
  </div>
);

export default App;
```

---

#### useLocation()

Call `useLocation` to returns the Location property from React Router context.

```javascript
import React from "react";
import { Route } from "react-router-dom";
import { useLocation } from "use-react-router-dom";

import "./App.css";

const App = () => {
  const location = useLocation();
  return (
    <div className="App">
      <h1>Current location is {locaiton.pathname}</h1>
    </div>
  );
};

export default App;
```

---

#### useParams()

Returns a plain object containing the current URL parameters

```javascript
import React from "react";
import { Route } from "react-router-dom";
import { useParam } from "use-react-router-dom";

import "./App.css";

const App = () => {
  const useNavigate('/books?search="The Hobbit"')

  const parameters = useParam();
  return (
    <div className="App">
      <h1>Searching for is {parameters.search}</h1>
    </div>
  );
};

export default App;
```
