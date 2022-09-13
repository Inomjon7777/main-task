import { Component } from "react";
import { toast } from "react-toastify";
import _ from "lodash";
import { getMovies } from "../../services";
import { paginate } from "../../helpers/paginate";
import Navbar from "../../components/navbar/nav-bar";

/**
 * @imports
 * ✅import NavBar from './../../components/nav-bar';
 packages
 * ✅ functions(utils|helpers)
 * ✅ components
 * ✅ assets -> images -> styles
 *
 */

class MyProfile extends Component {
  state = {
    loading: true,
    movies: [],
    genres: [],
    genreID: "all",
    currentPage: 1,
    pageSize: 3,
    columnSort: {
      path: "title",
      order: "asc",
    },
  };

  handleSelectGenre = (newGenreID) => {
    this.setState({ genreID: newGenreID, currentPage: 1 });
  };

  handlePageChange = (newPage) => {
    this.setState({ currentPage: newPage });
  };

  handleLike = (movieID) => {
    const movies = [...this.state.movies];
    const movie = movies.find((movie) => movie._id === movieID);

    movie.isLiked = !movie.isLiked;
    this.setState({ movies });
  };

  handleDeleteMovie = (movieID) => {
    const movies = this.state.movies.filter((movie) => movie._id !== movieID);
    this.setState({ movies });
    toast.error(`Deleted Movie = ${movieID}`);
  };

  // async componentDidMount() {
  //   const movies = (await getMovies()).data;
  //   console.log("movies = ", movies);



  // }

  render() {
    console.log("Movies Render");


    const { movies, genreID, pageSize, currentPage, columnSort } =
      this.state;

    const filteredMovies = movies.filter(
      (movie) => genreID === "all" || movie.genre._id === genreID
    );

    const sortedMovies = _.orderBy(
      filteredMovies,
      columnSort.path,
      columnSort.order
    );

    const paginatedMovies = paginate(sortedMovies, pageSize, currentPage);

    const total = filteredMovies.length;

    return (
      <>
        <h1>My Profile</h1>
        <img src="" alt="Img not found" />
        <label htmlFor="firstName">
          First Name
          <input type="text" />
        </label>
        <label htmlFor="lastName">
          Last Name
          <input type="text" />
        </label>
        <label htmlFor="email">
          Email
          <input type="text" />
        </label>
      </>
    );
  }
}

export default MyProfile;
