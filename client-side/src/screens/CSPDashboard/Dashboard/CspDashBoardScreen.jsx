import React,{useState,useEffect} from "react";
import Button from "@mui/material/Button";
import CspDashItems from "./CspDashItems";
import "../../../style/Dashboard.css";

// import axios from '../../../axios/axios'
import { useDispatch,useSelector } from "react-redux";
import { getCurrentUserPackages } from "../../../redux/features/packages/packageApis";




export default function CspDashBoardScreen() {

  const [item,setItem] = useState("") 
  const [data, setData] = useState([]);
  const [searchData,setSearchData] = useState([])
  const [displayEmptySearch, setDisplayEmptySearch] = useState(false);
  const [userId, setUserId] = useState();

  let User = JSON.parse(localStorage.getItem("user")) || [];
 
  useEffect(() => {
    setUserId(User.user.id);
  }, []);
 
const dispatch = useDispatch();

  const currentUserPackages = useSelector((state) => state.currentUserPackages);

  useEffect(() => {
    const packageOfCurrentUser = async () => {
      const response = await dispatch(getCurrentUserPackages(userId));
      const userPackages = response.payload;
      setData(userPackages);
    };

    packageOfCurrentUser();
  }, [dispatch,userId]);


  useEffect(() => {
    if (currentUserPackages ) {
      setData (currentUserPackages);
    }
  }, [currentUserPackages]);

  const handleChange = (e) =>{
    setItem(e.target.value)
    if(item === ""){
      setSearchData([])
    }
  }

  
  const search = (e) => {
    e.preventDefault();
    if (item === "") {
      setSearchData([]);
      setDisplayEmptySearch(false);
      return; // Exit the function early
    }
    
       const searchInternalData = data?.packages?.filter((items) => {
      return items.title.toLowerCase().includes(item.toLowerCase());
    });
    
    setSearchData(searchInternalData);
    if(searchInternalData?.length === 0){
      setDisplayEmptySearch(true);
    }else{
      setDisplayEmptySearch(false);
    }
    
   
  }
  


  return (
    <>
      <div className="container my-1 m-5 ">
        <div className="row">
    
          <div className="container">
          <h1
            className=" fw-bold text-dark text-loweruppercase"
            style={{
              fontFamily: "Axiforma",
              fontWeight: 800,
              fontStyle: "normal",
              fontSize: "30px",
            }}
          >
            Latest Packages
            <br />
          </h1>
          <span
            className="mt-3 mb-4"
            style={{ fontSize: "14px", color: "grey", fontWeight: "lighter" }}
          >
            Enter the information to access all features
          </span>

            <div className="row">
              <div className="col-md-9 ">
                <input
                  type="text"
                  className="form-control w-100"
                  id="form"
                  placeholder="Search Here"
                  value={item}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-3 text-center">
                <div className="btnn">
                  <Button
                    variant="outlined"
                    // startIcon={<FilterListIcon />}
                    className="btn text-white "
                    style={{ backgroundColor: "#55acee", border: "none" }}
                    onClick={search}
                  >
                    Search
                  </Button>
                </div>
                
              </div>
            </div>

            <div className="mb-4 ff"></div>
          
          </div>
          <div className="empty-search text-center mb-3"style={{display: displayEmptySearch ? 'block' : 'none'}}>
               <h5 style={{ fontFamily: 'Axiforma', fontWeight: 800, fontStyle: 'normal' }} >Search Item not Found</h5>
          </div>
       
          <CspDashItems searchData={searchData} />
        </div>
      </div>
    </>
  );
}
