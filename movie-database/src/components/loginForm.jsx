import React, { Component } from "react";
import Input from "./input";

class LoginForm extends Component {
  // componentDidMount(){
  //     this.username.current.focus()
  // }

  state = {
    account: { username: "", password: "" },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const username = this.username.current.value;
    console.log("elküldve");
  };

  username = React.createRef();

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;

    return (
      <div className="container">
        <h1></h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            onChange={this.handleChange}
            label="Username"
          />
          <div className="form-group">
            <Input
              name="password"
              value={account.password}
              onChange={this.handleChange}
              label="Password"
              type="password"
            /> 
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
