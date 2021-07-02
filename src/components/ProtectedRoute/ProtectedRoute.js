import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({
  component: Component,
  loggedIn,
  redirect,
  ...props
}) {
  return (
    <Route>
      {loggedIn ? <Component {...props} /> : <Redirect to={redirect} />}
    </Route>
  );
}

export default ProtectedRoute;
