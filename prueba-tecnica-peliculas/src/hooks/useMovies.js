import responseMovies from "../mocks/with-results.json";

export function useMovies() {
  const movies = responseMovies.Search;

  /* Mapeaos para cumplir con el contrato que especifica el componente Movies
    asi si algun dia cambia la api no tenemos que cambiar el componente
    y solo modificariamos en este lugar 
  */
  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));

  return { movies: mappedMovies };
}
