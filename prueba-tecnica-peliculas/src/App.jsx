import "./App.css";
import responseMovies from "./mocks/with-results.json";
import withoutResults from "./mocks/no-results.json";
import { Movies } from "./components/Movies";

function App() {
  const movies = responseMovies.Search;

  // Mapeaos para cumplir con el contrato que especifica el componente Movies
  // asi si algun dia cambia la api no tenemos que cambiar el componente
  // y solo modificariamos en este lugar
  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));

  return (
    <div className="App">
      <header>
        <h1>Buscador de película</h1>
        <form>
          <input type="text" placeholder="Avengers, Star wars, ..." />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  );
}

export default App;
