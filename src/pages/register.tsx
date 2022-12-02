import React, { useState, useEffect } from "react";
import {useAppSelector, useAppDispatch} from "../redux/hook"
import { useNavigate, Link } from "react-router-dom";
import { register } from "../redux/actions/authAction";
import "../styles/register/register.css"

const Register = () => {
  const { auth, alert }: any = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialState = {
    fullname: "",
    username: "",
    email: "",
    password: "",
    cf_password: "",
    gender: "none",
  };
  const [userData, setUserData] = useState(initialState);
  const { fullname, username, email, password, cf_password, gender } = userData;

  const [typePass, setTypePass] = useState(false);
  const [typeCfPass, setTypeCfPass] = useState(false);

  useEffect(() => {
    if (auth.token) navigate("/");
  }, [auth.token, navigate]);

  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(register(userData));
  };

  return (
    <div className="auth_page">
      <form onSubmit={handleSubmit}>
        <h3 className="text-center mb-4">Sign Up</h3>

        <div className="mb-3 form-group">
          <input
            type="text"
            className="form-control"
            id="fullname"
            onChange={handleChangeInput}
            name="fullname"
            placeholder="Full name"
            style={{
              border: `${alert.fullname ? "1px solid red" : ""}`,
              background: `${alert.fullname ? "#fd2d6a14" : ""}`,
            }}
          />
          <small className="form-text text-danger">
            {alert.fullname ? alert.fullname : ""}
          </small>
        </div>

        <div className="mb-3 form-group">
          <input
            type="text"
            className="form-control"
            id="username"
            onChange={handleChangeInput}
            value={username.replace(/ /g, "")}
            name="username"
            placeholder="Username"
            style={{
              border: `${alert.username ? "1px solid red" : ""}`,
              background: `${alert.username ? "#fd2d6a14" : ""}`,
            }}
          />
          <small className="form-text text-danger">
            {alert.username ? alert.username : ""}
          </small>
        </div>

        <div className="mb-3 form-group">
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={handleChangeInput}
            value={email}
            name="email"
            placeholder="Email Address"
            style={{
              border: `${alert.email ? "1px solid red" : ""}`,
              background: `${alert.email ? "#fd2d6a14" : ""}`,
            }}
          />
          <small className="form-text text-danger">
            {alert.email ? alert.email : ""}
          </small>
        </div>

        <div className="mb-3 form-group">
          <div className="pass">
            <input
              type={typePass ? "text" : "password"}
              className="form-control"
              id="password"
              onChange={handleChangeInput}
              value={password}
              name="password"
              placeholder="Password"
              style={{
                border: `${alert.password ? "1px solid red" : ""}`,
                background: `${alert.password ? "#fd2d6a14" : ""}`,
              }}
            />
            <small onClick={() => setTypePass(!typePass)}>
              {typePass ? "Hide" : "Show"}
            </small>
          </div>
          <small className="form-text text-danger">
            {alert.password ? alert.password : ""}
          </small>
        </div>

        <div className="mb-3 form-group">
          <div className="pass">
            <input
              type={typeCfPass ? "text" : "password"}
              className="form-control"
              id="cf_password"
              onChange={handleChangeInput}
              value={cf_password}
              name="cf_password"
              placeholder="Confirm Password"
              style={{
                border: `${alert.cf_password ? "1px solid red" : ""}`,
                background: `${alert.cf_password ? "#fd2d6a14" : ""}`,
              }}
            />
            <small onClick={() => setTypeCfPass(!typeCfPass)}>
              {typeCfPass ? "Hide" : "Show"}
            </small>
          </div>
          <small className="form-text text-danger">
            {alert.cf_password ? alert.cf_password : ""}
          </small>
        </div>

        <div className="d-flex justify-content-between mx-0 mb-1">
          <label htmlFor="male">
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              defaultChecked
              onChange={handleChangeInput}
            />
            Male
          </label>
          <label htmlFor="female">
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              defaultChecked
              onChange={handleChangeInput}
            />
            Female
          </label>
          <label htmlFor="custom">
            <input
              type="radio"
              id="custom"
              name="gender"
              value="custom"
              defaultChecked
              onChange={handleChangeInput}
            />
            Custom
          </label>
        </div>

        <button type="submit" className="btn btn-success w-100">
          Sign Up
        </button>

        <p className="my-2">
          You already have an account?{" "}
          <a href="/Login" className="btn btn-danger">
            Login Now
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;