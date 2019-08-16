import React from 'react';
import { UserProvider } from './UserContext' ;
import AppRouter from '../router/AppRouter' ;

class ProviderFile extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loggedInStatus: false 
            }
            this.handleLogin = this.handleLogin.bind(this);
    }
      
        handleLogin() {
          this.setState( {
            loggedInStatus : !this.state.loggedInStatus 
          });
          alert("loggedInStatus Change")
          console.log("hey val of c status : "+ this.state.loggedInStatus)
        }
    
      render() {
        return (

            <UserProvider value={{
                loggedInStatus : this.state.loggedInStatus
,                handleLogin : this.handleLogin
            }}  >
                <AppRouter/>
            </UserProvider>



        )
    }
}

export default ProviderFile;