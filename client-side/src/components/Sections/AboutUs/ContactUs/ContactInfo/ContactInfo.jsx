import React from "react";
import "../contactUs.css";
import chat from "../../../../../assets/Icons/chat.png";
import location from "../../../../../assets/Icons/location.png";
import phone from "../../../../../assets/Icons/phone.png";

const ContactInfo = () => {
  const fakeData = [
    {
      img: chat,
      title: "Chat to us",
      subtitle: "Our friendly team is here to help.",
      contactInfo: "rogerwg@sprucecloud.ca",
    },
    {
      img: location,
      title: "Visit Us",
      subtitle: "Come say hello to our office HQ",
      contactInfo: "205-8291 Alexandra Road, Richmond, BC V6X 1C3",
    },
   
  ];

  return (
    <div>
      <h4 className="text-uppercase contact-title ">
        Talk to our product analytics expert
      </h4>
      <div className="mt-5">
        {fakeData.map((data, i) => (
          <div key={i} className="row gap-3 mt-4">
            <div className="col-2 d-flex justify-content-end">
              <img src={data.img} alt="" className="img-fluid"  style={{width:'50px',height:"50px"}}/>
            </div>
            <div className="col">
              <p className="m-0 fw-bold fs-4 text-black" style={{textDecoration:'underline'}}>{data.title}</p>
              <p className="m-0 fs-5 fw-lighter text-black">{data.subtitle}</p>
              <p
                className="m-0 fw-semibold text-black"
                style={{ fontSize: "20px"}}
              >
                {data.contactInfo}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
