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

const CAT_IMG_URL_ENDPOINT = "https://cataas.com/cat/says/";

function App() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();

  // Recuperamos el fact con este efecto
  useEffect(() => {
    fetch(CAT_FACT_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);
      });
  }, []);

  /* Usamos otro efecto para recuperar la imagen una vez que ya 
     se ha recuperado el fact del primer efecto */
  useEffect(() => {
    if(!fact) return
    
    const firstThreeWords = fact.split(" ").slice(0, 3).join("%20");

    fetch(CAT_IMG_URL_ENDPOINT + firstThreeWords).then((response) => {
      const { url } = response;
      setImageUrl(url);
    });
  }, [fact]);

  return (
    <main>
      <h1>App de gatitos</h1>

      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt="cat"></img>}
      </section>
    </main>
  );
}

export default App;
