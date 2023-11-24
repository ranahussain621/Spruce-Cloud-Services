
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IMG5 from "../../../assets/img/img5.jpg";
import ProjectImg1 from "../../../assets/img/card_img.png";
import { useDispatch, useSelector } from "react-redux";
import CspPagination from "../../../components/Elements/CspPagination";
import { baseURL } from '../../../axios/axios'
import {
  getCurrentUserPackages

} from "../../../redux/features/packages/packageApis";

export default function CspDashItems({ searchData }) {


  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const pageSize = 10; // Number of items per page
  const [userId, setUserId] = useState();
  const [paginatedData, setpaginatedData] = useState();






  let User = JSON.parse(localStorage.getItem("user")) || [];
  const currentPackages = useSelector((state) => state.currentUserPackages);

  useEffect(() => {
    setUserId(User.user.id);
  }, []);


  useEffect(() => {
    if (searchData?.length === 0) {
      const packageOfCurrentUser = async () => {
        const response = await dispatch(getCurrentUserPackages(userId));
        
        const userPackages = response.payload;

        const totalPages = Math.ceil(userPackages?.packages?.length / pageSize);
        setTotalPage(totalPages);
        const totalPackages = userPackages?.packages.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        setData(totalPackages);

      };

      packageOfCurrentUser();

    }


  }, [dispatch, userId, currentPage, searchData]);



  useEffect(() => {
    if (searchData?.length > 0) {
      const totalPages = Math.ceil(searchData?.length / pageSize);

      setTotalPage(totalPages);
    }
  }, [searchData, totalPage]);

  const changeCurrentPageValue = (value) => {
    // getpackages(value)
    setCurrentPage(value);

  };




  useEffect(() => {
    const updatedPackages = async () => {
      if (currentPackages && paginatedData?.length === 0) {
        setData(currentPackages?.packages);

      }
    }

    updatedPackages()
  }, [currentPackages]);



  const handleNextPage = () => {

    if (currentPage < totalPage) {
      const nextPage = currentPage + 1;
      // getpackages(nextPage);

      setCurrentPage(nextPage);

    }
  };

  const handlepreviousPage = () => {
    if (currentPage > 1) {
      const previousPage = currentPage - 1;
      // getpackages(previousPage);
      setCurrentPage(previousPage);
    }
  };

  useEffect(() => {
    if (searchData?.length <= pageSize) {
      setpaginatedData(searchData)
    } else {
      const getPackages = searchData?.slice((currentPage - 1) * pageSize, currentPage * pageSize)
      setpaginatedData(getPackages)
    }
  }, [searchData, currentPage])




  return (
    <>
      <div className="container"><h5></h5>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {paginatedData?.length > 0 ? (
            paginatedData?.map((item, i) => {
            
              let packImage = item.image;
      
              return (
                <div className="col" key={i}>
                  <div className="card_pack card" >
                    {item.image ? (<img src={packImage} className="card-img-top w-100" alt="..." style={{ height: '235px', width: '215px' }} />)
                      :
                      (<img src={ProjectImg1} className="card-img-top w-100" alt="..." style={{ height: '235px', width: '215px' }} />)}
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
              let packImage = item.image
              return (
                <div className="col" key={i}>
                  <div className="card_pack card" >
                    {item.image ? (<img src={packImage} className="card-img-top w-100" alt="..." style={{ height: '235px', width: '215px' }} />)
                      :
                      (<img src={ProjectImg1} className="card-img-top w-100" alt="..." style={{ height: '235px', width: '215px' }} />)}
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


        <CspPagination totalPage={totalPage} currentPageValue={changeCurrentPageValue} nextPage={handleNextPage} previousPage={handlepreviousPage} />

      }







    </>
  );
}