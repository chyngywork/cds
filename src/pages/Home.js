import React from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
export default function Home() {
  return (
    <div>
      <Container>
      <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.wallpapersafari.com/48/16/reOsmk.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.dnndeveloper.in/DesktopModules/DnnDeveloper_ImageSlider/Images/QdOOLD2x1Qg.jpg"
      alt="Second sliddddde"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://wowslider.com/sliders/demo-77/data1/images/idaho239691_1920.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </Container>
  
    </div>
  )
}
