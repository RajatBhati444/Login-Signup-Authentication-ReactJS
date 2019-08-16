import React from "react";
import Form from "../components/Form";

import "../App.css";
import { UserConsumer } from "../Context/UserContext";

class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      cnfPassword: ""
    };
    this.signupchangehandle = this.signupchangehandle.bind(this);
    this.submitClick = this.submitClick.bind(this);
  }

  //    signupchangehandle = ( e,key) => {
  //         this.setState( { [key] : e.target.value } )
  //     }

  signupchangehandle = (ev, key) => {
    console.log(ev.target.value);
    console.log("key is " + key);
    this.setState({ [key]: ev.target.value });
  };

  submitClick(ev) {
    alert("click");
    var { idd, name, email, password, cnfPassword } = this.state;
    ev.preventDefault();
    const db = localStorage.getItem("DB");
    if (db !== null) {
      const JSON_DATA_ARRAY = JSON.parse(db);
      const userExists = JSON_DATA_ARRAY.some(element => {
        if (element.email === email) {
          alert("User already exists. Please login");
          return true;
        } else {
          return false;
        }
      });
      if (userExists === false) {
        const newArr = [...JSON_DATA_ARRAY];
        newArr.push(this.state);
        localStorage.setItem("DB", JSON.stringify(newArr));
        this.setState({
          name: "",
          email: "",
          password: "",
          cnfPassword: ""
        });
        alert("U registered with new Email and password")
        
      }
    } else {
      const newArr = [];
      newArr.push(this.state);
      localStorage.setItem("DB", JSON.stringify(newArr));
      this.setState({
        name: "",
        email: "",
        password: "",
        cnfPassword: ""
      });
    }
  }

  render() {
    const { email, password, name, cnfPassword } = this.state;
    return (
     <UserConsumer>
       {
         (data)=>(
          <div className="form-background">
          <Form
            type="signup"
            username="Username : "
            password="Password : "
            createAc="createAc"
            buttonType="submit"
            gobacklabel="back"
            gobacklink="./loginpage"
            name={name}
            email={email}
            password={password}
            cnfPassword={cnfPassword}
            onChangeHandle={this.signupchangehandle}
            LoginClick={this.submitClick}
            loginstatus={data.handleLogin}
          />
        </div>
         )
       }
     </UserConsumer>
    );
  }
}
export default SignupPage;
