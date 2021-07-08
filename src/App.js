import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route, Link } from "react-router-dom";

const hats = () => {
  return (
    <div>
      <h1>hats</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={hats} />
      </Switch>
    </div>
  );
}

export default App;
