import React, { useState, useEffect, useReducer } from "react";
import "../../style/Attribute.css";
import { toast } from "react-toastify";
import { attributeList,
   addNewAttribute,
   cspDashboard, 
   getCurrentUserPackages,
   PackagesForSearch} from '../../redux/features/packages/packageApis';
import { useDispatch, useSelector } from "react-redux";
import packageImage from '../../assets/img/card_img.png'

import {setCurrentUserPackages,setAdminEditedPackages} from '../../redux/features/packages/currentUserPackagesSlice';
import { showPackages } from "../../redux/features/packages/packageApis";
const initialState = {
  title: "",
  details: "",
  price: "",
  attributes: [],
};

const updateDashboardValue = (prev, next) => {
  switch (next.type) {
    case "package": {
      const { type, ...element } = next;
      return { ...prev, ...element };
    }

    case "attributes": {
      return {
        ...prev,
        attributes: [
          ...prev.attributes,
          {
            attribute_id: next.attributeID,
            value: next.attributeValue,
            attributeTitle: next.attributeTitle,
          },
        ],
      };
    }

    case "reset": {
      return {
        title: "",
        details: "",
        price: "",
        attributes: [],
      };
    }
    default:
      return;
  }
};

export default function AddPackage({ AddWindow }) {
  const [packagesList, setpackagesList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [image, setImage] = useState(null);
  const [newAtrributes, setnewAtrributes] = useState({
    title: "",
    
  });

  const [dashboardValue, dispatchDashboardValue] = useReducer(
    updateDashboardValue,
    initialState
  );

  const [attributeVal, setAttributeVal] = useState({
    attributeID: "",
    attributeTitle: "",
    attributeValue: "",
  });

  const { packages } = useSelector((state) => state.packages);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(attributeList());
  }, [dispatch]);

  const onchange = (val) => {
    setAttributeVal((prevValue) => ({
      ...prevValue,
      ...val,
    }));

    if (val?.attributeTitle) {
      packages?.attributes?.attributes?.forEach((element) => {
        if (val.attributeTitle === element.name) {
          setAttributeVal((prev) => ({ ...prev, attributeID: element.id }));
        }
      });
    }
    return;
  };

  const handleImageChange = (e) => {
    if (e.target.files.length) {
      const img= e.target.files[0];
      setImage(img);
    }
  };


