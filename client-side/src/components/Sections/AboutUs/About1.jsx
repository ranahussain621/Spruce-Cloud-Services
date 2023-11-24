import React from 'react';
import IMG1 from '../../../assets/img/AboutUs/11.png'

export default function About1() {
  return (
    <>
    <div className='container'>
    <div className="card mb-3 m-2" style={{ maxWidth: 1240 ,boxShadow: "none" }}>
  <div className="row g-0">
  
    <div className="col-md-8">
      <div className="card-body">
        <h3 className="card-title text-primary">What We Do</h3>
        <p className="card-text">
        Spruce Cloud operates as an application-based, directory of cloud services,
         performing analytics for insights into the best cloud service providers (CSPs) 
         and B-B space include multinationals/Enterprise/SME clients, regardless of their 
         location, industry ‎or size. Spruce Cloud offers a full suite of features 
         and capabilities, provides a short list of the most suitable CSPs for Canada’s SMEs
          and promotes Canada’s CSPs to overseas companies. Spruce Cloud aims to become a 
          universal based ‎app on which businesses can search and find the best cloud 
          service providers. Spruce Cloud is capitalizing on the trend of adoption of cloud 
          architectures/technologies, including Big Data and Analytics that are shaping small
           businesses in Canada. When organizations use these technologies to modernize core 
           systems and the technology stack, they are rapidly changing business models and 
           technologies.
        </p>
      
      </div>
    </div>
    <div className="col-md-4">
      <img src={IMG1} className="img-fluid rounded-start" alt="..." />
    </div>
  </div>
</div>

    </div>
    </>
  )
}
