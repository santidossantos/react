import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

function App() {
  const { movies: mappedMovies } = useMovies();

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
