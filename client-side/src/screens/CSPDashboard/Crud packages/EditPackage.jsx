import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPackageDetails,EditPackageForDashboard,attributeList, showPackages, getCurrentUserPackages} from "../../../redux/features/packages/packageApis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";



export default function EditPackage({ packageId,editWindowOpen}) {
  const [getAttributeList, setGetAttributeList] = useState();
  const [image, setImage] = useState(null);
  const [userImage, setuserImage] = useState()
  const [editedValues, setEditedValues] = useState({
    title: "",
    details: "",
    price: "",
    added_by: "",
    image: null,
    package_id: null,

    attributes: [],
  });
  const USER = useSelector((state) => state.auth.user)

  const dispatch = useDispatch();




  useEffect(() => {
    const getList = async () => {
      const response = await dispatch(attributeList());
      setGetAttributeList(response.payload)
    }
    getList()
  }, [])




  useEffect(() => {
    return () => {
      if (image) URL.revokeObjectURL(image);
    };
  }, [image]);







  useEffect(() => {
    const fetchPackageData = async () => {
      try {
        const response = await dispatch(fetchPackageDetails(packageId));
        const packageDetails = response.payload;
      
        if (packageDetails && packageDetails.packages.length > 0) {
          const { title, details, price, added_by, id, image } =
            packageDetails.packages[0];
          const attributes = packageDetails.attributes.map((attribute) => ({
            name: attribute.name,
            attribute_id: attribute.attributeid,
            value: attribute.value,
          }));

          setEditedValues({
            ...editedValues,
            title,
            details,
            price,
            added_by,
            image,
            package_id: id,
            attributes,
          });
        }
      } catch (error) {
        // Handle error during package details fetching
        console.error("Error fetching package details:", error);
      }
    };

    fetchPackageData();
  }, [dispatch, packageId]);


  if (!editedValues) {
    return <p>Loading package details...</p>;
  }

  const handleAttributeSelect = (e) => {
    const selectedValue = e.target.value;
    const [selectedId, selectedName] = selectedValue.split("-");

    // Create a new attribute object with the selected values
    const newAttribute = {
      attribute_id: selectedId,
      name: selectedName,
      value: "", // Set the initial value as an empty string or any default value you prefer
    };

    // Update the editedValues state with the new attribute
    setEditedValues((prevValues) => ({
      ...prevValues,
      attributes: [...prevValues.attributes, newAttribute],
    }));
  };
 

  const user = JSON.parse(localStorage.getItem('user'))



  
  
  const fileInputRef = useRef(null);

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setuserImage(file)
    setEditedValues((prevState) => ({
      ...prevState,
      image: file,
    }));
  };


  const submit = async (e) => {
    e.preventDefault();
  
    // Check if editedValues is defined and has the 'title' property
    if (editedValues && editedValues.title) {
      const formData = new FormData();
  
      formData.append("title", editedValues.title);
      formData.append("price", editedValues.price);
      formData.append("details", editedValues.details);
      formData.append("added_by", editedValues.added_by);
      formData.append("image", editedValues.image);
      formData.append("package_id", editedValues.package_id);
      editedValues.attributes.forEach((attribute, index) => {
        formData.append(`attributes[${index}]`, JSON.stringify(attribute));
      });
  
      const response = await dispatch(EditPackageForDashboard(formData));
      const userDetailInfo = response.payload;
  
      toast.success(userDetailInfo?.message, {
        position: "top-center",
        autoClose: 1000,
      });
     await dispatch( getCurrentUserPackages( user?.user?.id ) )
     await dispatch( fetchPackageDetails(user?.user?.id ) )
     editWindowOpen()
    } else {
      console.error("Invalid editedValues or missing 'title' property.");
    }
  };

  return (
    <>
      <div className="" style={{ backgroundColor: "rgb(251 251 251)" }}>
        <form onSubmit={submit}>
          <div className="row justify-content-center m-0 p-0">
            <div className="col-lg-1 col-md-0 col-0 d-md-none"></div>
            <div className="col-lg-8 col-md-9 col-sm-8 col-xs-8 col-8 m-0 p-0">
              <div className="col p-0 m-0">
                <h4 style={{ fontFamily: "Axiforma", fontWeight: 600, fontStyle: 'normal' }}>Edit Package</h4>
              </div>
              <div className="col mt-4 mb-4 p-0 m-0">
                <p className="text-muted" style={{ fontFamily: "Axiforma", fontWeight: 400, fontSize: '14px', fontStyle: 'normal' }}>
                  The most important feature in the package, editing section is
                  the feature adding part. When adding package here, do not
                  ignore to fill in all the required fields completely and
                  follow the package adding rules.
                </p>
              </div>
              <div className="row mb-3 m-0 p-0">
                <div className="col-md col-sm col-xs-12 col-12 m-0 p-0 me-5">
                  <label
                    htmlFor="pack_title01"
                    className="form-label fw-bold m-0  text-start"
                    style={{ fontFamily: "Axiforma", fontWeight: 600, fontSize: '14px', fontStyle: 'normal' }}
                  >
                    Package Title
                  </label>

                  <input
                    type="text"
                    className="form-control border shadow-sm "
                    id="pack_title01" 
                    name="title"
                    value={editedValues.title}
                    onChange={(e) => {
                      setEditedValues({
                        ...editedValues,
                        title: e.target.value,
                      });
                    }}
                
                  />
                </div>
                <div className="col-md col-sm co-xs-12 col-12 m-0 p-0">
                  <label
                    htmlFor="pack_price"
                    className="form-label fw-bold m-0  text-start"
                    style={{ fontFamily: "Axiforma", fontWeight: 600, fontSize: '14px', fontStyle: 'normal' }}
                  >
                    Price
                  </label>

                  <input
                    type="text"
                    className="form-control border shadow-sm "
                    id="pack_price"
                    value={editedValues.price}
                    onChange={(e) => {
                      setEditedValues({
                        ...editedValues,
                        price: e.target.value,
                      });
                    }}
                    name="price"
                  />
                </div>
              </div>

              <div className="col m-0 p-0">
                <label
                  className="form-label fw-bold m-0 text-start"
                  style={{ fontFamily: "Axiforma", fontWeight: 600, fontSize: '14px', fontStyle: 'normal' }}
                  htmlFor="form6Example7"
                >
                  Description<small className="text-muted"> (500 char)</small>
                </label>
                <textarea
                  className="form-control border card fs-6"
                  id="form6Example7"
                  maxlength="500"
                  rows="5"
                  value={editedValues.details}
                  onChange={(e) => {
                    setEditedValues({
                      ...editedValues,
                      details: e.target.value,
                    });
                  }}
                  name="details"
                ></textarea>
              </div>


              <div className="row mt-3 m-0 p-0">
                <div className="col m-0 p-0">
                  <label
                    htmlFor="attribute_name"
                    className="form-label  m-0  text-start"
                    style={{ fontFamily: "Axiforma", fontWeight: 600, fontSize: '14px', fontStyle: 'normal' }}
                  >
                    Attribute
                  </label>
                </div>
                <div className="col">
                  <label
                    htmlFor="attribute_value"
                    className="form-label  m-0  text-start"
                    style={{ fontFamily: "Axiforma", fontWeight: 600, fontSize: '14px', fontStyle: 'normal' }}
                  >
                    Value
                  </label>
                </div>
                <div className="col-1"></div>
              </div>

              {editedValues.attributes &&
                editedValues.attributes.map((item, i) => {
                  const handleAttributeValueChange = (e) => {
                    const updatedAttributes = [...editedValues.attributes];
                    updatedAttributes[i].value = e.target.value;

                    setEditedValues({
                      ...editedValues,
                      attributes: updatedAttributes,
                    });
                  };

                  const handleRowClose = (e) => {
                    e.preventDefault();
                    const updatedAttributes = [...editedValues.attributes];
                    updatedAttributes.splice(i, 1);

                    setEditedValues({
                      ...editedValues,
                      attributes: updatedAttributes,
                    });
                  };

                  return (
                    <div className="row mt-1 m-0 p-0" key={i}>
                      <div className="col m-0 p-0">
                        <input
                          type="text"
                          className="form-control border shadow-sm"
                          id="attribute_name"
                          value={item.name}
                          name="title"
                        />
                      </div>
                      <div className="col pe-0">
                        <input
                          type="text"
                          className="form-control border shadow-sm"
                          id="attribute_value"
                          value={item.value}
                          onChange={handleAttributeValueChange}
                          name="title"
                        />
                      </div>
                      <div className="col-1 text-end m-0 p-0">
                        <a
                          href="#"

                          onClick={handleRowClose}
                        > <FontAwesomeIcon icon={faTrashCan} style={{ color: 'red' }} /> </a>
                      </div>
                    </div>
                  );
                })}
              <div className="col mt-3 p-0 m-0">
                <label

                  className="form-label fw-bold m-0  text-start"
                  style={{ fontFamily: "Axiforma", fontWeight: 600, fontSize: '14px', fontStyle: 'normal' }}
                >
                  Attribute List
                </label>
              </div>

              <select
                className="form-select form-control-sm mt-1 shadow-sm"
                aria-label="Default select example"
                onChange={handleAttributeSelect}
              >
                <option disabled>Select Attributes</option>
                {getAttributeList &&
                  getAttributeList?.attributes?.map((item, i) => {
                    const serializedValue = `${item.id}-${item.name}`;
                    return (
                      <option key={i} value={serializedValue}>
                        {item.name}
                      </option>
                    );
                  })}
              </select>

              <div className="mt-3 text-end">
                <button type="submit" className="btn btn-primary">
                  {" "}
                  Update
                </button>
              </div>
            </div>

            <div className="col-md-2 col-sm-4 col-xs-4 col-4 ">
              <div className="profile-image-container">
                <input
                  className=''
                  type="file"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                  accept="image/*"
                />

                <div className="avatar" onClick={handleAvatarClick}>


                  <img

                    src={
                      editedValues?.image && !userImage ? editedValues?.image :
                        userImage ? URL.createObjectURL(userImage) :
                          !userImage && !editedValues?.image ? 'https://bootdey.com/img/Content/avatar/avatar7.png' : ''
                    }



                    className="img-circle img-fluid img-thumbnail rounded-circle"
                    style={{ width: '250px', height: '250px', position: 'relative' }}
                    alt="Avatar"
                  />





                </div>
              </div>
            


            </div>

          </div>

        </form>
      </div>
    </>
  );
}