//this 
  useEffect(() => {
    return () => {
      if (image) URL.revokeObjectURL(image);
    };
  }, [image]);






  const [selectedAttributes, setSelectedAttributes] = useState([]);


  const addAttributesInTable = (e) => {
    e.preventDefault();

    if (
      typeof attributeVal.attributeTitle !== 'string' ||
      typeof attributeVal.attributeValue !== 'string' ||
      attributeVal.attributeTitle === "" ||
      attributeVal.attributeValue === ""
    ) {
      toast.error('Please fill all credentials', {
        position: "top-center",
        autoClose: 1000,
      });

      return;
    }

    const isAttributeSelected = selectedAttributes.some(
      (attr) => attr.attributeTitle === attributeVal.attributeTitle
    );

    // if (isAttributeSelected) {
    //   toast.error('Attribute already selected',{
    //     position: "top-center",
    //  autoClose: 1000,
    //   });
    //   return;
    // }



    dispatchDashboardValue({ type: "attributes", ...attributeVal });

    setSelectedAttributes([...selectedAttributes, attributeVal]);
    setAttributeVal({
      attributeTitle: "",
      attributeValue: "",
      attributeID: "",
    });
  };

  let currentUser = JSON.parse(localStorage.getItem("user"));





  const submit = (e) => {
    e.preventDefault();
    if (
      dashboardValue.title === "" ||
      dashboardValue.price === "" ||
      dashboardValue.details === "" ||
      dashboardValue.attributes.length === 0
    ) {
      toast.error("Please fill all the credentials", {
        position: "top-center",
        autoClose: 1000,
      });
      return;
    }
  
    const packageData = new FormData();
    packageData.append("title", dashboardValue.title);
    packageData.append("price", dashboardValue.price);
    packageData.append("details", dashboardValue.details);
    for (let index = 0; index < dashboardValue.attributes.length; index++) {
      const attribute = dashboardValue.attributes[index];
      packageData.append(`attributes[${index}]`, JSON.stringify(attribute));
    }
    
      
    packageData.append("added_by", currentUser.user.id);
    packageData.append("image", image);

  
    dispatch(cspDashboard(packageData))
      .then(() => {
        dispatch(attributeList());
        dispatchDashboardValue({ type: "reset" });
        dispatch(PackagesForSearch());
        dispatch(showPackages());
        toast.success("Package Added successfully", {
          position: "top-center",
          autoClose: 1000,
        });
  
        const editedValuedispatch = async () => {
          const response = await dispatch(getCurrentUserPackages(currentUser.user.id));
          dispatch(setCurrentUserPackages(response.payload));
        };
        editedValuedispatch();
      })
      .catch((error) => {
        // Handle error during package editing
        toast.error("Failed to Add package. Please try again later.", {
          position: "top-center",
          autoClose: 1000,
        });
      });
  
    AddWindow();
  };
  
  

  useEffect(() => {


  }, [packagesList]);

  const newAttribute = (e) => {
    e.preventDefault();

    if (newAtrributes.title === "" ) {

      toast.error("Please Add title of New Attribute", {
        position: "top-center",
        autoClose: 1000,
      });
      
      return;
    }
    dispatch(addNewAttribute(newAtrributes))
    .then(()=>{
       dispatch(attributeList());
    setnewAtrributes({
      title: "",
    });
    })
   
  };

  const toggleOpen = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };



    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatchDashboardValue({ ...dashboardValue, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
        } else {
            setErrors(validationErrors);
        }
        submit()
    };

    const validateForm = () => {
        let errors = {};

        if (!dashboardValue.title) {
            errors.title = "title is required";
        }
        if (!dashboardValue.price) {
          errors.price = "Price is required";
      }
      if (!dashboardValue.details) {
        errors.details = " details is required";
    }
    if (dashboardValue?.attributes?.length === 0) {
      errors.attributes = "value is required";
  }
      

        return errors;
    };

  // ==========validation functionality end===========
  return (
    <>
      <div className="col-12 bg-light">
        <div className="row   text-center">
          <div className="col-md-1"></div>
          <div className="col-md-9 col-sm-10 col-12 justify-content-center">
            {/* <form action="POST" onSubmit={submit}> */}
            <form action="POST"   onSubmit={handleSubmit}>

              <div
                className="col-md-12 text-md-start text-center col-sm-12 col-12 ps-0 p "
               
              >
                <h3 
                 style={{
                  fontFamily: "Axiforma",
                  fontWeight: 600,
                  fontStyle: "normal",
                }}>Add Package</h3>
              </div>
              <div
                className="col-md-12 col-sm-12 col-12 mt-3 text-muted text-md-start text-center ps-0 "
                style={{
                  fontFamily: "Axiforma",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "14px",
                }}
              >
                <p>
                  The most important feature in the package, editing section is
                  the feature adding part. When adding package here, do not
                  ignore to fill in all the required fields completely and
                  follow the package adding rules.
                </p>
              </div>

              <div className="col-12 d-flex flex-row align-items-center mb-3 p-0 mt-3">
                <div className="mb-2 me-5">
                  <label
                    htmlFor="pack_title01"
                    className="form-label fw-bold m-0  text-start"
                    style={{ fontSize: "14px" }}
                  >
                    Package Title
                  </label>

                  <input
                    type="text"
                    className="form-control shadow-sm border  "
                    id="pack_title01"
                    value={dashboardValue.title}
                    name="title"
                    onChange={(e) => {
                      dispatchDashboardValue({
                        type: "package",
                        title: e.target.value,
                      });
                    }}
                   
                  />
      {errors.title && <div className='text-danger'>{errors.title}</div>}

                </div>
                <div className="mb-2 row me-5">
                  
                <div className="col-10 p-0">
                     <label
                    htmlFor=""
                    className="form-label fw-bold m-0 text-start"
                    style={{ fontSize: "14px" }}
                  >
                    Package Price
                  </label>
                  <input
                    type="number"
                    step="any"
                    className="form-control shadow-sm border"
                    id=""
                    value={dashboardValue.price}
                    name="price"
                    onChange={(e) => {
                      dispatchDashboardValue({
                        type: "package",
                        price: e.target.value,
                      });
                    }}
                   
                  />
                      {errors.price && <div className='text-danger'>{errors.price}</div>}
                  </div>
                  <div className="col-2 d-flex align-items-end p-0">
     <div className="border rounded-2 border-start-0">
    <p className="p-1 fw-bold tex-muted"
    style={{color:'#7c7a7a'}}>CAD</p>
     </div>
                  </div>
                 
                 

                </div>
              </div>

              {/* Description */}
              <div className="col-12 d-flex flex-row align-items-center mb-3 p-0 ">
                <div className=" mb-4 me-5">
                  <label
                    className="form-label fw-bold m-0 text-start"
                    style={{ fontSize: "14px" }}
                    htmlFor="form6Example7"
                  >
                    Description<small className="text-muted"> (500 char)</small>
                  </label>
                  <textarea
                    className="form-control shadow-sm border  fs-6"
                    maxlength="500"
                    rows='4'
                    id="form6Example7"
                 
                    value={dashboardValue.details}
                    name="details"
                    onChange={(e) => {
                      dispatchDashboardValue({
                        type: "package",
                        details: e.target.value,
                      });
                    }}
             
                  >
                  

                  </textarea>
                  {errors.details && <div className='text-danger'>{errors.details}</div>}

                </div>
              </div>


              <div
                className="mb-3 text-md-start text-center p-0"
                
              >
                <h4 
                style={{
                  fontFamily: "Axiforma",
                  fontWeight: 500,
                  fontStyle: "normal",
                }}>Add Attributes</h4>
              </div>

              {/* Add new Attribute */}

              {isOpen && (
                <div className="bg-light p-0">
                  <div className="col-12 mb-2 p-0">
                    <div className="form-outline pe-5 ps-0">
                      <label
                        className="form-label fs-5 mb-1 text-start"
                        htmlFor="form6Example1"
                      >
                        New Attribute
                      </label>
                      <input
                        placeholder="Title"
                        className="form-control shadow-sm border "
                        id="form2"
                        type="text"
                        value={newAtrributes.title}
                        name="newAtrributes"
                        onChange={(e) => {
                          setnewAtrributes((prevValue) => ({
                            ...prevValue,
                            title: e.target.value,
                          }));
                        }}
                      />
                    </div>
                  </div>

                  <div className=" col-12 mt-2 mb-2 ps-0 text-start ">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm "
                      onClick={newAttribute}
                    >
                      Add Attribute
                    </button>
                  </div>
                </div>
              )}

              {/* Attribue Selection  */}

              <div className=" col-12 d-flex flex-row align-items-center mb-3  p-0">
                <div className=" mb-3 me-5">
                  <div className="form-outline p-0 m-0">
                    {packages?.attributes?.attributes && (
                      <div>
                        <label
                          className="form-label fw-bold m-0 text-start"
                          style={{ fontSize: "14px" }}
                          htmlFor="multiselection"
                        >
                          Select Attributes
                        </label>
                        <div
                          className="app-select  p-0 rounded-0"
                          id="multiselection"
                        >
                          {/* Dynamic Attributes List */}
                          <select
                            className="form-select "
                            aria-label=".form-select-sm example"
                            value={attributeVal.attributeTitle}
                            onChange={(e) => {
                              onchange({ attributeTitle: e.target.value });
                            }}
                            name="attributeTitle"
                          >
                            <option
                              selected
                              disabled={
                                attributeVal.attributeTitle ? true : false
                              }
                            >
                              Select Attributes
                            </option>

                            {packages?.attributes?.attributes?.map(
                              (attributeList, i) => {
                                return (
                                  <option
                                    selected
                                    key={i}
                                    value={attributeList.name}
                                  >
                                    {attributeList.name}
                                  </option>
                                );
                              }
                            )}
                          </select>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className=" mb-3 me-5">
                  <div className="form-outline p-0 m-0">
                    <label
                      className="form-label fw-bold m-0 text-start"
                      style={{ fontSize: "14px" }}
                      htmlFor="form2"
                    >
                      Value
                    </label>

                    <input
                      placeholder="value"
                      className="form-control shadow-sm border bg-white "
                      id="form2"
                      type="text"
                      value={attributeVal.attributeValue}
                      name="attributeValue"
                      onChange={(e) => {
                        onchange({ attributeValue: e.target.value });
                      }}
                     
                    />
                           {errors.attributes && <div className='text-danger'>{errors.attributes}</div>}

                  </div>
                </div>
              </div>

              <div className=" col-12 p-0  mb-3">
                <div className="d-flex">
                  <button
                    className=" btn btn-primary btn-sm me-2  btn-color"
                    type="submit"
                    onClick={addAttributesInTable}
                  >
                    {" "}
                    ADD{" "}
                  </button>

                  <button
                    type="button"
                    onClick={toggleOpen}
                    className="btn btn-primary btn-sm  btn-color"
                  >
                    Add New Attribute{" "}
                  </button>
                </div>
              </div>

              <label
                className="form-label fw-bold m-0 text-start"
                style={{ fontSize: "14px" }}
                htmlFor="table_id"
              >
                Attributes and values
              </label>
              <div className="col-12 d-flex flex-row align-items-center p-0 mb-2 ">
                <div className=" mb-2 me-5">
                  <table
                    className=" table table-striped border table-sm "
                    style={{ fontSize: "14px" }}
                  >
                    <thead className="text-center">
                      <tr className="row m-0 ">
                        <th className="col fw-bold" scope="col">Attributes</th>
                        <th className="col fw-bold" scope="col">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dashboardValue?.attributes?.map((item, i) => {
                        return (
                          <>
                            {item.newAtrributesTitle ||
                              item.newAtrributesValue ? (
                              <tr key={i} className="text-center m-0">
                                <td>{item.newAtrributesTitle}</td>
                                <td>{item.newAtrributesValue}</td>
                              </tr>
                            ) : (
                              <tr key={i} className="row text-center m-0">
                                <td className="col">{item.attributeTitle}</td>
                                <td className="col">{item.value}</td>
                              </tr>
                            )}
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="row m-0">
                <div className="col  p-0 text-start">
      
                  <button
                    type="button"
                    className="btn btn-primary btn-sm btn-color "
                    onClick={submit}
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>

          </div>
          <div className="col-md-2">
          <div style={{ marginTop: '100px' }}>
  {image ? (
    <img
      src={URL.createObjectURL(image)}
      className="img-fluid"
      style={{ width: '120px' }}
      alt="profile"
    />
  ) : (
    <img
      src={packageImage}
      className="img-fluid"
      style={{ width: '120px' }}
      alt="avatar"
    />
  )}

  <p className="text-muted">Upload a different photo...</p>
  <input
    type="file"
    accept=".jpeg, .png, .jpg"
    className="form-control img-fluid"
    onChange={handleImageChange}
  />
</div>

    

          </div>
        </div>
      </div>
    </>
  );
}
