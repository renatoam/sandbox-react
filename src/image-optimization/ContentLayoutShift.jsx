export default function ContentLayoutShift() {
  return (
    <>
      {/* <img src="/chris-lawton-unsplash.jpg" alt="Vintage books" /> */}
      <picture>
        {/* <source srcset="/chris-lawton-unsplash.avif" type="image/avif" /> */}
        {/* <source srcset="/chris-lawton-unsplash.webp" type="image/webp" /> */}
        <source srcset="/chris-lawton-unsplash-jpg.jpg" type="image/jpeg" />
        <img src="/chris-lawton-unsplash.jpg" alt="Vintage books" />
      </picture>
    </>
  )
}
