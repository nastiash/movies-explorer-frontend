import React from "react";
import { Route, Switch } from "react-router-dom";

//import CurrentUserContext from '../../contexts/CurrentUserContext';

import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";

function App() {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main component={"Main"} />
        </Route>
        <Route path="/movies">
          <Movies component={Movies} />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies component={SavedMovies} />
        </Route>
        <Route path="/profile">
          <Profile component={Profile} />
        </Route>
        <Route path="/signup" component={Register}>
          <Register />
        </Route>
        <Route path="/signin" component={Login}>
          <Login />
        </Route>
        <Route path="/*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
