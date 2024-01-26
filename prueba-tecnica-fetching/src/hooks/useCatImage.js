import { useEffect, useState } from "react";

const CAT_IMG_URL_ENDPOINT = "https://cataas.com/cat/says/";

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    if (!fact) return;

    const firstThreeWords = fact.split(" ").slice(0, 3).join("%20");
    fetch(CAT_IMG_URL_ENDPOINT + firstThreeWords).then((response) => {
      const { url } = response;
      setImageUrl(url);
    });
  }, [fact]);

  return { imageUrl };
}
