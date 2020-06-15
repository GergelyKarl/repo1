import React, { Component } from "react";
import AppBar from "material-ui/AppBar";

import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField/TextField";
import Dialog from "material-ui/Dialog/Dialog";
import Button from "material-ui/RaisedButton";

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.previousStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Personal Details" />
          <TextField
            floatingLabelText="Occupation"
            onChange={handleChange("occupation")}
            //defaultValue={values.occupation}
            // margin="normal"
            //fullWidth
          />
          <br></br>
          <TextField
            floatingLabelText="City"
            onChange={handleChange("city")}
            defaultValue={values.city}
            //margin="normal"
            //fullWidth
          />

          <br></br>
          <TextField
            floatingLabelText="Bio"
            onChange={handleChange("bio")}
            defaultValue={values.bio}
            // margin="normal"
            //fullWidth
          />
          <br></br>
          <Button color="secondary" variant="contained" onClick={this.back}>
            Back
          </Button>

          <Button color="primary" variant="contained" onClick={this.continue}>
            Continue
          </Button>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
