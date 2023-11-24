import React from 'react';
import IMG4 from '../../../assets/img/AboutUs/istockphoto-1292991882-170667a.jpg'

export default function About4() {
  return (
    <>
    <div className='container'>
    <div className="card mb-3 " style={{ maxWidth: 1240,marginTop:"90px",boxShadow: "none" }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={IMG4} className="img-fluid rounded-start" alt="..." style={{width:400}} />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h3 className="card-title text-primary">Our Goal</h3>
        <div className="card-text ">
        <p className='' style={{fontWeight:'bolder',textDecoration:'underline'}}> To SME Clients</p>
        <br />
        <p style={{fontWeight:'bold'}}>Spruce Cloud delivers: </p>  
        <br />
        <p>
          ●	A specific, qualified CSP based on thorough, deep analysis of their qualifications, beyond 
          simple reviews. Spruce Cloud offers recommendations, ‎customer testimonials and tools 
          that let potential clients speak to the spokesperson for the CSP.‎ <br />
●	Recommendations from the organic search.‎ <br />
●	Best-matched recommendations at the most competitive rates. SMEs are assured of the best 
deals and will receive regular updates on the best deals with CSP partners. 

        </p><br />
        <p className=''style={{fontWeight:'bolder',textDecoration:'underline'}}>To CSPs</p>   <br />
      <p style={{fontWeight:'bold'}}>Spruce Cloud offers:</p>
        <br />
        <p>
          ●	Online visibility and increased exposure and reach.  This allows CSPs to reach wider customer groups, 
          which increases revenue. ‎Spruce Cloud’s platform equips CSPs with the marketing and technologies 
          to help them promote their services and close sales on the platform.  <br />
●	Advanced online ads, reputation management and effective SEO for enhanced ranking on online searches.  <br />
●	Expand customer base: the lead generation will deliver actively-searching customers ‎right to their inbox. ‎
        </p><br />
       
<p className='' style={{fontWeight:'bolder',textDecoration:'underline'}}>More supporting content after our goal section: </p>
<br />
<p>
  Spruce Cloud is well-positioned to cater to companies seeking to hire various public and private ‎cloud 
  services, CSPs with an ambitious goal of expanding their market reach and SMEs seeking to access the best and 
  curated list of CSPs that meet their business scope and requirements, development stage, target market, and others. 

</p>







   
       
          
        </div>
      
      </div>
    </div>
  </div>
</div>

    </div>
    
    </>
  )
}
