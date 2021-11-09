import { Switch, Route } from "react-router-dom";

import { HandleRoute } from "./handleRoute";
import LoginPage from "../pages/login";
import MoviePage from "../pages/movies";

function RoutesComponent() {
  return (
    <Switch>
      {/* <HandleRoute exact path="/login" component={LoginPage} /> */}
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/movies" component={MoviePage} />
    </Switch>
  );
}

export default RoutesComponent;
