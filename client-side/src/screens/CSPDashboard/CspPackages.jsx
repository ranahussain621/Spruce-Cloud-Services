import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan, faEye,faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  getCurrentUserPackages,
  fetchPackageDetails,
  deletePackage,
  PackagesForSearch,
  showPackages,
} from "../../redux/features/packages/packageApis";
import {setCurrentUserPackages} from '../../redux/features/packages/currentUserPackagesSlice'
import { toast } from "react-toastify";
import PackageDetails from "./Crud packages/PackageDetails";
import EditPackage from "./Crud packages/EditPackage";
import '../../style/packageDetailModal.css'
import AddPackage from "./AddPackage";


export default function CspPackages() {
  const [userId, setUserId] = useState();
  const [packageId, setPackageId] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [detailOPen, setdetailOPen] = useState(false);
  const [editerOpen, setediterOpen] = useState(false);
  const [updatedPackageId, setUpdatedPackageId] = useState(null);
const [addpackageOpen, setaddpackageOpen] = useState(false);
const [deletePackageAlert, setdeletePackageAlert] = useState(false);
const [deletePackageId, setdeletePackageId] = useState();
  const [userPackgesList, setUserPackagesList] = useState([]);
  let User = JSON.parse(localStorage.getItem("user")) || [];


  const {packages} = useSelector((state)=>state?.packages?.userPackages)
  console.log("🚀 ~ file: EditPackage.jsx:51 ~ EditPackage ~ packages:", packages)
     

  

  const dispatch = useDispatch();
  const currentUserPackages = useSelector((state) => state.currentUserPackages);

  useEffect(() => {
    setUserId(User.user.id);
  }, []);



  const updateIdInState = (id) => {
    setPackageId(id);
    dispatch(fetchPackageDetails(id));
  };



  const handleDeletePackage = (id) => {
    dispatch(deletePackage(id))
  
      .then(() => {
       
        dispatch(PackagesForSearch())
        dispatch(showPackages())

        const editedValueDispatch = async () => {
          const getValue = await dispatch(getCurrentUserPackages(userId));
          
          dispatch(setCurrentUserPackages(getValue.payload));
  
          setUserPackagesList({
            ...userPackgesList,
            packages: userPackgesList.packages.filter((item) => item.id !== id),
          });
        };
        editedValueDispatch()

       
      })


     
      .catch((error) => {
        // Handle error during package deletion
        toast.error("Failed to delete package. Please try again later.", {
          position: "top-center",
          autoClose: 1000,
        });
      });

      toast.success("Package deleted successfully", {
        position: "top-center",
        autoClose: 1000,
      })

  };
  
  


  const editWindowOpen = () => {
    setediterOpen(!editerOpen);
  };
  useEffect(() => {
    if (updatedPackageId) {
      dispatch(fetchPackageDetails(updatedPackageId));
    }
  }, [dispatch, updatedPackageId]);



  useEffect(() => {
    const packageOfCurrentUser = async () => {
      const response = await dispatch(getCurrentUserPackages(userId));
      const userPackages = response.payload;
      setUserPackagesList(userPackages);
    };

    packageOfCurrentUser();
  }, [dispatch, userId, updatedPackageId]);


  
  const showAddPacakgeScreen= ()=>{
    setaddpackageOpen(!addpackageOpen)
  }



  useEffect(() => {
    if (currentUserPackages) {
      setUserPackagesList(currentUserPackages);
    }
  }, [currentUserPackages]);



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
                 
                 <AddPackage AddWindow={showAddPacakgeScreen}/>
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

      { packages?.length === 0? (
        
         <div className="col-11 text-center mt-3">
         <h3 style={{ fontFamily: "Axiforma", fontWeight: 800 ,color:'#757575'}}>No Packages</h3>
         </div>
      )
    :
    
    (
      packages?.map((item, i) => {
      return (
        <div className="col-12 border w-100 p-0" style={{backgroundColor:'white'}}>
          <div className="row m-0" key={i}>
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
        <div className="modalForDeletePackage ">
        <div className="modal-contentForDeletePackage">
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
                 setdeletePackageAlert(!deletePackageAlert)   }
                
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
                    
                    <PackageDetails
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
                    <EditPackage
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
    }))
 
   }
    </div>

      </div>
     
  
    </>
  );
}
