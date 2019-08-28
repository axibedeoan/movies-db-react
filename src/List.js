import React, { Component } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import "./List.css";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentPage: 1,
      totalResults: 0
    };
    this.apiKey = "8934c30da9bcc54d005985de4fcd557f";
  }

  componentDidMount() {
    const { items } = this.state;
    const { type } = this.props;
    const endpoint = `https://api.themoviedb.org/3/discover/${type}?api_key=${
      this.apiKey
    }`;

    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        data.results.forEach(item => items.push(this.transformData(item)));

        this.setState({ items });

        console.log(data);
      })
      .catch(error => console.log(error));
  }

  switchPage = pageNumber => {
    //const { movies } = this.state;
    const { type } = this.props;
    const endpoint = `https://api.themoviedb.org/3/discover/${type}?page=${pageNumber}&api_key=${
      this.apiKey
    }`;

    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        const dataFromResponse = [];
        data.results.forEach(item =>
          dataFromResponse.push(this.transformData(item))
        );

        this.setState({ items: dataFromResponse, currentPage: pageNumber });
        console.log(data);
      })
      .catch(error => console.log(error));
  };

  cutDescription = description => {
    if (description.length > 200) return description.substring(0, 200) + "...";
    return description;
  };

  transformData = item => {
    const { type } = this.props;
    if (type === "movie") {
      return {
        id: item.id,
        name: item.title,
        year: item.release_date,
        rating: item.vote_average,
        overview: this.cutDescription(item.overview),
        img: `https://image.tmdb.org/t/p/w500${item.poster_path}`
      };
    } else
      return {
        id: item.id,
        name: item.name,
        year: item.first_air_date,
        rating: item.vote_average,
        overview: this.cutDescription(item.overview),
        img: `https://image.tmdb.org/t/p/w500${item.poster_path}`
      };
  };

  render() {
    const { items, currentPage } = this.state;
    //const numberOfPages = Math.ceil(totalResults / 20);

    return (
      <div className="List">
        <div className="List-list">
          {items.map(m => (
            <Card
              key={m.id}
              name={m.name}
              overview={m.overview}
              year={m.year}
              rating={m.rating}
              img={m.img}
            />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          pages={10}
          switchPage={this.switchPage}
        />
      </div>
    );
  }
}

export default List;
