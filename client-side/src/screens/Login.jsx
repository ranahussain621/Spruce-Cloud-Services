import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import "../style/card_responsivenes.css";
import Cookies from "js-cookie";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCheckbox,
} from "mdb-react-ui-kit";

import LoginImg from "../assets/img/LoginImg.png";
import HeyImage from "../assets/img/HeyImage.png";
import ResetPassword from "./ResetPassword";
import { instance } from "../axios/axios";
import { useEffect } from "react";
export function Login({ value }) {
  const [check, setCheck] = useState(false);
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const handleClose = () => setShow(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const Navigate = useNavigate();

  const navigate_to_signup = () => {
    Navigate("/auth/signUp");
  };

  useEffect(() => {
    const storedUserEmail = Cookies.get("useremail");
    const storedPassword = Cookies.get("userPass");

    if (storedUserEmail && storedPassword) {
      setData({
        ...data,
        email: storedUserEmail,
        password: storedPassword,
      });
    }
  }, []);

  // ============login validation code===============
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(e);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = {
          method: "post",
          url: "auth/login",
          data: data,
          headers: { "Content-Type": "application/json" },
        };
        const res = instance(response).then((Result) => {
          if (Result.data.success === false) {
            toast.error(Result.data.message, {
              position: "top-center",
              autoClose: 1000,
            });
          } else {
            if (rememberMe === false) {
              Cookies.remove("userPass");
              Cookies.remove("useremail");
            } else {
              Cookies.set("userPass", data.password, { expires: 30 }); // Store password for 30 days
              Cookies.set("useremail", data.email, { expires: 30 }); // Store username for 30 days
            }

            if (Result.data.Role[0].title === "user") {
              toast.success(Result.data.message, {
                position: "top-center",
                autoClose: 1000,
              });

              Navigate("/dashboard/userdashboard");
              localStorage.setItem("user", JSON.stringify(Result.data));
            } else if (Result.data.Role[0].title === "admin") {
              toast.success(Result.data.message, {
                position: "top-center",
                autoClose: 1000,
              });
              Navigate("/dashboard/cspDashboard");
              localStorage.setItem("user", JSON.stringify(Result.data));
            } else {
              toast.success(Result.data.message, {
                position: "top-center",
                autoClose: 1000,
              });
              Navigate("/dashboard/super-admin");
              localStorage.setItem("user", JSON.stringify(Result.data));
            }
          }
        });


      } catch (error) {
        toast.error(error)
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    let errors = {};
    if (!data.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Invalid email address";
    }

    if (!data.password) {
      errors.password = "Password is required";
    }

    return errors;
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit} autoComplete="none">
        <div className="row align-itme-center justify-content-center">
          <MDBContainer className="mt-5">
            <MDBCard
              className=" col-12 text-black m-5"
              style={{ borderRadius: "25px" }}
            >
              <MDBCardBody>
                <div className="row justify-content-center">
                  <div className="col-10">
                    <MDBRow className="">
                      <MDBCol
                        md="10"
                        lg="6"
                        className="order-2 col-12 order-lg-1 d-flex align-items-center"
                      >
                        <MDBCardImage src={LoginImg} />
                      </MDBCol>

                      <MDBCol
                        md="10"
                        lg="6"
                        className="order-1 col-12 order-lg-2 d-flex flex-column align-items-center text-start"
                      >
                        <div className="col-3  mb-4 text-start ">
                          <MDBCardImage src={HeyImage} />
                        </div>
                        <p className=" mb-1 mx-1 mx-md-4 mt-1 text-muted">
                          Enter the information you entered while registering.
                        </p>

                        <div className="d-flex flex-row align-items-center mb-2 ">
                          <div className="mb-3">
                            <label
                              htmlFor="exampleFormControlInput1"
                              className="form-label fw-bold m-0"
                            >
                              E-mail
                            </label>
                            <input
                              type="email"
                              className="form-control border"
                              autoComplete="off"
                              id="exampleFormControlInput1"
                              value={data.email}
                              onChange={(e) => {
                                const emailValue = e.target.value;
                                setData({ ...data, email: emailValue });
                                // Validation for email
                                if (!/\S+@\S+\.\S+/.test(emailValue)) {
                                  setErrors({
                                    ...errors,
                                    email: "Invalid email address",
                                  });
                                } else {
                                  setErrors({ ...errors, email: "" });
                                }
                              }}
                            />
                            {errors.email && (
                              <div className="text-danger">{errors.email}</div>
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4 ">
                          <div className="mb-3">
                            <label
                              htmlFor="exampleFormControlInput1"
                              className="form-label fw-bold m-0"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              className="form-control border"
                              autoComplete="off"
                              id="exampleFormControlInput1"
                              value={data.password}
                              onChange={(e) => {
                                const passwordValue = e.target.value;
                                setData({ ...data, password: passwordValue });
                                // Validation for password
                                if (!passwordValue) {
                                  setErrors({
                                    ...errors,
                                    password: "Password is required",
                                  });
                                } else {
                                  setErrors({ ...errors, password: "" });
                                }
                              }}
                            />
                            {errors.password && (
                              <div className="text-danger">
                                {errors.password}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4 ">
                          <div className="col-md-6 ps-0">
                            <MDBCheckbox
                              className="flexCheck ps-0"
                              value={rememberMe}
                              id="flexCheckDefault"
                              label="Remember Me"
                              onChange={() => setRememberMe(true)}
                            />
                          </div>
                          <div className="col-md-6 text-end pe-0">
                            {values.map((v, idx) => (
                              <a
                                variant="secondary"
                                key={idx}
                                href="#"
                                className="me-2 mb-2"
                                onClick={() => handleShow(v)}
                              >
                                Forget Password
                              </a>
                            ))}
                          </div>
                        </div>
                        <Modal
                          show={show}
                          fullscreen={fullscreen}
                          onHide={handleClose}
                        >
                          <Modal.Header closeButton>
                            <Modal.Title></Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <ResetPassword hideModal={handleClose} />
                          </Modal.Body>
                        </Modal>

                        <button
                          className=" btn btn-info mb-4 w-100 btn-sm"
                          size="lg"
                        >
                          Log In
                        </button>
                        <div className="text-center">
                          <p className="w-100">
                            ____________________or____________________
                          </p>
                        </div>
                        <button
                          className=" btn border mb-2 w-100 text-center mt-3"
                          size="lg"
                          onClick={navigate_to_signup}
                        >
                          Create an account
                        </button>
                      </MDBCol>
                    </MDBRow>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </div>
      </form>
    </>
  );
}
