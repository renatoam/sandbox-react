import { useCallback, useMemo, useState } from "react";
import A from "./A";
import B from "./B";
import BareComponent from "./BareComponent";
import MemoComponent from "./MemoComponent";
import PropsComponent from "./PropsComponent";

export default function Parent({ children }) {
  const [parentState, setParentState] = useState(false)
  const [count, setCount] = useState(0)

  // const obj = useMemo(() => ({}), [])
  // const func = useCallback(() => 'Hello, there!', [])

  // Shallow Comparison
  // Object.is({}, {})
  // {} === {}
  // {} == {}

  // Shallow Equality
  // const obj1 = { name: '', age: '' }
  // const obj2 = { name: '', age: '' }
  // Object.keys(obj1).every(key => obj2.hasOwnProperty(key))

  return (
    <section>
      <article style={{ display: "flex", gap: 20, padding: 20 }}>
        <BareComponent />
        <PropsComponent />
        <MemoComponent />
        <A />
        <B />

      </article>
      <section id="actions">
        <button
          onClick={() => setParentState(!parentState)}>
            Force parent render
        </button>
      </section>
      {/* <button onClick={() => setCount(count+1)}>Force A render</button> */}
      {/* <A obj={obj} func={func} /> */}
      {/* <A>{count}</A> */}
      {/* {children} */}
    </section>
  )
}
