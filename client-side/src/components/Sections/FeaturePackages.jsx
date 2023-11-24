import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
// import { useDispatch,useSelector } from "react-redux";
import { API, cx } from "../SearchBar/searchAPIKey";
import AddFilterWindow from "../Elements/AddFilterWindow";
import { useDispatch, useSelector } from 'react-redux';
// Components
import FeatureCard from "../Elements/FeatureCard";
import Button from "@mui/material/Button";// import {showPackages} from '../../redux/features/packages/packageApis'
// Assets

import { PackagesForSearch   } from "../../redux/features/packages/packageApis";
import Pagination from "../Elements/Pagination";
import {instance, baseURL} from "../../axios/axios";


export default function FeaturePackages() {

  const [item, setItem] = useState([]);    ///// state for storing search word value
  const [inputSearch, setInputSearch] = useState([]);
  ////state for storing data from API
  const [allPackage, setAllPackage] = useState([]);
  ///// state for storing search keyword result Google API
  const [result, setResult] = useState([]);
  const pageSize = 20; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [addFilteredPackages, setAddFilteredPackages] = useState([])

 
  const [isOpen, setIsOpen] = useState(false);

  const [searchInternalData, setSearchInternalData] = useState()
  const dispatch = useDispatch();


  const addFilterPackagesOnScreen = useSelector((state) => state.currentUserPackages);

  
  //  Hitting API's backend 

  const getpackages = async (pageNumber) => {
    if ((inputSearch.length > 0 || addFilterPackagesOnScreen?.packages?.length > 0) ) {

      ''
      return
    } else {

      const response = await instance.get(
        `packages/get-packages?page=${pageNumber}`
      );
      const responseData = response.data;
      setAllPackage(responseData.packages);
      setCurrentPage(parseInt(responseData.page.currentPage ? responseData.page.currentPage.split("=")[1] : pageNumber));

      setTotalPage(responseData.page.totalPages);

    }


  };



  // Call getpackages with page 1 when the component mounts
  useEffect(() => {

    getpackages(1)
   

  }, []);


  const currentPageValueChange= async()=>{
    setCurrentPage(1)
  }

  useEffect(()=>{
    currentPageValueChange()
     

  },[totalPage])




 



  // //this functioin is for nexts page button on pagination
  const handleNextPage = () => {

    if (currentPage < totalPage) {
      const nextPage = currentPage + 1;
      if(!addFilterPackagesOnScreen || addFilterPackagesOnScreen?.packages?.length === 0){
 getpackages(nextPage);
      }
     

      setCurrentPage(nextPage);


    }
  };

//this functioin is for previous page button on pagination
  const handlepreviousPage = () => {
    if (currentPage > 1) {
      const previousPage = currentPage - 1;
      if(!addFilterPackagesOnScreen || addFilterPackagesOnScreen?.packages?.length === 0){
        getpackages(previousPage);
             }
      setCurrentPage(previousPage);
    }
  };


  const changeCurrentPageValue= (value) => {
    if(!addFilterPackagesOnScreen || addFilterPackagesOnScreen?.packages?.length === 0){
      getpackages(value);
           }
    setCurrentPage(value);
    
  };

  useEffect(() => {
    if (item) {
      setResult([])
    }

  }, [])


  const { packages } = useSelector((state) => state.packages);

  const { SearchData } = useSelector((state) => state.packages);


  useEffect(() => {
    dispatch(PackagesForSearch());
  }, [dispatch]);




  //this function is for pagination apply on internal search data result
  useEffect(() => {
    if (searchInternalData) {
      const paginatedData = searchInternalData.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
      );
      setInputSearch(paginatedData);

      const searchTotalPage = Math.ceil(searchInternalData.length / pageSize);
      setTotalPage(searchTotalPage);
    }
  }, [searchInternalData, currentPage, pageSize]);





  //this function will work when filters will apply on packages
  useEffect(() => {
    const filterFunction = async()=>{


      if (addFilterPackagesOnScreen?.packages?.length>0) {
        const paginatedData = addFilterPackagesOnScreen?.packages[0].slice(
          (currentPage - 1) * pageSize,
          currentPage * pageSize
        );
       
        setAddFilteredPackages(paginatedData)
  
        const searchTotalPage = Math.ceil(addFilterPackagesOnScreen?.packages[0].length / pageSize);
        setTotalPage(searchTotalPage);
      }
    }

    filterFunction()
  

  }, [addFilterPackagesOnScreen?.packages, currentPage])



