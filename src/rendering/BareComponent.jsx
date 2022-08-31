import { memo } from 'react'

function BareComponent({ myObject, myFunction }) {
// function BareComponent() {
  return (
    <section onClick={myFunction}>
     {/* <section> */}
      Bare Component
      <br />
      {myObject.value && myObject.value}
    </section>
  )
}

// export default BareComponent
export default memo(BareComponent)
