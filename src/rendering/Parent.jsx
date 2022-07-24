import { useCallback, useMemo, useState } from "react";
import Children from "./Children";

export default function Parent() {
  const [render, setRender] = useState(false)

  const obj = useMemo(() => ({}), [])
  const func = useCallback(() => 'Hello, there!', [])

  return (
    <section>
      <button onClick={() => setRender(!render)}>Force render</button>
      <Children obj={obj} func={func} />
    </section>
  )
}
