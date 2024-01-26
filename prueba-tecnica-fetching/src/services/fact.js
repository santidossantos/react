const CAT_FACT_ENDPOINT = "https://catfact.ninja/fact";

export const getRandomFact = async () => {
  try {
    const res = await fetch(CAT_FACT_ENDPOINT);
    if (!res.ok) throw new Error("Fetch error");
    const data = await res.json();
    const { fact } = data;
    return fact;
  } catch (err) {
    console.log(err);
  }
};
