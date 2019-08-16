import React from 'react';
import Button from '../components/Button';
import Form from '../components/Form';
import Input from '../components/Input';
import '../App.css';
import { UserConsumer } from '../Context/UserContext';
import { withRouter } from "react-router";

class LoginPage extends React.Component{

    constructor(props){
        super(props)
            this.state = {
                email: '',
                password: ''
            
        }
        this.onChangeHandle=this.onChangeHandle.bind(this);
        this.LoginClick=this.LoginClick.bind(this);
    }

    onChangeHandle = ( ev,key ) => {
        console.log(ev.target.value);
        console.log("key is "+key);
        this.setState(
            { [key]: ev.target.value }
        )
    }

    LoginClick = (fn) => {
        const { email, password } = this.state;
        console.log(localStorage.getItem("DB"));
        var t = localStorage.getItem("DB");
    
        console.log("email is " + this.state.email + " password is " + this.state.password);
    
        if (email === "" && password === "") {
          alert("empty");
        } else {
          if (t !== null) {
            const JSON_DATA_ARRAY = JSON.parse(t);
            const userExists = JSON_DATA_ARRAY.some(element => {
              if (element.email === email && element.password === password) {
                alert("User exists.");
                this.setState({
                  email: "",
                  password: ""
                });
                fn();
                return true;
              } else {
                return false;
              }
            });
            if (userExists == false) {
              this.setState({
                email: "",
                password: ""
              });
              alert("unauthorised user,please register");
            } else {
              this.props.history.push({
                pathname: "/homepage",
                state: { email : this.state.email, password : this.state.password }
              });
            }
          }
        }
      };

    

    render(){
        const { email,password } = this.state;
        return(
            <div className="form-background">
               <UserConsumer>
                 {
                   (data) => {
                    
                    return(
                      <Form 
                    type="login"
                    submitLabel="Login" 
                    linkLabel="Signup" 
                    linkRoute="/signuppage"
                    email={email}
                    password={password}
                    onChangeHandle={this.onChangeHandle}
                    LoginClick={()=>this.LoginClick(data.handleLogin)}
                    />
                    )
                  }
                    
                 }
               </UserConsumer>
            </div>
        )
    }
}
export default withRouter(LoginPage);