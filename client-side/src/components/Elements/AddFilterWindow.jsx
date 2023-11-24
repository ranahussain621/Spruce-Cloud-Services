import React, { useEffect, useState } from "react";
import {
  attributeList,
  addFilterPackages,
  showPackages
} from "../../redux/features/packages/packageApis";
import { useSelector, useDispatch } from "react-redux";
import {setAddFilterPackagesOnScreen} from '../../redux/features/packages/currentUserPackagesSlice'
import Button from "@mui/material/Button";

import Select from "react-select";
import makeAnimated from "react-select/animated";

export default function AddFilterWindow(props) {
  
  const { packages } = useSelector((state) => state.packages);

  const [selected, setSelected] = useState([]);
  const [attribute_id, setattribute_id] = useState([]);

  const dispatch = useDispatch();
  //state for storing ID of attributes

  useEffect(() => {
    const attributesValues = async()=>{
      const response= await dispatch(attributeList());
      setattributeDropDownList(response.payload)
    }
    attributesValues()
   
  }, [dispatch]);

  const options = packages?.attributes?.attributes?.map((filterAttribute) => ({
    label: filterAttribute.name,
    value: filterAttribute.id
  })) || [];

  useEffect(() => {
    dispatch(attributeList());
  }, [dispatch]);


  const addFilter = async (e) => {
    e.preventDefault();
  
    const res =  await dispatch(addFilterPackages({attribute_id}));
   dispatch(setAddFilterPackagesOnScreen(res.payload))
 
  };

  // Handle selection
  useEffect(() => {
    const updatedAttributeId = selected.map((option) => ({
      attribute_id: option.value,
    }));

    setattribute_id((prev) => {
      const updatedIds = [...prev];
      updatedAttributeId.forEach((option) => {
        const isAlreadySelected = updatedIds.some(
          (existingOption) =>
            existingOption.attribute_id === option.attribute_id
        );
        if (!isAlreadySelected) {
          updatedIds.push(option);
        }
      });
      return updatedIds;
    });
  }, [selected]);



  // Handle deselection
  useEffect(() => {
    setattribute_id((prev) => {
      const updatedIds = prev.filter((existingOption) =>
        selected.some((option) => option.value === existingOption.attribute_id)
      );
      return updatedIds;
    });
  }, [selected]);

  const animatedComponents = makeAnimated();

const customStyles = {
  control: (provided) => ({
    ...provided,
  }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: null,
    display: "flex",
    flexWrap: "wrap", // add this line to enable wrapping
    justifyContent: "flex-start", // add this line to align options to the left
    backgroundColor: "white",
  }),
  option: (provided) => ({
    ...provided,
    fontSize: "12px",
    border: "1px solid #c7c3c3",
    margin: "10px",
    padding: "5px 10px",
    borderRadius: "5px",
    minWidth: "120px",
    height: "30px",
    flex: "0 0 calc(25% - 20px)", // add this line to specify the width of each option
  }),
  indicatorsContainer: (base) => ({
    ...base,
    height: 20,
    minHeight: 10,
    width: 34,
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    display: "none",
  }),
  valueContainer: (base) => ({
    ...base,
    display: "flex",
  }),
};

  return (
    <>
      <div className="row justify-content-center m-0 p-0 mt-5">
      
        <div className="col-6 p-0 m-0">
          <div className="row p-0 m-0 justify-content-center mt-2 "
            id="AddFilterWindow"
          >
            <div className="col"
              style={{
             
              }}
            >
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                defaultValue={selected}
                isMulti
                onChange={setSelected}
                options={options}
                styles={customStyles}
              
                autoFocus
            
                maxMenuHeight={190}
              />

             
            </div>

            <div
                className="col-1 "
                style={{ position: "relative" }}
              >
                <Button
                  variant="outlined"
                  // startIcon={<FilterListIcon />}
                  className="btn text-white "
                  style={{ backgroundColor: "#09ABF4", border: "none" }}
                  onClick={addFilter}
                >
                  filter
                </Button>
              </div>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </>
  );
}
