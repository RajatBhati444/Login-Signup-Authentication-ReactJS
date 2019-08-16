import React from "react";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import HomePage from "../pages/HomePage";
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";
import Route from "react-router-dom/Route";
import { UserConsumer } from "../Context/UserContext";

class AppRouter extends React.Component {
  render() {
    return (
      <UserConsumer>
        {data => (
          <Router>
            <div>
        <Route path="/" exact strict render= {()=><LoginPage/>} />
              <Route
                path="/loginpage"
                strict
                exact
                render={() =>
                  ( !data.loggedInStatus ? (
                    <LoginPage />
                  ) : (
                    <Redirect to="/homepage" />
                  ))
                }
              />

              <Route
                path="/signuppage"
                strict
                exact
                render={() =>
                  ( !data.loggedInStatus ? (
                    <SignupPage />
                  ) : (
                    <Redirect to="/signuppage" />
                  ))
                }
              />

              <Route
                path="/homepage"
                strict
                exact
                render={() =>
                  (data.loggedInStatus ? (
                    <HomePage />
                  ) : (
                    <Redirect to="/loginpage" />
                  ))
                }
              />
            </div>
          </Router>
        )}
      </UserConsumer>
    );
  }
}

export default AppRouter;
