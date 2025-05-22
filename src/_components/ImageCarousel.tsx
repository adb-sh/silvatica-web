export default () => {

  const images = [
    { src: "/media/images/photo_5199641241837496798_y.jpg", alt: "Schild mit Silvatica Schriftzug" },
    { src: "/media/images/photo_5199641241837496788_y.jpg", alt: "Dunkler Club Raum mit Menschen" },
    { src: "/media/images/photo_5199641241837496791_y.jpg", alt: "Nebelige Club Raum mit Menschen" },
    { src: "/media/images/photo_5199641241837496796_y.jpg", alt: "DJ hinter dem DJ Pult"}
  ]

  return <>
    <div class="carousel w-full carousel-center rounded-box space-x-4 p-0">
      {images.map((image, index) => (
        <div class="carousel-item" key={index}>
          <img
            src={image.src}
            alt={image.alt}
            class="w-full h-[400px] max-h-[90vh] object-cover"
          />
        </div>
      ))}
    </div>
  </>
}