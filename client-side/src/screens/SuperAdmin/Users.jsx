import Card from "@mui/material/Card";

import {toast} from 'react-toastify'
import {baseURL, instance} from '../../axios/axios'
import dlt from '../../assets/Icons/dlt.png'
import axios from "axios";
import './users.css'



import React, { useState, useEffect } from "react";
import Pagination from "../../components/Elements/Pagination";

const Users = () => {
  const [activeUsers, setActiveUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; 
  const [fetchedUser, setfetchedUser] = useState([])



  const getAllUsers = () => {
    if ((users.length > 0)) { 
      return
    } else {
      instance.get("auth/all-users")
      .then((res) => {
        const userData = res?.data?.data || [];
        const activeUserIds = userData.filter(user => user.status === 'active').map(user => user.id);
        setActiveUsers(activeUserIds);
        setUsers(userData);
      });
    }
  };

  useEffect(() => {
    getAllUsers();
    
  }, []);


  const openDeleteModal = (userId) => {
    setSelectedUserId(userId);
    // Open the modal
    $("#dltPopUp").modal("show");
  };

  const closeDeleteModal = () => {
    setSelectedUserId(null);
    // Close the modal
    $("#dltPopUp").modal("hide");
  };

  const deleteUser = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 100);
    axios
      .delete(`${baseURL}auth/delete-user/${selectedUserId}`)
      .then(() => {
        // Refresh the user list after deletion
        getAllUsers();
        closeDeleteModal();
      })
      .catch((error) => {
        // Handle error if deletion fails
        console.error("Error deleting user:", error);
      });
  };


const toggleUserStatus = (userId) => {
  const userIndex = users.findIndex((user) => user.id === userId);
  const user = users[userIndex];
  const isActive = user?.user_status_title === "1" && user?.user_status_title !== "0";

  const updatedUser = {
    ...user,
    user_status_title: isActive ? "0" : "1",
  };

  const updatedUsers = [...users];
  updatedUsers[userIndex] = updatedUser;
  setUsers(updatedUsers);

  const newStatus = isActive ? "0" : "1";
  
  axios.put(`${baseURL}auth/block-user/${userId}`, {
      status: newStatus,
    })
    .then(() => {
      toast(` User status updated successfully`,{theme: "light",bgColor:'grey'});
    })
    .catch((error) => {
      console.error(`Error updating user ${userId} status:`, error);
    });
};






useEffect(() => {
  if (users.length > 0) {
    const totalPages = Math.ceil(users.length / pageSize);
    setTotalPage(totalPages);
  } else {
    getAllUsers()
  }
}, [users, totalPage]);

const changeCurrentPageValue= (value) => {
  getAllUsers(value)
  setCurrentPage(value); 
};

const handleNextPage = () => {

  if (currentPage < totalPage) {
    const nextPage = currentPage + 1;
    getAllUsers(nextPage);
    setCurrentPage(nextPage);

  }
};

const handlepreviousPage = () => {
  if (currentPage > 1) {
    const previousPage = currentPage - 1;
    getAllUsers(previousPage);
    setCurrentPage(previousPage);
  }
};

const paginatedData = users.slice((currentPage - 1) *  pageSize, currentPage * pageSize);


  return (
    <>
    
      <div className="row m-0 justify-content-between" style={{ backgroundColor: "rgb(147 212 241)" }}>
        <div className="col-md-1 p-0 ">
          <p className="p-3 "  style={{ fontFamily: "Axiforma", fontWeight: 700 , fontStyle: 'normal'}}>Users</p>
        </div>
        <div className="col-md-1 p-0 text-center">
          <p className="p-3" style={{ fontFamily: "Axiforma", fontWeight: 700 }}>Email</p>
        </div>
        <div className="col-md-1 p-0 text-center">
          <p className="p-3 ps-5" style={{ fontFamily: "Axiforma", fontWeight: 700 }}>Type</p>
        </div>
        <div className="col-md-1 p-0 text-center ps-5">
          <p className="p-3 " style={{ fontFamily: "Axiforma", fontWeight: 700 }}>Business</p>
        </div>
        <div className="col-md-1 p-0 ps-5 text-center">
          <p className="p-3 ps-5" style={{ fontFamily: "Axiforma", fontWeight: 700 }}>Status</p>
        </div>
        <div className="col-md-1 p-0 ">
          <p className="p-3 " style={{ fontFamily: "Axiforma", fontWeight: 700 }}>Action</p>
        </div>
      </div>

      {   
          paginatedData?.map((user,i)=>{
            return ( 
              <>
               <div className="row border justify-content-between ms-0" style={{backgroundColor:'white'}} key={i}>
          <div className="col-md-2" style={{ fontFamily: "Axiforma",  paddingTop: "10px", fontWeight: 500 }}> {user.name}  </div>
          <div className="col-md-2 ps-0" style={{ fontFamily: "Axiforma",  paddingTop: "10px", fontWeight: 500 }}> {user.email}  </div>
          <div className="col-md-2 " style={{ fontFamily: "Axiforma",  paddingTop: "10px", fontWeight: 500 }}> {user.type}  </div>
          <div className="col-md-2 " style={{ fontFamily: "Axiforma",  paddingTop: "10px", fontWeight: 500 }}> {user.business}  </div>
          <div className="col-md-1 text-center mt-0 pt-0" style={{ fontFamily: "Axiforma",  paddingTop: "10px", fontWeight: 500 }}> 
          <input className="checking" type="checkbox" 
             id={`switch${i}`} 
            checked={user?.user_status_title === "1" && user?.user_status_title !== "0"}
            onChange={() => toggleUserStatus(user.id)}
            />
            <label
             htmlFor={`switch${i}`}
             className="labelToggle"></label>
            </div>
          <div className="col-md-1 " style={{ fontFamily: "Axiforma",  paddingTop: "10px", fontWeight: 500 }}> 
          <img src={dlt} alt="" className=""  style={{width:'30px',height:'30px',cursor:'pointer' , }}
           onClick={() => openDeleteModal(user.id)} 
        />
            </div>
        
        </div>
              </>
            )
          })

      }
     
       
    

      <Pagination 
      totalPage={totalPage}
      currentPageValue={changeCurrentPageValue}
       nextPage={handleNextPage}
        previousPage={handlepreviousPage}
      />

      <div
        className="modal fade"
        id="dltPopUp"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title text-center"
                id="exampleModalLongTitle"
                style={{
                  fontWeight: "500",
                  fontSize: "1.25rem",
                  letterSpacing: "0.3px",
                  color: "rgb(11, 9, 59)",
                }}
              >
                Delete User
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div
              className="modal-body text-center"
              style={{
                fontWeight: "500",
                fontSize: "1.25rem",
                letterSpacing: "0.3px",
                color: "rgb(11, 9, 59)",
              }}
            >
              Are you sure you want to delete?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={closeDeleteModal}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={deleteUser}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
