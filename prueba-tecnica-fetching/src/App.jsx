import "./App.css";
import { useCatFact } from "./hooks/useCatFact";
import { useCatImage } from "./hooks/useCatImage";

/* APIs:

- Facts Random:https://catfact.ninja/fact
- Imagen random:https://cataas.com/cat/says/hello

Enunciado:

- Recupera un hecho aleatorio de gatos de la primera API
- Recuperar las primeras 3 palabras del hecho
- Muestra una imagen de un gato con las 3 primeras palabras. 

*/

function App() {
  const { fact, refreshFact } = useCatFact(); // Nos quedamos con el retorno del hook { fact, refreshFact }
  const { imageUrl } = useCatImage({ fact }); // Fact es la dependencia del hook, cuando cambia fact cambiará la imagen

  const handleClick = async () => {
    refreshFact();
  };

  return (
    <main>
      <h1>App de gatitos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt="cat"></img>}
      </section>
      <button onClick={handleClick}>Change Fact</button>
    </main>
  );
}

export default App;
