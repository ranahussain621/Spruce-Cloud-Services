import React from 'react'
import Map from '../assets/summary_page/Map.png';
import SummaryChart from './Carts/SummaryChart';
import TotalViewChart from './Carts/TotalViewChart';
import TotalEarningCart from './Carts/TotalEarningCart';
import ProductSoldCart from './Carts/ProductSoldCart';
export default function Summary() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-md-start text-sm-center mb-4">
                        <h3 style={{ fontFamily: 'Axiforma', fontWeight: 500, fontStyle: 'normal' }}>Overview</h3>
                    </div>
                    <div className="row m-0 p-0 mb-4">
                        <div className="col-md-4 col-sm-12 total_view  p-0">
                            <div className="pe-2 p-0 m-0 ">
                                 <div className="card shadow rounded-0">
                                <div className="card-body d-flex"style={{ padding: '1rem 1rem' }}>
                                    <div className="col">
                                        <p className='mb-2' style={{ fontFamily: 'Axiforma', fontWeight: 400, fontStyle: 'normal' }}>Total Views</p>
                                        <p style={{ fontFamily: 'Axiforma', fontWeight: 900, fontStyle: 'normal' }}>246K</p>
                                        <p style={{ color: 'red', fontWeight: '600', fontSize: '10px' }}>13.8%</p>
                                    </div>
                                    <div className="col-7 d-flex align-items-end ">
                                        {/* <img src={barChart} alt="" /> */}
                                        <TotalViewChart/>
                                    </div>
                                </div>
                            </div>
                            </div>
                           
                        </div>
                        <div className="col-md-4 col-sm-12product_sold p-0 "> 
                        <div className="pe-1 p-0 m-0 mt-sm-2 mt-md-0 ">
                                 <div className="card shadow rounded-0">
                               
                                <div className="card-body d-flex" style={{ padding: '1rem 1rem' }}>
                                    <div className="col">
                                        <p className='mb-2' style={{ fontFamily: 'Axiforma', fontWeight: 400, fontStyle: 'normal' }}>Products Sold</p>
                                        <p style={{ fontFamily: 'Axiforma', fontWeight: 900, fontStyle: 'normal' }}>2453</p>
                                        <p style={{ color: '#22c222', fontWeight: '600', fontSize: '10px' }}>13.8%</p>
                                    </div>
                                    <div className="col-7 d-flex align-items-end ">
                                        {/* <img src={barChart} alt="" /> */}
                                        <ProductSoldCart/>
                                    </div>
                                </div>
                            </div>   
                                </div>
                            
                        </div>
                        <div className="col-md-4 col-sm-12 total_earnings p-0">
                        <div className="ps-1 mt-sm-2 mt-md-0">
                             <div className="card shadow rounded-0">

                                <div className="card-body d-flex" style={{ padding: '1rem 1rem' }}>
                                    <div className="col">
                                        <p className='mb-2' style={{ fontFamily: 'Axiforma', fontWeight: 400, fontStyle: 'normal' }}>Total Earnings</p>
                                        <p style={{ fontFamily: 'Axiforma', fontWeight: 900, fontStyle: 'normal' }}>$39K</p>
                                        <p style={{ color: 'red', fontWeight: '600', fontSize: '10px' }}>13.8%</p>
                                    </div>
                                    <div className="col-7 d-flex align-items-end ">
                                        {/* <img src={barChart} alt="" /> */}
                                        <TotalEarningCart/>
                                    </div>
                                </div>

                            </div>
                        </div>
                           
                        </div>
                    </div>
                    <div className="col p-0 statistics mb-4">
                        <div className="card shadow rounded-0">
                            <div className="card-body">
                                <div className="row m-0 p-0 mb-4">
                                    <div className=" col-10 title ps-0">
                                        <p style={{ fontFamily: 'Axiforma', fontWeight: 400, fontStyle: 'normal' }}>Statistics</p>
                                    </div>
                                    <div className="col dropdown">
                                        <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                            <option selected>Last 6 month</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select></div>

                                </div>
                                <div>
                                    {/* <img src={StatisticsChart} alt="" /> */}
                                    <SummaryChart/>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row p-0 m-0">
                        <div className="col-md-8 ps-0">
                            <div className="card shadow rounded-0">
                                <div className="card-body">
                                    <div className="col"><p>Referrer</p></div>
                                    <div className="col m-0 p-0">
                                        <div className="table-responsive">
                                                <table className="table">
                                        <thead style={{ backgroundColor: '#a3a6b433' }}>
                                            <tr>
                                                <th>LOCATION</th>
                                                <th>VIEWS</th>
                                                <th>SALES</th>
                                                <th>CONVERSION</th>
                                                <th>TOTAL</th>
                                            </tr>


                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>google.com</td>
                                                <td>3534</td>
                                                <td>643</td>
                                                <td>55%</td>
                                                <td>$345.4</td>
                                            </tr>
                                            <tr>
                                                <td>facbook.com</td>
                                                <td>3321</td>
                                                <td>938</td>
                                                <td>59%</td>
                                                <td>$573.6</td>
                                            </tr>
                                            <tr>
                                                <td>instagram.com</td>
                                                <td>3821</td>
                                                <td>492</td>
                                                <td>73%</td>
                                                <td>$544.2</td>
                                            </tr>
                                            <tr>
                                                <td>linkdin.com</td>
                                                <td>9347</td>
                                                <td>531</td>
                                                <td>81%</td>
                                                <td>$235.9</td>
                                            </tr>
                                            <tr>
                                                <td>twitter.com</td>
                                                <td>3492</td>
                                                <td>493</td>
                                                <td>53%</td>
                                                <td>$834.5</td></tr>
                                        </tbody>
                                    </table>
                                        </div>
                                       
                                    </div>
                                 
                                </div>
                            </div></div>
                        <div className="col-md-4 p-0 mt-sm-3 mt-md-0">
                            <div className="card shadow rounded-0">
                                <div className="card-body">
                                    <div className="d-flex titles">
                                        <p style={{ fontFamily: 'Axiforma', fontWeight: 500, fontStyle: 'normal' }}>Details On Map</p>
                                        <p className='text-end' style={{ color: '#FECB2E', fontSize: '14px' }}>Show All List</p>
                                    </div>
                                    <div className='m-0 p-0 mb-3'>
                                        <img src={Map} alt="" />
                                    </div>
                                    <br />
                                    <div className=''>
                                        <div className="d-flex">
                                            <div  className='m-0 p-0 d-flex  align-items-center '> <div className="rounded-circle"
                                            style={{
                                                backgroundColor:'brown',
                                                height:'14px',
                                                width:'14px'
                                            }}></div>
                                            <div className="p-0 m-0 ps-2"><p>Canada</p></div>
                                            </div>
                                            <div  className='m-0 p-0 text-end'><p>$29,193</p></div>
                                        </div>
                                        <div className="d-flex"> <div  className='m-0 p-0 d-flex  align-items-center '> <div className="rounded-circle"
                                            style={{
                                                backgroundColor:'#FECB2E',
                                                height:'14px',
                                                width:'14px'
                                            }}></div>
                                            <div className="p-0 m-0 ps-2"><p>Brazil</p></div>
                                            </div>
                                            <div  className='m-0 p-0 text-end'><p>$29,193</p></div></div>
                                        <div className="d-flex"> <div  className='m-0 p-0 d-flex  align-items-center '> <div className="rounded-circle"
                                            style={{
                                                backgroundColor:'blue',
                                                height:'14px',
                                                width:'14px'
                                            }}></div>
                                            <div className="p-0 m-0 ps-2"><p>Egypt</p></div>
                                            </div>
                                            <div  className='m-0 p-0 text-end'><p>$18,832</p></div></div>
                                        <div className="d-flex"> <div  className='m-0 p-0 d-flex  align-items-center '> <div className="rounded-circle"
                                            style={{
                                                backgroundColor:'orange',
                                                height:'14px',
                                                width:'14px'
                                            }}></div>
                                            <div className="p-0 m-0 ps-2"><p>Russia</p></div>
                                            </div>
                                            <div  className='m-0 p-0 text-end'><p>$19,758</p></div></div>
                                        <div className="d-flex">
                                             <div  className='m-0 p-0 d-flex  align-items-center '> <div className="rounded-circle"
                                            style={{
                                                backgroundColor:'red',
                                                height:'14px',
                                                width:'14px'
                                            }}></div>
                                            <div className="p-0 m-0 ps-2"><p>China</p></div>
                                            </div>
                                            <div  className='m-0 p-0 text-end'><p>$23,193</p></div></div>
                                        <div className="d-flex"> 
                                        <div  className='m-0 p-0 d-flex  align-items-center '> <div className="rounded-circle"
                                            style={{
                                                backgroundColor:'green',
                                                height:'14px',
                                                width:'14px'
                                            }}></div>
                                            <div className="p-0 m-0 ps-2"><p>Pakistan</p></div>
                                            </div>
                                            <div  className='m-0 p-0 text-end'><p>$37,793</p></div></div>
                                    </div>
                

                                </div>
                            </div></div>
                    </div>
                </div>

             
            </div>
        </>

    )
}
