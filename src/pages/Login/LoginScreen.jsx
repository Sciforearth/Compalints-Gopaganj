import React, { useRef } from "react";
import "./LoginScreen.css";
import * as Realm from "realm-web";
import loginSvg from '../../images/loginSvg.svg'
import one_app_logo from '../../images/One App Gopal Ganj District 2.svg'
import { useNavigate } from "react-router";

function LoginScreen() {
  const app = new Realm.App({ id: "superadminapp-snfae" });
  const navigate = useNavigate()
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const togglePassword = () => {
    const inputElement = passwordInputRef.current;
    if (inputElement.type === "password") {
      inputElement.type = "text";
    } else {
      inputElement.type = "password";
    }
  };

  const onClickLogin = async () => {
    console.log("login process started");
    console.table(emailInputRef.current.value, passwordInputRef.current.value);
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    if (!email || !password) {
      console.log("empty email or password");
      return;
    }

    try {
      const app = new Realm.App({ id: "superadminapp-snfae" });
      const credentials = Realm.Credentials.emailPassword(email, password);
      // Authenticate the user
      const user = await app.logIn(credentials);
      console.log('login successful', user)
      
      navigate('/dashboard')
    } catch (err) {
      console.log(err);
    }
  };

  const forgotPasswordClick = async () => {
    try {
      await app.emailPasswordAuth.sendResetPasswordEmail({ email: "deepanshu.balyan0073@gmail.com" });
      console.log('reset password email sent')
    } catch(err) {
      console.log(err)
    }
  }
  return (
    <div
    style={{overflow: "hidden"}}
      className="" width="100vw"
    >
      {/* ICON */}
      <div style={{position: "absolute", top: "1rem", left: "1rem"}}><img src={one_app_logo} alt="" /></div>
      <div className="row" style={{ height: "100vh" }}>
        <div className="col-sm-6 d-flex justify-content-center align-items-center">
          <div class="form">
            <p class="form-title fs-3 mt-3">Log-in</p>
            <p className="text-center" style={{color: "#939393", marginTop: "-0.6rem", fontSize: "0.8rem"}}>Streamline you city services</p>
            <div class="input-container rounded-3">
              <input
                ref={emailInputRef}
                placeholder="Enter email"
                type="email"
              />
              <span>
                <svg
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </span>
            </div>
            <div class="input-container rounded-3">
              <input
                ref={passwordInputRef}
                placeholder="Enter password"
                type="password"
              />

              <span onClick={togglePassword}>
                <svg
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </span>
            </div>
            <button style={{backgroundColor: "#3D1B9D"}} class="submit" onClick={onClickLogin}>
              Log-in
            </button>
            <p onClick={forgotPasswordClick} className="text-center text-primary mt-2" style={{cursor: "pointer", marginTop: "-0.6rem", fontSize: "0.8rem"}}>Forgot Password?</p>
          </div>
        </div>

        <div className="col-sm-6 d-flex justify-content-center align-items-center" style={{backgroundColor: "#3D1B9D"}}>
          <img className="img-fluid" src={loginSvg}/>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
