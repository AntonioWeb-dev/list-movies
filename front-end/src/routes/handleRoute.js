import { Route } from "react-router-dom";

export function HandleRoute({ element: Element, ...rest }) {
  return <Route {...rest} element={<Element />} />;
}
