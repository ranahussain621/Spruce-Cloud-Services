import React from 'react';
import agile from '../assets/service_assets/agile.png';
import budget from '../assets/service_assets/budget.png';
import cyberSecurity from '../assets/service_assets/cyber-security.png';
import goodFeedback from '../assets/service_assets/good-feedback.png';
import saveTime from '../assets/service_assets/save-time.png';
import spending from '../assets/service_assets/spending.png';


import aws from '../assets/service_assets/aws.png';
import googleCloud from '../assets/service_assets/google-cloud.png';
import ibm from '../assets/service_assets/ibm.png';
import microsoft from '../assets/service_assets/microsoft.png';
import nasa from '../assets/service_assets/nasa.png';
import pandg from '../assets/service_assets/pandg.png';
import worldpress from '../assets/service_assets/worldpress.png';
import infinite from '../assets/service_assets/infinite.png';
import stanford from '../assets/service_assets/stanford.png';
import line from '../assets/service_assets/Line.png';
import '../style/services.css'
import head from '../assets/service_assets/heroimg.png';
import Footer from "../components/Sections/Footer"

export const ServicesPage = () => {
    return (
        <div style={{ marginTop: '60px' }}>
            <div className="container-fluid">

                {/* this is head image */}
                <div className="col-md-12 "
                    style={{
                        backgroundColor: 'rgb(0 108 186 / 20%)',
                        maxHeight: '600px'
                    }}  >

                    <div className="row h-100 w-100">

                        <div className="col-md-6 col-sm-8 col-12 d-flex justify-content-center">
                            <div className="col-md-10 p-xl-5 p-lg-1 p-0 ">
                                <div>
                                    <p className='Axiforma-800 customFontSize'
                                      
                                    >
                                        Why Clients Love Us
                                    </p>
                                </div>
                                <div className="d-flex">
                                    <img src={line} alt=""
                                        className='img-fluid lineImage'
                                        style={{ width: '60px' }}
                                    />

                                    <p className='Axiforma-400 ms-4 h4 text_2'>
                                        Everything you need to build, launch, and scale your
                                        applications
                                    </p>
                                </div>

                                <div className="row m-0 mt-5">
                                    <div className="col text-center border-4 border-dark border-end">
                                        <p className='Axiforma-800 calculation-text'
                                            
                                        >
                                            47k
                                        </p>
                                        <p className='Axiforma-500 h5 calculation-des'>
                                            Current User
                                        </p>
                                    </div>
                                    <div className="col text-center border-4 border-dark border-end">

                                        <p className='Axiforma-800 calculation-text'
                                           
                                        >
                                            83%
                                        </p>
                                        <p className='Axiforma-500 h5 calculation-des'>
                                            Traditional Data
                                        </p>
                                    </div>
                                    <div className="col text-center ">

                                        <p className='Axiforma-800 calculation-text'
                                           
                                        >
                                            347
                                        </p>
                                        <p className='Axiforma-500 h5 calculation-des'>
                                            Statistical Power
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>


                        <div className="col-md-6 col-sm-4 col-0 d-flex align-items-center justify-content-center">
                            <img src={head} alt=""
                             className='img-fluid d-sm-block d-none head-image'
                               
                            />
                        </div>

                    </div>


                </div>
                {/* this is heading text area */}
                <div className="col-md-12 " style={{ marginTop: '80px' }}>
                    <div className="row justify-content-center">

                        <div className="col-md-10  text-center">
                            <p className='h3 Axiforma-800'
                                style={{
                                    color: '#09ABF4'
                                }}
                            >
                                HOW SPRUCE CLOUD SERVICES STACKS UP
                            </p>
                        </div>

                        <div className="col-lg-4  col-md-6 mt-3 text-center">

                            <p className='Axiforma-500'>
                            Spruce Cloud provides the best information to you in your cloud transformation journey. 
                            Start from finding the right provider based on your needs like cost, product requirement, 
                            goals so you can focus on your core business in this process
                            </p>
                        </div>
                    </div>
                </div>


                {/* first line of cards */}
                <div className="container mt-5">
                    <div className="col-md-12">

                        <div className="row">

                            <div className="col">

                                <div class="card shadow-0" >
                                    <div className="d-flex justify-content-center">
                                        <img class="card-img-top img-fluid" src={saveTime} alt="..."
                                         className='img-fluid'
                                            style={{ width: '140px' }} />
                                    </div>


                                    <div class="card-body text-center">
                                        <h5 class="card-title Axiforma-400">Simplicity</h5>
                                        <p class="card-text text-muted Axiforma">Simple click allows you to compare different providers 
                                        offering and features to make comparison easier</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card shadow-0" >
                                    <div className="d-flex justify-content-center">
                                        <img class="card-img-top img-fluid" src={goodFeedback} alt="..."
                                         className='img-fluid'
                                            style={{ width: '140px' }}
                                        />
                                    </div>

                                    <div class="card-body text-center">
                                        <h5 class="card-title Axiforma-400">Speed</h5>
                                        <p class="card-text text-muted Axiforma">Leverage our intelligent search capability to quickly collect 
                                        all the market offers in seconds </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card shadow-0" >
                                    <div className="d-flex justify-content-center">
                                        <img class="card-img-top img-fluid" src={agile} alt="..."
                                         className='img-fluid'
                                            style={{ width: '140px' }}
                                        />

                                    </div>

                                    <div class="card-body text-center">
                                        <h5 class="card-title Axiforma-400">Choices</h5>
                                        <p class="card-text text-muted Axiforma">Wide range of cloud related information ranges
                                         from providers choices and other related information (e.g. talent search in later stages)</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* this is capabilities portion */}


                    <div className="col-md-12 text-center mt-5">
                        <p className='h3 Axiforma-800'
                            style={{
                                color: '#09ABF4'
                            }}
                        >CAPABILITIES</p>
                    </div>



                    <div className="col-md-12" style={{ marginTop: '60px' }}>

                        <div className="row">
                            <div className="col">
                                <p className='h4 Axoforma-600 pt-4'>
                                    Strengthening our cloud capabilities
                                </p>
                            </div>
                            <div className="col">

                                <div class="card  shadow-0">
                                    <div class="card-body">
                                        <p class="card-title h4  Axoforma-600">Easy Search</p>
                                        <p class="card-text text-muted">Always looking from customer lens to identify the best search of 
                                        cloud service providers based on features, commercials and most important user ratings</p>

                                        {/* <a href="#" class="card-link Axiforma-500"
                                            style={{
                                                color: '#09ABF4'
                                            }}
                                        >Another link</a> */}
                                    </div>
                                </div>


                            </div>
                            <div className="col">

                                <div class="card  shadow-0">
                                    <div class="card-body">
                                        <p class="card-title h4  Axoforma-600">Offer latest cloud technology Information</p>
                                        <p class="card-text text-muted">A place allow you to get the latest tech trend of the 
                                        latest cloud transformation information such as Generative AI</p>

                                        {/* <a href="#" class="card-link Axiforma-500"
                                            style={{
                                                color: '#09ABF4'
                                            }}
                                        >Another link</a> */}
                                    </div>
                                </div>

                            </div>
                            <div className="col">

                                <div class="card  shadow-0">
                                    <div class="card-body">
                                        <p class="card-title h4  Axoforma-600">Connect with the experts</p>
                                        <p class="card-text text-muted">A platform allows you to connect with the market experts and tap into their expertise </p>

                                        {/* <a href="#" class="card-link Axiforma-500"
                                            style={{
                                                color: '#09ABF4'
                                            }}
                                        >Another link</a> */}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

        
                </div>





            </div>


            <Footer />

        </div>
    )
}
