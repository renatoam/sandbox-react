import { memo } from 'react' 

function MemoComponent({ name }) {
  return (
    <p>Memo Component {name}</p>
  )
}

export default memo(MemoComponent)
