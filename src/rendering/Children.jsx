import React from 'react'

let render = 0;
function Children({ obj, func }) {
  console.log('render', render++)
  return <p>Children</p>
}

export default React.memo(Children)
// export default Children
