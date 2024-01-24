import { useEffect, useState } from "react";

export function FollowMouse() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log('effect')
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }

    return () => {
      console.log("cleanup");
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  return (
    <>
      <h3>Mouse Follower</h3>
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          border: "1px solid #09F",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </>
  );
}
