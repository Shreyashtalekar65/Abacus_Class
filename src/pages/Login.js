import React, { Fragment, useState } from "react";
import Menu from "../components/Menu";
import "../assets/css/login.css";
import bgimg from "../assets/images/back-4.jpg";
import Footer from "../components/footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth, db } from "../Firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      setTimeout(function () {
        window.location.href = "/";
      }, 1500);
      toast.success("User logged in Successfully", {
        position: "top-center",
        autoClose: 1000,
      });
    } catch (error) {
      console.log(error.message);

      toast.error("Can't Login ! " + error.message, {
        position: "bottom-center",
      });
    }
  };
  return (
    <Fragment>
      <div
        className="backgroundL"
        style={{
          backgroundImage: `url(${bgimg})`,
        }}
      >
        <div>
          <Menu />
        </div>
        <main className="mainL">
          <header className="headerL">
            <center>
              <h3>Login</h3>
            </center>
          </header>
          <form className="formL" onSubmit={handleSubmit}>
            {/* <div className="form_wrapperL">
              <select class="form-select selectR">
                <option selected disabled>
                  Login As
                </option>
                <option value="student">Student</option>
                <option value="admin">Admin</option>
              </select>
            </div> */}
            <div className="form_wrapperL">
              <input
                id="inputL"
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label for="input">Email</label>
              <i className="material-icons">person</i>
            </div>
            <div className="form_wrapperL">
              <input
                id="passwordL"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label for="password">Password</label>
            </div>
            {/* <div className="remember_box">
              <div className="remember">
                <input type="checkbox" />
                Remember me
              </div>
              <a href="#">Forgot Password ?</a>
            </div> */}
            <button className="buttonL">Login</button>
            <div className="new_account">
              Don't have account ?{" "}
              <a href="http://localhost:3000/StudentRegister">Register</a>
            </div>
          </form>
        </main>
      </div>
      <ToastContainer />
      <Footer />
    </Fragment>
  );
}
export default Login;
