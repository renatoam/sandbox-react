import { useState } from "react"

export default function ChildrenComponent() {
  const [state, setState] = useState(false)

  return (
    <section className="children">
      <p>Children Component</p>
      <button onClick={() => setState(!state)}>Change local state</button>
    </section>
  )
}
