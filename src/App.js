import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Form from "./components/Form";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AppProvider from './Context/AppProvider'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="form-group" >
          <div className="form-background">
            
           <AppProvider/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
