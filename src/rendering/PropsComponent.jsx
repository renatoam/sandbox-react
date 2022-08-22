export default function PropsComponent({ primitive, nonprimitive }) {
  console.log({ primitive, nonprimitive })

  return (
    <p
      style={{
        height: 40,
        width: 40,
        display: "grid",
        placeContent: "center",
        border: "1px solid",
        borderRadius: 10
      }}
    >
      Props Component
    </p>
  )
}
