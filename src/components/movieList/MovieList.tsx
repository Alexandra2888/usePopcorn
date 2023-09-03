
import Movie from "../movie/Movie";
import { IMovie } from "../../interfaces/IMovie"; 

const Movielist = ({movies}:any) => {

  return (
    <ul className="list">
      {movies?.map((movie: IMovie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default Movielist;
