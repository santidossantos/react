import "./App.css";
import { FollowMouse } from "./components/FollowMouse";
import { useState } from "react";

function App() {
  const [mounted, setMounted] = useState(true);

  return (
    <main>
      {mounted && <FollowMouse />}
      <button onClick={() => setMounted(!mounted)}>
        {mounted ? "Desmontar" : "Montar"}
      </button>
    </main>
  );
}

export default App;
