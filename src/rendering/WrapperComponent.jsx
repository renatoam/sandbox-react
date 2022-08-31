import Parent from "./Parent";
import ChildrenComponent from './ChildrenComponent'

export default function WrapperComponent() {
  return (
    <section>
      <Parent>
        <ChildrenComponent />
      </Parent>
    </section>
  )
}
