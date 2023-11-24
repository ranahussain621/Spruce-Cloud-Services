
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import IMG5 from "../../../assets/img/img5.jpg";
import ProjectImg1 from "../../../assets/img/card_img.png";
import { useDispatch, useSelector } from "react-redux";


import {instance,baseURL} from '../../../axios/axios'
import CspPagination from "../../../components/Elements/CspPagination";



export default function DashItems({ searchData }) {



  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const pageSize = 20; // Number of items per page


  // const adminEditedPackages = useSelector((state) => state.currentUserPackages);

  const allPackages = useSelector((state) => state.packages.SearchData);

  const getpackages = async (pageNumber) => {
    const response = await instance.get(`packages/get-packages?page=${pageNumber}`);
    const responseData = response.data;
    setData(responseData.packages);
    setCurrentPage(parseInt(responseData.page.currentPage ? responseData.page.currentPage.split("=")[1] : pageNumber));
    setTotalPage(responseData.page.totalPages);



  };

  // useEffect(() => {
  //   if (adminEditedPackages?.length>0 && searchData?.length=== 0) {
  //     const totalPages = Math.ceil(adminEditedPackages?.length / pageSize);
  //     setTotalPage(totalPages);
  //     setData(adminEditedPackages?.slice((currentPage - 1) * pageSize, currentPage * pageSize));
  //   } 
  // }, [adminEditedPackages,totalPage]);


  useEffect(()=>{
    if(allPackages?.length>0 && searchData?.length=== 0){
      const totalPages = Math.ceil(allPackages?.length / pageSize);
      setTotalPage(totalPages);
      setData(allPackages?.slice((currentPage - 1) * pageSize, currentPage * pageSize));
    }
    },[allPackages,totalPage])



  useEffect(() => {
    if (searchData.length > 0) {
      const totalPages = Math.ceil(searchData.length / pageSize);
      setTotalPage(totalPages);
    } else {
      getpackages(1)
    }
  }, [searchData, totalPage]);

  const changeCurrentPageValue= (value) => {
    getpackages(value)
    setCurrentPage(value);
    
  };

  const handleNextPage = () => {

    if (currentPage < totalPage) {
      const nextPage = currentPage + 1;
      getpackages(nextPage);
     
      setCurrentPage(nextPage);
     
    }
  };

  const handlepreviousPage = () => {
    if (currentPage > 1) {
      const previousPage = currentPage - 1;
      getpackages(previousPage);
      setCurrentPage(previousPage);
    }
  };

  const paginatedData = searchData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {paginatedData?.length > 0 ? (
            paginatedData?.map((item, i) => {
            console.log("🚀 ~ file: DashItems.jsx:100 ~ paginatedData?.map ~ item:", item)
           
             
              return (
                <div className="col" key={i}>
                  <div className="card_pack">
                  {item.image?(<img src={item.image} className="card-img-top w-100" alt="..." style={{height:'235px',width:'215px'}}  />)
                    :
                    ( <img src={ProjectImg1} className="card-img-top w-100" alt="..." style={{height:'235px',width:'215px'}}  />)}
                    <div className="card-body">
                      <h6
                        className="card-title text-center"
                        style={{ fontSize: 14, fontWeight: "bold" }}
                      >
                        {item.title}
                      </h6>
                      <p
                        className="card-text text-center"
                        style={{ fontSize: 12, color: "gray" }}
                      >
                       {item.details.split(' ').slice(0, 6).join(' ')}
                        {item.details.split(' ').length > 6 ? '...' : ''}
                        <br />
                        <small
                          className="sm"
                          style={{ fontWeight: "bold", fontSize: "14px" }}
                        >
                         CAD {item.price}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (




            data?.map((item, i) => {
              return (
                <div className="col" key={i}>
                  <div className="card_pack card" >
                    {item.image?(<img src={item.image} className="card-img-top w-100" alt="..." style={{height:'235px',width:'215px'}}  />)
                    :
                    ( <img src={ProjectImg1} className="card-img-top w-100" alt="..." style={{height:'235px',width:'215px'}}  />)}
                   
                    <div className="card-body">
                      <h6
                        className="card-title text-center"
                        style={{ fontSize: 14, fontWeight: "bold" }}
                      >
                        {item.title}
                      </h6>
                      <p
                        className="card-text text-center"
                        style={{ fontSize: 12, color: "gray" }}
                      >

                        {item.details.split(' ').slice(0, 6).join(' ')}
                        {item.details.split(' ').length > 6 ? '...' : ''}
                        <br />
                        <small
                          className="sm"
                          style={{ fontWeight: "bold", fontSize: "14px" }}
                        >
                         CAD {item.price}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              )
            })

          )}
        </div>
      </div>










      {
        totalPage > 1 &&


<CspPagination  totalPage={totalPage} currentPageValue={changeCurrentPageValue} nextPage={handleNextPage} previousPage={handlepreviousPage}/>
       
      }







    </>
  );
}