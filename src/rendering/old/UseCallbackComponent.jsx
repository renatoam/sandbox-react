import { memo } from 'react'

function UseCallbackComponent({ myFunction }) {
  return (
    <section>
      <p>UseCallbackComponent</p>
      <button style={{ margin: 10 }} onClick={myFunction}>Test Memoized Handler</button>
    </section>
  )
}

export default memo(UseCallbackComponent)
