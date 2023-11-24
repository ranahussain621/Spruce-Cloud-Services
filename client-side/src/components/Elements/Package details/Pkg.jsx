import React from "react";
import "../../../style/packageDetail.css";
import Slider2 from "../../../assets/PackageDetail_Img/slider2.jpg";
import Button from "@mui/material/Button";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Footer from "../../Sections/Footer"
import CompareIcon from "@mui/icons-material/Compare";
import {  useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPackageDetails } from "../../../redux/features/packages/packageApis";
import { useEffect } from "react";
import PkgDetails from "./PkgDetails.jsx";
import { useParams } from "react-router-dom";

export default function Pkg () {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { packageDetails } = useSelector((state) => state.packages);
  useEffect(() => {
    dispatch(fetchPackageDetails(id));
  }, [dispatch, id]);

  const Navigate = useNavigate();
  const ordernow = () => {
    Navigate("/web/contact-us");
  };

  const comparenow = () => {
    Navigate("/web/Home");
  };


   

  useEffect(()=>{
    const getData = async () =>{
      await dispatch(fetchPackageDetails({package_id:id}))
    }
    getData()
  },[])


  return (
    <>
      <div className="container-fluid" style={{ marginTop: "90px" }}>
        <div className="col-md-12">
          <div className="row justify-content-center m-0">
            <div
              className=" col-md-10  mb-3 m-2 "
              style={{ maxWidth: "100%", boxShadow: "none" }}
            >
              <div className="row justify-content-center g-0">
                <div className="col-md-5">
                  <img
                    src={packageDetails?.packages[0]?.image ? packageDetails?.packages[0]?.image : Slider2}
                    className="img-fluid rounded-start slideImg"
                    alt="..."
                    // style={{ width: "530px", height: "500px" }}
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h5
                      className="card-title text-dark"
                      style={{
                        fontFamily: "Axiforma",
                        fontWeight: 700,
                        fontStyle: "normal",
                      }}
                    >
                      {packageDetails?.packages[0]?.title}
                    </h5>
                    <div
                      className="card-title text-dark mt-3 "
                    
                    >
                      <div className="row">
                        <div className=" col-lg-1 col-md-2 col-sm-2 col-3 text-center pe-1"> <p
                          style={{
                            fontFamily: "Axiforma",
                            fontWeight: 700,
                            fontStyle: "normal",
                          }}
                        >CAD </p></div>
                        <div className="col-lg-1 col-md-2 col-sm-3 col-4 p-0"><p className="text-muted"
                        style={{fontSize:"18px"}}
                        >{packageDetails?.packages[0]?.price}</p></div>
                      </div>
                     
                      
                      
                    </div>
                    <hr />
                    <div
                      className="line1"
                      style={{
                        fontFamily: "Axiforma",
                        fontWeight: 500,
                        fontStyle: "normal",
                      }}
                    >
                      Description
                    </div>
                    <p
                      className="card-text mt-2"
                      style={{
                        fontSize: 12,
                        textAlign: "justify",
                        fontFamily: "Axiforma",
                        fontWeight: 400,
                        fontStyle: "normal",
                      }}
                    >
                      {packageDetails?.packages[0]?.details} <br />
            
                    </p>
                    <hr />
                    <div className="row m-0 mb-1 " >
                      <div className="col ps-0">
                        <p
                          style={{
                            fontFamily: "Axiforma",
                            fontWeight: 600,
                            fontStyle: "normal",
                          }}
                        >
                          {" "}
                          Attribute
                        </p>
                      </div>
                      <div className="col">
                        <p
                          style={{
                            fontFamily: "Axiforma",
                            fontWeight: 600,
                            fontStyle: "normal",
                          }}
                        >
                          {" "}
                          Value
                        </p>
                      </div>
                     
                    </div>
                     <hr />
                    <div className=" p-0 m-0">
                      {packageDetails?.attributes.map((attributeTitle, i) => {
                        return (
                          <>
                            <div className="row m-0 mt-2 mb-2">
                              <div className="col ps-0">
                                <p className="card-text" key={i}>
                                  <small
                                    className="text-dark"
                                    style={{
                                      fontFamily: "Axiforma",
                                      fontWeight: 400,
                                      fontStyle: "normal",
                                    }}
                                  >
                                    {attributeTitle.name}
                                  </small>
                                </p>
                              </div>
                              <div className="col">
                                <p className="card-text" key={i}>
                                  <small
                                    className="text-dark"
                                    style={{
                                      fontFamily: "Axiforma",
                                      fontWeight: 400,
                                      fontStyle: "normal",
                                    }}
                                  >
                                    {attributeTitle.value}
                                  </small>
                                </p>
                              </div>
                            </div>
                          </>
                        );
                      })}
                      <hr />
                    </div>

                    <div className="">
                      <Button
                        variant="outlined"
                        startIcon={<LocalMallIcon />}
                        onClick = {ordernow}
                        className="btn text-white"
                        style={{ backgroundColor: "#55acee", border: "none" }}
                      >
                        Order Now
                      </Button>
                      {/* <button type='button'> <img className='img-fluid' style={{height:'25px',width:'22px'}} src={OrderNo} alt="" />|Order Now</button> */}
                      <Button
                        variant="outlined"
                        startIcon={<CompareIcon />}
                        className="btn text-dark"
                        onClick = {comparenow}
                        style={{
                          backgroundColor: "lightgray",
                          border: "none",
                          margin: "20px",
                        }}
                      >
                        Add Compare
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 m-0 p-0">
          <PkgDetails />
        </div>
      </div>

    <Footer/>
    </>
  );
}
