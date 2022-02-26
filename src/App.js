import React from "react";
import { PhoneListContainer } from "./pages/PhoneListContainer";
import { PhoneDetailComponent } from "./pages/PhoneDetailComponent";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavBarHome } from "./components/NavBarHome";
import "./App.css";

function App() {
  return (
    <div className="App">
    <NavBarHome />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={PhoneListContainer} />
          <Route exact path="/phones/:id" component={PhoneDetailComponent} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
