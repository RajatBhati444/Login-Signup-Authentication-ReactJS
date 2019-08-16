import React from "react";
import { BrowserRouter as router, NavLink } from "react-router-dom";
import "../App.css";
import Button from "../components/Button";
import { UserConsumer } from "../Context/UserContext";
const HomePage = props => {
  return (
    <UserConsumer>
      { (data) => (
        <div className="inputD">
          this is homee page
          <NavLink to="/loginpage">
            <Button bname="logout" LoginClick={data.handleLogin} />
          </NavLink>
        </div>
      )}
    </UserConsumer>
  );
};

export default HomePage;
