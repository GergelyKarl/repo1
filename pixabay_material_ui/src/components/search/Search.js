import React, { Component } from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import axios from "axios";
import ImageResult from "../../components/img-results/ImageResult";

class Search extends Component {
  state = {
    searchText: "",
    amount: 15,
    apiUrl: "https://pixabay.com/api",
    apiKey: "17378728-19ea6562c6c6ef495bc224209",
    images: [],
  };

  onTextChange = (e) => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      if (val === "") {
        this.setState({ images: [] });
      } else {
        axios
          .get(
            `${this.state.apiUrl}?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`
          )
          .then((res) => this.setState({ images: res.data.hits }))
          .catch((err) => console.log(err));
      }
    });
  };

  onAmountchange = (e, index, value) => this.setState({ amount: value });

  render() {
    console.log(this.state.images);

    return (
      <div>
        <TextField
          name="searchText"
          value={this.state.searcText}
          onChange={this.onTextChange}
          floatingLabelText="Képek keresése"
          floatingLabelStyle={{ color: "#474e59", marginLeft: "15px" }}
          floatingLabelFocusStyle={{ color: "#3d7adb" }}
          floatingLabelFixed="true"
          fullWidth={true}
        />

        <br />
        <SelectField
          name="amount"
          floatingLabelText="Mennyiség:"
          floatingLabelStyle={{ color: "#474e59", marginLeft: "5px" }}
          value={this.state.amount}
          onChange={this.onAmountchange}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={20} primaryText="20" />
          <MenuItem value={50} primaryText="50" />
        </SelectField>
        <br />
        {this.state.images.length > 0 ? (
          <ImageResult images={this.state.images} />
        ) : null}
      </div>
    );
  }
}

export default Search;
