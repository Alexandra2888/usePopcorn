import React from 'react';
import WatchedMovie from '../watchedMovie/watchedMovie';
import { WatchedMoviesListProps } from '../../interfaces/WatchedMoviesListProps';
 

const WatchedMoviesList: React.FC<WatchedMoviesListProps> = ({ watched }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
        />
      ))}
    </ul>
  );
};

export default WatchedMoviesList;
