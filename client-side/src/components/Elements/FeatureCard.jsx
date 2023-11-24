import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import '../../style/newcard.css';
import ModalShow from "../../screens/Modals/ModalShow";
import { Link } from 'react-router-dom';
import ProjectImg1 from "../../assets/img/card_img.png";


export default function FeatureCard({ image, title, price, des, id, imgVal }) {


  const [compareListFull, setCompareListFull] = useState(false);


  const [isOpen, setIsOpen] = useState(false);



  const handleClose = () => {
    setIsOpen(false);
   
  };


  const handleShow = () => {
    let array = JSON.parse(localStorage.getItem('compareList')) || []; 
    let commonVal = array.find((val)=>val===id)
if(commonVal){
  toast.error("Package is already Present on Compare List", {
    position: "top-center",
    autoClose: 1000,
  });
  return
}
   
    setIsOpen(true);
 
 if (array.length <= 3 ) {
      
    array?.push(id);
    localStorage.setItem('compareList', JSON.stringify(array));
    }else {
      setCompareListFull(true);
    }
  };

  const Navigate = useNavigate();
  const subscribenow = () => {
    Navigate("/web/contact-us")
  };


  return (
    <>

      <div className="product-grid border card">
        <div className="product-image rounded-0">
          <a href="#" className="image">
            {imgVal?( <img src={image} style={{height:'235px',width:'215px'}} />):(<img src={ProjectImg1} style={{height:'235px',width:'215px'}}/>)}
           
          </a>
          <ul className="product-links">
            <li><Link className="border-0" to={`/web/pkgdetail/${id}`}><i className="fa fa-info"></i></Link></li>
            <li><a className="border-0" onClick={() => handleShow()}><i className="fa fa-random"></i></a></li>
            {isOpen && <ModalShow  compareListFull={compareListFull} handleClose={handleClose} />}
          </ul>
          <a href="#" className="add-to-cart border " 
          onClick = {subscribenow}
          style={{
            fontFamily: "Axiforma",
            fontWeight: 600,
            fontStyle: "SemiBold",
           
          }}>Subscribe Now</a>
        </div>
        <div className="product-content border-top">
          <h3 className="title"><a href="#">{title}</a></h3>
          <div className="price">CAD {price}</div>
          <div className="price">
            {des?.split(' ').slice(0, 6).join(' ')}
            {des?.split(' ').length > 6 ? '...' : ''}
          </div>

        </div>
      </div>

    </>
  );
}