//this function is working when add filter packages in not found
  useEffect(()=>{
 if (addFilterPackagesOnScreen?.packages?.length === 0) {
     
      const allpackages = async(pageNumber)=>{
       
        const response = await instance.get(
          `packages/get-packages?page=${pageNumber}`
        );
       
        const responseData = response.data;
        setAllPackage(responseData.packages);
        setCurrentPage(parseInt(responseData.page.currentPage ? responseData.page.currentPage.split("=")[1] : pageNumber));
  
        setTotalPage(responseData.page.totalPages);

      }

        allpackages(1)
         }
  },[addFilterPackagesOnScreen?.packages])


 

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };




  const search = async (e) => {
    e.preventDefault();
if(item === ""){
  setSearchInternalData('')
 setResult([])


}
    let searchResult = await SearchData?.filter((items) => {
      return item.toLowerCase() === ""
        ? items
        : items.title.toLowerCase().includes(item);
    });



    if (!searchResult || searchResult.length === 0) {
      try {
        let data1 = await axios.get(
          `https://www.googleapis.com/customsearch/v1?key=${API}&cx=${cx}&q=${item}`
        );
       

        let searchResult1 = data1?.data?.items;

        setResult(searchResult1);
      } catch (error) {
        console.log(error);
      }
    }

    setSearchInternalData(searchResult);
  
  };




  return (
    <>
      <Wrapper id="project">

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >

          <div className="col-md-12 ">
            <div className="d-flex justify-content-center">
              <div className="col-md-8">
                <div className="row align-items-center justify-content-center mt-5">
                  <div className="col-md-7 ">
                    <div className="m-0 p-0">
                      <input
                        type="text"
                        placeholder="Search here ..."
                        className="form-control w-100 border-0"
                        style={{backgroundColor:"rgb(217 217 217 / 30%"}}
                        id="form"
                        value={item}
                        onChange={(e) => {
                          setItem(e.target.value);
                          // if(item === ""){ setAllPackage(searchInternalData)}
                        }}
                      />
                    </div>

                  </div>

                  <div className="col-md-3 d-flex">
                    <div className="btnn p-0 m-0 text-center">
                      <Button
                        variant="outlined"
                        // startIcon={<FilterListIcon />}
                        className="btn text-white "
                        style={{ backgroundColor: "#09ABF4", border: "none" }}
                        onClick={search}
                      >
                        Search
                      </Button>
                    </div>
                    <div className="p-0 m-0 text-center">
                      <Button
                        variant="outlined"
                        className="btn text-white  "
                        style={{ backgroundColor: "#09ABF4", border: "none" }}
                        onClick={toggleOpen}
                      >
                        Add Filter
                      </Button>
                    </div>

                  </div>

                  {isOpen && <AddFilterWindow />}






                </div>
              </div>
            </div>
          </div>


        </div>



        {result?.map((items, index) => {
          return (
            <div >
              <div className="col-12 border-bottom pt-3 mt-3 mx-5" key={index}>
                <a href={items.displayLink}>{items.displayLink}</a>
                <a href={items.formattedUrl}>
                  <h4 style={{ color: "#1e57bf" }}>{items.title}</h4>
                </a>
                <p>
                  <small>{items.snippet}</small>
                </p>
              </div>
            </div>
          );
        })}

     

        <div className="whiteBg mt-5">
          <div className="col-12">
            <div className="row justify-content-center">
              <div className="col-8">
                <div className="row text-center justify-content-center m-0 mb-4">
                  <HeaderInfo className="justify-content-center mb-3">
                    <h1 className="font40 extraBold" style={{ fontFamily: 'Axiforma', 
                    fontWeight: 900, 
                    fontStyle: 'normal',
                    color:'rgb(10 170 242)'
                   }}
                    >
                      Featured Packages
                      </h1>


                  </HeaderInfo>
                
                </div>
              </div>
            </div>

            <div className="row textCenter"></div>
          </div>
        </div>
      </Wrapper>

      <div className=" col-md-12 ">
        <div className="row justify-content-center m-0">
          <div className="col-md-8  col-sm-10 p-0">
            <div className="row textCenter justify-content-center m-0">





              {  addFilterPackagesOnScreen?.packages?.length>0
                ?
                
                addFilteredPackages?.map((item, i) => {
                  const packImage = item.image
                  return (
                    <>

                      <div className="col-md-3 col-sm-4 mb-4 mt-3"  key={i}>


                        <FeatureCard
                         
                         image={packImage}
                          title={item.title}
                          price={item.price}
                          des={item.details}
                          id={item.id}
                          imgVal={item.image}
                        />
                      </div>
                    </>
                  );
                })
                :
             
                inputSearch.length > 0 ?
                  inputSearch?.map((item, i) => {
                    const packImage = item.image
                    return (
                      <>
                        <div className="col-md-3 col-sm-4 mb-4"  key={i}>
                          <FeatureCard
                           
                           image={packImage}
                            title={item.title}
                            price={item.price}
                            des={item.details}
                            id={item.id}
                            imgVal={item.image}
                          />
                        </div>
                      </>
                    );
                  }) :
                  allPackage?.map((item, i) => {
                    const packImage = item.image
                    return (
                      <>
                        <div className="col-md-3 col-sm-4 mb-4"  key={i}>
                          <FeatureCard 
                            image={packImage}
                            title={item.title}
                            price={item.price}
                            des={item.details}
                            id={item.id}
                            imgVal={item.image}
                          />
                        </div>
                      </>
                    );
                  })
              }



















            </div>

            {/* Pagination */}
            <div className="row flexCenter m-0">
             




                {
                  totalPage > 1 &&

            <Pagination  totalPage={totalPage} 
            currentPageValue={changeCurrentPageValue} 
            nextPage={handleNextPage} previousPage={handlepreviousPage}/>

                 
                }







              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;