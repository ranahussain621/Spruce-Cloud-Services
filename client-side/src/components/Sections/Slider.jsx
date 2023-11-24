
import React from 'react'
import styled from "styled-components";
import main_img_1 from '../../assets/img/main-slider.jpg'
import main_img_2 from '../../assets/img/main-image-2.jpg'
import main_img_3 from '../../assets/img/main-image-3.jpg'


const Slider = () => {
  return (
    <>
    
    <Wrapper id="home" className="">
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" >
      <div>
     
  <div className="carousel-inner"  style={{height:'500px'}} >
    <div className="carousel-item active">
      <img className="d-block w-100" src={main_img_1} alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={main_img_2} alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={main_img_3} alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
      </div>
 
</div>
    </Wrapper>
  

    
    </>
  )
}

export default Slider

const Wrapper = styled.section`
  padding-top: 65px;
  
  width: 100%;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

