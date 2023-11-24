import React from "react";

const FormInput = ({ label, type, placeholder, name }) => {
 
  return (
    <div>
      <label className="fw-medium text-black mb-2 input__label">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="border w-100 input__filed"
        required
      />
    </div>
  );
};

export default FormInput;
