import React from "react";
import WatchedMovie from "../watchedMovie/watchedMovie";
import { MovieProps } from "../../interfaces/MovieProps";

const Movie: React.FC<MovieProps> = ({ movie }) => {
  return <WatchedMovie movie={movie} key={movie.imdbID} />;
};

export default Movie;
