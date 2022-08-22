import './cls.css'

export default function ContentLayoutShift() {
  return (
    <>
    {/* <figure>
      <img src="/chris-lawton-unsplash.jpg" alt="Vintage books" />
    </figure> */}
    <figure>
      <img src="/chris-lawton-unsplash-jpg.jpg"
        alt="A delicious donut"
        width="400"
        height="400"
        srcSet="/chris-lawton-unsplash-330.jpeg 400w,
                /chris-lawton-unsplash-639.jpeg 700w"
        sizes="(max-width: 400px) 400px,
                800px"
      />
    </figure>
      {/* <picture>
        <source srcSet="/chris-lawton-unsplash.avif" type="image/avif" />
        <source srcSet="/chris-lawton-unsplash.webp" type="image/webp" />
        <source srcSet="/chris-lawton-unsplash-jpg.jpg" type="image/jpeg" />
        <img src="/chris-lawton-unsplash-jpg.jpg" alt="Vintage books" />
      </picture> */}
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat perspiciatis provident odit. Dolorem voluptate porro, totam fugiat magnam rem culpa, quisquam doloremque distinctio impedit tempora quidem dolor eius perspiciatis sequi!</p>
    </>
  )
}
