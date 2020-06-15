import React, { Component } from "react";
import AppBar from "material-ui/AppBar";

import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField/TextField";
import Dialog from "material-ui/Dialog";

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Details" />
          <br></br>
          <TextField
            hintText="Enter Personal Data "
            floatingLabelText="Fisrst name"
            onChange={handleChange("firstName")}
          />
          <br></br>

          <br></br>
          <TextField
            hintText="Enter your Last Name"
            floatingLabelText="Last name"
            onChange={handleChange("lastName")}
          />
          <br></br>

          <br></br>
          <TextField
            hintText="Enter your email"
            floatingLabelText="Email"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
          <br></br>
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};

export default FormUserDetails;
