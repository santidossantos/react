import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Buscador de película</h1>
        <form>
          <input type="text" placeholder="Avengers, Star wars, ..." />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>Resultados...</main>
    </div>
  );
}

export default App;
