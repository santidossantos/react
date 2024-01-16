import "./App.css";
import { TwitterFollowCard } from "./components/TwitterFollowCard";
import { useState } from "react";

export function App() {
  const formatUserName = (userName) => `@${userName}`;

  const [name, setName] = useState("santiago");

  console.log("Render PARENT");

  const users = [
    {
      name: "Santiago",
      userName: "santiago",
      isFollowing: false,
    },
    {
      name: "Pedro",
      userName: "pedro",
      isFollowing: true,
    },
    {
      name: "Jorge",
      userName: "jorge",
      isFollowing: false,
    },
  ];

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

      {users.map((user) => {
        const { name, userName, isFollowing } = user;
        return (
          <TwitterFollowCard
            key={userName}
            formatUserName={formatUserName}
            userName={userName}
            name={name}
            initialIsFollowing={isFollowing}
          />
        );
      })}

      <button onClick={() => setName("pedro")}>Cambio Nombre</button>
    </section>
  );
}
