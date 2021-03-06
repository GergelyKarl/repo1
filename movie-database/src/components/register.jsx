import React from 'react'
import Form from './form'
import  Joi  from 'joi-browser'

class Register extends Form {
    state = { data: {username: "", password: "" ,name:""}, errors: {}};
    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().min(5),
        name: Joi.string().required().label("Name")
      
      };

    render() { 
        

        return ( <div>
            <h1>Register</h1>
         <form onSubmit={this.handleSubmit}>

         {this.renderInput("username", "Username")}
            {this.renderInput("password", "Password", "password")}
            {this.renderInput("name", "Name")}
         
          {this.renderButton("Login")}
         </form>
            </div>
         );
    }
}
 
export default Register;