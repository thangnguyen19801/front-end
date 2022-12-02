import React, { useState } from "react";
import {useAppSelector, useAppDispatch} from "../redux/hook"
import { useNavigate, Link } from "react-router-dom";
import { login } from "../redux/actions/authAction";
import "../styles/login/css/main.css";
import "../styles/login/css/util.css";
import "../styles/login/vendor/animate/animate.css";
import "../styles/login/vendor/css-hamburgers/hamburgers.min.css";
import "../styles/login/vendor/select2/select2.min.css";
import "../styles/login/vendor/bootstrap/css/bootstrap.min.css";
import "../styles/login/fonts/font-awesome-4.7.0/css/font-awesome.min.css";

const Login = () => {
  const initialState = { email: "", password: "" };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;

  const { auth }: any = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(login(userData));
    if (auth.token) navigate("/");
  };

  return (
    <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<div className="login100-pic js-tilt" data-tilt>
					<img src="images/img-01.png" alt="IMG" />
				</div>

				<form className="login100-form validate-form" onSubmit={handleSubmit}>
					<span className="login100-form-title">
						Login
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input className="input100" type="text" name="email" placeholder="Email" onChange={handleChangeInput} />
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Password is required">
						<input className="input100" type="password" name="pass" placeholder="Password" onChange={handleChangeInput} />
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
							Login
						</button>
					</div>

					<div className="text-center p-t-12">
						<span className="txt1">
							Forgot
						</span>
						<a className="txt2" href="#">
							Username / Password?
						</a>
					</div>

					<div className="text-center p-t-136">
						<a className="txt2" href="/Register">
							Create your Account
							<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
  );
};

export default Login;