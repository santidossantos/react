import "./App.css";
import { TwitterFollowCard } from "./components/TwitterFollowCard";

export function App() {
  const formatUserName = (userName) => `@${userName}`;

  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="santy"
        name="Santiago"
        isFollowing={false}
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="jorge"
        name="Miguel"
        isFollowing
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="jose"
        name="Jose"
        isFollowing
      />
    </section>
  );
}
