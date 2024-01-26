import "./App.css";
import { useEffect, useState } from "react";
import { getRandomFact } from "./services/fact";

/* APIs:

- Facts Random:https://catfact.ninja/fact
- Imagen random:https://cataas.com/cat/says/hello

Enunciado:

- Recupera un hecho aleatorio de gatos de la primera API
- Recuperar las primeras 3 palabras del hecho
- Muestra una imagen de un gato con las 3 primeras palabras. 

*/

const CAT_IMG_URL_ENDPOINT = "https://cataas.com/cat/says/";

function App() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    getRandomFact().then(setFact);
  }, []);

  useEffect(() => {
    if (!fact) return;

    const firstThreeWords = fact.split(" ").slice(0, 3).join("%20");
    fetch(CAT_IMG_URL_ENDPOINT + firstThreeWords).then((response) => {
      const { url } = response;
      setImageUrl(url);
    });
  }, [fact]);

  const handleClick = async () => {
    const newFact = await getRandomFact();
    setFact(newFact);
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
