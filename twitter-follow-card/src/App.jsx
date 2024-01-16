import "./App.css";
import { TwitterFollowCard } from "./components/TwitterFollowCard";
import { useState } from "react";

export function App() {
  const formatUserName = (userName) => `@${userName}`;

  const [name, setName] = useState("santiago");

  console.log("Render PARENT");

  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="pedro"
        name={name}
        initialIsFollowing={false}
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="jorge"
        name="Miguel"
        initialIsFollowing
      />

      <button onClick={() => setName("pedro")}>Cambio Nombre</button>
    </section>
  );
}
