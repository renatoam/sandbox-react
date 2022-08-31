import { memo } from 'react'

function UseMemoComponent({ myObject }) {
  return <p>UseMemoComponent - My Object: {myObject.value}</p>
}

export default memo(UseMemoComponent)
