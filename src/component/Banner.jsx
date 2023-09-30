import Carousel from 'react-bootstrap/Carousel';
import "../App.css"
import Banner1 from "../image/Banner/Banner.jpg" 
import banner2 from "../image/Banner/codacash.jpg"
import banner3 from "../image/Banner/banner3.jpg"
import banner4 from "../image/Banner/bananer4.png"


function Banner() {
  return (
    <div className="custom-carousel-container">
    <Carousel className='costum-corausel' controls={false}>
      <Carousel.Item>
        <img src={banner2} alt="" className='bannerutama'/>
       
      </Carousel.Item>
      
      <Carousel.Item>
      <img src={Banner1} alt="" className='bannerutama'  />
       
      </Carousel.Item>
      <Carousel.Item>
      <img src={banner3} alt=""  className='bannerutama'/>
       
      </Carousel.Item>

      <Carousel.Item>
      <img src={banner4} alt=""  className='bannerutama'/>
       
      </Carousel.Item>

      <Carousel.Item>
      <img src={Banner1} alt="" className='bannerutama'  />

      
      </Carousel.Item>

      <Carousel.Item>
      <img src={banner2} alt="" className='bannerutama'/>

      
      </Carousel.Item>

      <Carousel.Item>
      <img src={banner3} alt=""  className='bannerutama'/>

       
      </Carousel.Item>

      <Carousel.Item>
      <img src={banner4} alt=""  className='bannerutama'/>

        
      </Carousel.Item>
    </Carousel>
    
    </div>
  );
}

export default Banner;