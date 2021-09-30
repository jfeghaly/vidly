import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/Like";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };
  handleLike=(movie)=>{
    const movies=this.state.movies.map((mv) => {if (mv._id === movie._id)  mv.liked=!mv.liked; return mv });
    this.setState({ movies });
  }
  render() {
    if (this.state.movies.length === 0)
      return <p> There are no movies in the database.</p>;
    return (
      <>
        <p>
          showing {this.state.movies.length} movie
          {this.state.movies.length > 1 ? "s" : ""} in the database
        </p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th/>
              <th/>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><Like liked={movie.liked} onClick={()=>{this.handleLike(movie)}}/></td>
                <th>
                  <button>
                    <button>
                      <button
                        onClick={() => this.handleDelete(movie)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </button>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Movies;
