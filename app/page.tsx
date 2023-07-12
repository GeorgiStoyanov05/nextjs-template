/* eslint-disable @next/next/no-img-element */
import clients from "./utils/clients.js"
import ClientCard from "./clientCard.js"
import burgers from "./utils/burgers.js"

export default function Home() {
  return (
    <div>
      <div className="cover">
        <h1 className="title">БургИр Крal</h1>
      </div>

      <div className="columns">
        <div className="column-half">
          <img className="image" src="/image01.jpg" alt="image01" />
        </div>
        <div className="column-half">
          <h2 className="section-title">Introduction</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
            reiciendis alias saepe nam atque molestias, perspiciatis itaque, ad
            perferendis minus odio laborum dolore, aliquid natus non quia
            debitis at omnis!
          </p>
        </div>
      </div>

      <div className="columns">
        <div className="column-half">
          <h2 className="section-title">Some more info</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
            reiciendis alias saepe nam atque molestias, perspiciatis itaque, ad
            perferendis minus odio laborum dolore, aliquid natus non quia
            debitis at omnis!
          </p>
        </div>
        <div className="column-half">
          <img className="image" src="/image01.jpg" alt="image01" />
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">Some text</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci,
          incidunt! Eius iste omnis unde maxime ut quidem. Eos, dolore
          repellendus ipsum voluptas possimus et dicta at ad nihil sit officiis!
        </p>
      </div>

      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <div className="gallery">
          {burgers.map(burger=><img className="gallery-image" src={burger} alt="image01" />)}

        </div>
      </div>

      <div className="container">
        <h2 className="section-title">Our clients</h2>
        <div className="card-container">
          {clients.map(client=><ClientCard {...client}/>)}
        </div>
      </div>
    </div>
  );
}
