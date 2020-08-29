import React from "react";

import Form from "./form";

class LoginForm extends Form {
  // componentDidMount(){
  //     this.username.current.focus()
  // }

  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  username = React.createRef();

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            {this.renderInput("username", "Username")}
            {this.renderInput("password", "Password", "password")}
          </div>
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
