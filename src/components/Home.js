import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Home.css'
import slide1 from '../images/im1.jpeg'
import slide2 from '../images/im4.jpeg'
import slide3 from '../images/im3.jpeg'

const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 img-format"
            src={slide1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Showroom</h3>
            <p>Revive los logros que has obtenido</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 img-format"
            src={slide2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Realidad virtual</h3>
            <p>Recorre lugares de manera virtual y física</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-format"
            src={slide3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Interactua con las exhibiciones</h3>
            <p>Juega y desbloquea logros con tus exhibiciones favoritas</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <article>
        <title>AR Point</title>
        <p>asd</p>
      </article>
    </>
  )
}

export default Home