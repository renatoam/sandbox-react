import { useCallback, useMemo, useState } from "react";
import A from "./A";
import B from "./B";

export default function Parent({ children }) {
  const [render, setRender] = useState(false)
  const [count, setCount] = useState(0)

  // const obj = useMemo(() => ({}), [])
  // const func = useCallback(() => 'Hello, there!', [])

  return (
    <section>
      <button onClick={() => setRender(!render)}>Force parent render</button>
      {/* <button onClick={() => setCount(count+1)}>Force A render</button> */}
      {/* <A obj={obj} func={func} /> */}
      {/* <A>{count}</A> */}
      <A />
      <B />
      {/* {children} */}
    </section>
  )
}
