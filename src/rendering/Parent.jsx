import { useState, useCallback, useMemo } from "react";
import BareComponent from "./BareComponent";

const myObject = { value: 'My value' }
const myFunction = () => console.log('Hello, there!')

export default function Parent({ children }) {
  const [parentState, setParentState] = useState(false)

  const myObject = { value: 'My value' }
  const myFunction = () => console.log('Hello, there!')
  // const myObject = useMemo(() => ({ value: 'My value' }), [])
  // const myFunction = useCallback(() => console.log('Hello, there!'), [])

  return (
    <section className="parent">
      <h2>Parent Component</h2>
      <article className="rendering">
        {/* <BareComponent /> */}
        <BareComponent myObject={myObject} myFunction={myFunction} />
        {children}
      </article>
      <section className="actions">
        <button
          onClick={() => setParentState(!parentState)}>
            Force parent render
        </button>
      </section>
    </section>
  )
}
