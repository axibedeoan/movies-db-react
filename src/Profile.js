import React, { Component } from "react";
import "./Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileTitle: "",
      profileImage: "",
      profileBackgroundImage: "",
      profileDescription: "",
      profileReleaseDate: ""
    };
    this.apiKey = "8934c30da9bcc54d005985de4fcd557f";
  }

  componentDidMount() {
    const { id } = this.props;
    const endpoint = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`;

    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        this.setState({
          profileTitle: data.title,
          profileImage: `https://image.tmdb.org/t/p/original${data.poster_path}`,
          profileBackgroundImage: `https://image.tmdb.org/t/p/original${data.backdrop_path}`,
          profileDescription: data.overview,
          profileReleaseDate: data.release_date.substring(0, 4)
        });

        console.log(data);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="container">
        <img
          className="Profile-Bimage"
          src={this.state.profileBackgroundImage}
          alt={this.state.profileTitle}
        />
        <div className="Profile-content">
          <img
            className="Profile-image"
            src={this.state.profileImage}
            alt={this.state.profileTitle}
            width="305px"
            height="458px"
          />
          <div className="Profile-details">
            <div className="Profile-title">
              {this.state.profileTitle +
                " (" +
                this.state.profileReleaseDate +
                ")"}
            </div>

            <div className="Profile-overview">
              <h3>Overview</h3>
              <p>{this.state.profileDescription}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
