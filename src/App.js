import "./App.css";
import Home from "./Home";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
