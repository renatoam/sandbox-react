import React, { useState } from 'react'

function A({ obj, func }) {
  // const [aState, setAState] = useState(false)
  const [count, setCount] = useState(false)

  return <button onClick={() => setCount(count + 1)}>A - count: {count}</button>
  // return <button onClick={() => setAState(!aState)}>A</button>
}

// export default React.memo(A)
export default A
