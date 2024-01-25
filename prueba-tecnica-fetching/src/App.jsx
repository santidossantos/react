import "./App.css";
import { useEffect, useState } from "react";

/* APIs:

- Facts Random:https://catfact.ninja/fact
- Imagen random:https://cataas.com/cat/says/hello

Enunciado:

- Recupera un hecho aleatorio de gatos de la primera API
- Recuperar las primeras 3 palabras del hecho
- Muestra una imagen de un gato con las 3 primeras palabras. 

*/

const CAT_FACT_ENDPOINT = "https://catfact.ninja/fact";

function App() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    fetch(CAT_FACT_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);

        const firstThreeWords = fact.split(" ").slice(0, 3).join("%20");

        fetch(`https://cataas.com/cat/says/${firstThreeWords}`).then(
          (response) => {
            const { url } = response;
            setImageUrl(url);
          }
        );
      });
  }, []);

  return (
    <main>
      <section>
        <h1>App de gatitos</h1>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt="cat"></img>}
      </section>
    </main>
  );
}

export default App;