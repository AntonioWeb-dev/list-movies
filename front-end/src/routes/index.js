import { Switch, Route } from "react-router-dom";
import { MyCatalog } from "../pages/catalogo";

import LoginPage from "../pages/login";
import MoviePage from "../pages/movies";

function RoutesComponent() {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/movies" component={MoviePage} />
      <Route exact path="/meucatalogo" component={MyCatalog} />
    </Switch>
  );
}

export default RoutesComponent;
