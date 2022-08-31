import { memo } from 'react'

function OuterStateComponent({ outerState }) {
  return (
    <p>
      Outer State: {outerState.toString()}
    </p>
  )
}

export default memo(OuterStateComponent)
