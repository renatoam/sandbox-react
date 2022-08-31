import { useState } from "react";

export default function IsolatedStateComponent() {
  const [localState, setLocalState] = useState(false)

  return (
    <section>
      <p>Isolated State Component</p>
      <button onClick={() => setLocalState(!localState)}>Change State</button>
    </section>
  )
}