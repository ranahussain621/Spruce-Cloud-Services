


import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan, faEye,faPlus } from "@fortawesome/free-solid-svg-icons";
import {PackagesForSearch,deletePackage,fetchPackageDetails} from '../../redux/features/packages/packageApis'
import { toast } from "react-toastify";

import '../../style/packageDetailModal.css'

import SuperDetailPackages from "./SuperDetailPackages";
import SuperEditPackages from "./SuperEditPackages";
import AdminAddPackage from "./AdminAddPackage";
import Pagination from "../../components/Elements/Pagination";







export default function SuperPackgesList() {
  const [userId, setUserId] = useState();
  const [packageId, setPackageId] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [detailOPen, setdetailOPen] = useState(false);
  const [editerOpen, setediterOpen] = useState(false);
  const [updatedPackageId, setUpdatedPackageId] = useState(null);
const [addpackageOpen, setaddpackageOpen] = useState(false);
const [deletePackageAlert, setdeletePackageAlert] = useState(false);
const [deletePackageId, setdeletePackageId] = useState();
const pageSize = 10; 


const [totalPage, setTotalPage] = useState(0);
const [currentPage, setCurrentPage] = useState(1);


  const [userPackgesList, setUserPackagesList] = useState([]);
  let User = JSON.parse(localStorage.getItem("user")) || [];

  const dispatch = useDispatch();


  const SearchData = useSelector((state) => state.packages.SearchData);


 

  useEffect( async () => {
    setUserId(User?.user?.id);
      // await dispatch(fetchPackageDetails(User?.user?.id ) )
  }, []);
 
   const packageOfCurrentUser = async () => {
      const response = await dispatch(PackagesForSearch());
      const userPackages = response.payload;
     
      setUserPackagesList(userPackages);
    };

  useEffect(() => { 
    packageOfCurrentUser();
  }, [updatedPackageId]);

  const changeCurrentPageValue= (value) => {
    packageOfCurrentUser(value)
    setCurrentPage(value);
  };


  useEffect(() => {
    if (userPackgesList?.length > 0) {
      const totalPages = Math.ceil(userPackgesList?.length / pageSize);
      setTotalPage(totalPages);
    } else {
      packageOfCurrentUser();
    }
  }, [userPackgesList, totalPage]);

  const handleNextPage = () => {

    if (currentPage < totalPage) {
      const nextPage = currentPage + 1;
      packageOfCurrentUser(nextPage);
      setCurrentPage(nextPage);
  
    }
  };
  
  const handlepreviousPage = () => {
    if (currentPage > 1) {
      const previousPage = currentPage - 1;
      packageOfCurrentUser(previousPage);
      setCurrentPage(previousPage);
    }
  };


  
  const paginatedData = userPackgesList?.slice((currentPage - 1) *  pageSize, currentPage * pageSize);



  const updateIdInState = (id) => {
    setPackageId(id);
    dispatch(fetchPackageDetails(id));
  };




  const handleDeletePackage = (id) => {

    dispatch(deletePackage(id))
    .then(()=>{
      dispatch(PackagesForSearch())
    })
   

    // setUserPackagesList(userPackgesList.filter((item) => item.id !== id))
  };




  const editWindowOpen = () => {
    setediterOpen(!editerOpen);
  };
  useEffect(() => {
    if (updatedPackageId) {
      dispatch(fetchPackageDetails(updatedPackageId));
    }
  }, [dispatch, updatedPackageId]);






 




  const showAddPacakgeScreen= ()=>{
    setaddpackageOpen(!addpackageOpen)
  }

useEffect(()=>{
if(SearchData){
  setUserPackagesList(SearchData)
}
},[SearchData])

  
  return (
    <>
    <div className="col-11 p-0 m-0 d-flex justify-content-center">
      <div>
                  <div className="row m-0 mb-3">
        <div className="col text-start">
          <h2
            style={{
              fontFamily: "Axiforma",
              fontWeight: 500,
              fontStyle: "normal",
            }}
          >
            Packages List
          </h2>
        </div>
        <div className="col text-end">
          <button className=" btn btn-primary w-50" style={{backgroundColor:'#007BFF'}} onClick={showAddPacakgeScreen}><div className="d-flex">
              <FontAwesomeIcon icon={faPlus} />
              <p className="ms-2 fw-bold">Add New Package</p>
          </div>
           </button>
          {addpackageOpen && (
                  <div className="modalForAddPackage ">
                  <div className="modal-contentForAddPackage">
                   <div className=" m-0 p-0 d-flex justify-content-end">
                       <button type="button" className="btn-close " onClick={showAddPacakgeScreen} aria-label="Close"> </button>
                   </div>
                 
                 
                 <AdminAddPackage AddWindow={showAddPacakgeScreen}/>
                  </div>
                </div>


                 
                  )}
        </div>
      
      </div>

      <div className="col mb-4">
        <p
          className=" col-12 mt-1 text-muted text-md-start text-center ps-0 "
          style={{
            fontFamily: "Axiforma",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "14px",
          }}
        >
          The most important feature in the package, editing section is the
          feature adding part. When adding package here, do not ignore to fill
          in all the required fields completely and follow the package adding
          rules.
        </p>
      </div>

      <div className="row m-0 " style={{ backgroundColor: "rgb(147 212 241)" }}>
        <div className="col-3 p-0 ">
          <p className="p-3 "  style={{ fontFamily: "Axiforma", fontWeight: 700 , fontStyle: 'normal'}}>Package Name</p>
        </div>
        <div className="col-5 p-0 ">
          <p className="p-3" style={{ fontFamily: "Axiforma", fontWeight: 700 }}>Description</p>
        </div>
        <div className="col-2 p-0 text-center">
          <p className="p-3" style={{ fontFamily: "Axiforma", fontWeight: 700 }}>Price</p>
        </div>
        <div className="col-2 p-0 text-center">
          <p className="p-3 " style={{ fontFamily: "Axiforma", fontWeight: 700 }}>Action</p>
        </div>
      </div>



{
  paginatedData?.length > 0 ? (
    paginatedData?.reverse()?.map((item, i) => {
    return (
      <div className="col-12 border w-100 p-0" key={i} style={{backgroundColor:'white'}}>
        <div className="row m-0" >
          <div className="col-3 p-0">
            <p
              className="p-3"
              style={{
               
                fontFamily: "Axiforma",
                paddingTop: "10px",
                fontWeight: 500
              }}
            >
              {item.title}
            </p>
          </div>
          <div className="col-5 p-0">
            <p
              className="p-3 text-muted"
              style={{ fontFamily: "Axiforma", fontWeight: 500, fontSize:'12px' }}
            >
              
              {item.details?.split(' ').slice(0, 15).join(' ')}
          {item.details?.split(' ').length > 15 ? '...' : ''}
            </p>
          </div>
          <div className="col-2 text-center p-0">
            <p
              className="p-3"
              style={{ fontFamily: "Axiforma", fontSize:'12px' ,
               fontWeight: 500 }}
            >
             CAD {item.price}
            </p>
          </div>
          <div className="col-2 d-flex text-center">
            <div className="d-flex p-3">
              <div className="mx-1"> <a
              href="#"
              onClick={() => {
                updateIdInState(item.id);
                setIsOpen(true);
                editWindowOpen();
              }}
            >
              <FontAwesomeIcon icon={faPen} />
            </a></div>
              <div className="mx-1"> <a href="#" onClick={() =>{ 
              setdeletePackageAlert(!deletePackageAlert)
              setdeletePackageId(item.id)
              }}>
              <FontAwesomeIcon icon={faTrashCan} style={{color:'red'}}/>
            </a></div>
              <div className="mx-1">  <a
              href="#"
              onClick={() => {
                updateIdInState(item.id);
                setIsOpen(false);
                setdetailOPen(!detailOPen);
              }}
            >
              <FontAwesomeIcon icon={faEye} />
            </a>
</div>
           

           

            {deletePackageAlert && 
      <div className="modalForAdminDeletePackage ">
      <div className="modal-contentForAdminDeletePackage">
      <div className=" m-0 p-0 d-flex justify-content-end">
        <button type="button" className="btn-close " onClick={() => setdeletePackageAlert(!deletePackageAlert)} aria-label="Close"> </button>
      </div>
        <h4 className="mb-3"  style={{ fontFamily: "Axiforma",
               fontWeight: 700 }}>Delete Package</h4>
        <p className="mb-3 text-muted">Are you sure you want to delete Package?</p>
        <div className="row">
          <div className="col"></div>
          <div className="col text-end m-0 p-0">
           
            <button className="btn btn-danger" onClick={() =>{
               handleDeletePackage(deletePackageId)
               setdeletePackageAlert(!deletePackageAlert)
               toast.success("Package Deleted Successfully", {
                position: "top-center",
                autoClose: 1000,
              });
            }
              
               }>Delete</button>
          </div>
        </div>

      
      </div>
    </div> }

          






            </div>
           




          </div>
        </div>
        {packageId === item.id && (
          <>
            {!isOpen
              ? detailOPen && (

                <div className="modalForPackageDetail ">
                <div className="modal-contentForPackageDetail">
                <div className=" m-0 p-0 d-flex justify-content-end">
                  <button type="button" className="btn-close " onClick={()=>{  setdetailOPen(!detailOPen)}} aria-label="Close"> </button>
                </div>
                  
                  <SuperDetailPackages
                    packageId={packageId}
                    onUpdatePackage={setUpdatedPackageId}
                  />
                </div>
              </div>




                
                )
              : editerOpen && (
                <div className="modalForPackageEdit ">
                <div className="modal-contentForPackageEdit">
                <div className=" m-0 p-0 d-flex justify-content-end">
                <button type="button" className="btn-close " onClick={editWindowOpen} aria-label="Close"> </button>

                </div>
                  <SuperEditPackages
                    packageId={packageId}
                    editWindowOpen={editWindowOpen}
                    onUpdatePackage={setUpdatedPackageId}

                  />
                </div>
              </div>


               
                )}
          </>
        )}
      </div>
    );
  })
  )
    : 
    (
      <div className="col-11 text-center mt-3">
         <h3 style={{ fontFamily: "Axiforma", fontWeight: 800 ,color:'#757575'}}>No Packages</h3>
         </div>
    )
   
}



    </div>

      </div>
     

      <Pagination
      totalPage={totalPage}
      currentPageValue={changeCurrentPageValue}
       nextPage={handleNextPage}
        previousPage={handlepreviousPage}
      />
  
    </>
  );
}
