export default function({ heading }) {
  return `
    <header>
      <figure>
        <img
          srcset="
            https://picsum.photos/600 3x,
            https://picsum.photos/400 2x,
            https://picsum.photos/300 1.5x,
            https://picsum.photos/200 1x
          "
        src="https://picsum.photos/200"
        alt=""
      />
  </figure>
  <h1>${ heading }</h1>
</header>
  `
}
