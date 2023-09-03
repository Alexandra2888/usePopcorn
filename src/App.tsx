import { useState } from "react";
import { tempMovieData, tempWatchedData } from "../data";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import { IMovie } from "./interfaces/IMovie";
import Search from "./components/search/Search";
import NumResult from "./components/numResult/NumResult";
import MovieList from "./components/movieList/MovieList";
import Box from "./components/box/Box";
import WatchedSummary from "./components/watchedSummary/WatchedSummary";
import WatchedMoviesList from "./components/watchedMoviesList/WatchedMoviesList";


const App = () => {
  const [movies, setMovies] = useState<IMovie[]>(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <Navbar>
        <Search />
        <NumResult movies={movies} />
      </Navbar>
     <Home>
     <Box>
     <MovieList movies={movies}/>
     </Box>
     <Box>
     <>
        <WatchedSummary watched={watched} />
        <WatchedMoviesList watched={watched} />
      </>
     </Box>
     </Home>
    </>
  );
};

export default App;
