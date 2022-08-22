import { memo } from 'react' 

function MemoComponent() {
  return (
    <p>Memo Component</p>
  )
}

export default memo(MemoComponent)
