import { useEffect, useState } from 'react'

export function App () {
  const [fact, setFact] = useState(null)

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => setFact(data))
  }, [])

  return (
    <main>
      <h1>App de Gatitos</h1>
    </main>
  )
}
