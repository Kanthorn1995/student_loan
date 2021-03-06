import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";

const Login = (props) => {
  const router = useRouter();
  const { perid } = router.query;
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    // Manual Login
    axios
      .post(`${process.env.API_URL}manualLogin`, JSON.stringify(data))
      .then((val) => {
        if (val.data["success"]) {
          props.patchUserLogin({
            ...val.data["result"],
          });
          window.location.replace("/");
        } else {
          alert(val.data["message"]);
        }
      })
      .catch(() => {});
  };

  if (perid != undefined) {
    // SSO Login
    axios
      .get(`${process.env.ssoReadData}${perid}`)
      .then((response) => {
        if (response.data != null) {
          let newData = {};
          Object.keys(response.data).forEach((el, i) => {
            newData[el] = response.data[el][0];
          });

          if (newData["gidNumber"] == "4500") {
            // Student
            axios
              .post(
                `${process.env.API_URL}getDataStudentFormSSO`,
                JSON.stringify({ studentId: newData["studentId"] })
              )
              .then((value) => {
                if (value.data["rowCount"] > 0) {
                  props.patchUserLogin({
                    ...value.data["result"][0],
                    position_system: "student",
                  });
                  window.location.replace("/");
                } else {
                  alert(
                    "ท่านไม่ใช่นักศึกษา กยศ.\nโปรดติดต่ออาจารย์ที่ปรึกษาของท่าน"
                  );
                }
              })
              .catch((reason) => {
                console.log(reason);
              });
          } else {
            // Others
            axios
              .post(
                `${process.env.API_URL}getDataOtherFormSSO`,
                JSON.stringify({ personalId: newData["personalId"] })
              )
              .then((value) => {
                if (value.data["rowCount"] > 0) {
                  props.patchUserLogin({
                    ...value.data["result"][0],
                  });
                  window.location.replace("/");
                } else {
                  // Insert To DB
                  axios
                    .post(
                      `${process.env.API_URL}saveDataOtherFromSSO`,
                      JSON.stringify({
                        username: newData["uid"],
                        prename: newData["prename"],
                        firstNameThai: newData["firstNameThai"],
                        lastNameThai: newData["lastNameThai"],
                        personalId: newData["personalId"],
                      })
                    )
                    .then((val) => {
                      console.log(val.data);
                    })
                    .catch(() => {});

                  props.patchUserLogin({
                    ...newData,
                    position_system: "teacher",
                  });

                  window.location.replace("/");
                }
              })
              .catch((reason) => {
                console.log(reason);
              });
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  React.useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const containerlogin = document.querySelector(".container-login");

    sign_up_btn.addEventListener("click", () => {
      containerlogin.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      containerlogin.classList.remove("sign-up-mode");
    });
  }, []);

  return (
    <React.Fragment>
      <div className="container-login">
        <div className="forms-container-login">
          <div className="signin-signup">
            <form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
              <h2 className="title">ลงชื่อเข้าสู่ระบบ</h2>
              <div>
                <input
                  type="button"
                  value="เข้าสู่ระบบด้วยบัญชีอินเตอร์เน็ต มทร.อีสาน"
                  className="btnSSo solid bg-warning"
                  onClick={() => {
                    window.location.replace(`${process.env.ssoLogin}`);
                  }}
                />
              </div>

              <h5 className="mt-2 mb-2">หรือ</h5>

              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="ชื่อผู้ใช้งาน"
                  name="username"
                  ref={register({ required: true })}
                  required={true}
                  autoComplete={"off"}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="รหัสผ่าน"
                  name="password"
                  required={true}
                  ref={register({ required: true })}
                  autoComplete={"off"}
                />
              </div>
              <input type="submit" value="เข้าสู่ระบบ" className="btn solid" />
            </form>

            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fab fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fab fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fab fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" className="btn" value="Sign up" />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container-login">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button className="btn transparent" id="sign-up-btn">
                Sign up
              </button>
            </div>
            <img
              src={`${process.env.base_path}/RMUTI_KORAT.jpg`}
              className="image"
              alt=""
            />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button className="btn transparent" id="sign-in-btn">
                Sign in
              </button>
            </div>
            <img
              src={`${process.env.base_path}/RMUTI_KORAT.jpg`}
              className="image"
              alt=""
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .container-login {
          position: relative;
          width: 100%;
          background-color: #fff;
          min-height: 100vh;
          overflow: hidden;
        }

        .forms-container-login {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        .signin-signup {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          left: 75%;
          width: 50%;
          transition: 1s 0.7s ease-in-out;
          display: grid;
          grid-template-columns: 1fr;
          z-index: 5;
        }

        form {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 0rem 5rem;
          transition: all 0.2s 0.7s;
          overflow: hidden;
          grid-column: 1 / 2;
          grid-row: 1 / 2;
        }

        form.sign-up-form {
          opacity: 0;
          z-index: 1;
        }

        form.sign-in-form {
          z-index: 2;
        }

        .title {
          font-size: 2.2rem;
          color: #444;
          margin-bottom: 10px;
        }

        .input-field {
          max-width: 380px;
          width: 100%;
          background-color: #f0f0f0;
          margin: 10px 0;
          height: 55px;
          border-radius: 55px;
          display: grid;
          grid-template-columns: 15% 85%;
          padding: 0 0.4rem;
          position: relative;
        }

        .input-field i {
          text-align: center;
          line-height: 55px;
          color: #acacac !important;
          transition: 0.5s;
          font-size: 1.1rem;
        }

        .input-field input {
          background: none;
          outline: none;
          border: none;
          line-height: 1;
          font-weight: 600;
          font-size: 1.1rem;
          color: #333;
        }

        .input-field input::placeholder {
          color: #aaa;
          font-weight: 500;
        }

        .social-text {
          padding: 0.7rem 0;
          font-size: 1rem;
        }

        .social-media {
          display: flex;
          justify-content: center;
        }

        .social-icon {
          height: 46px;
          width: 46px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 0.45rem;
          color: #333;
          border-radius: 50%;
          border: 1px solid #333;
          text-decoration: none;
          font-size: 1.1rem;
          transition: 0.3s;
        }

        .social-icon:hover {
          color: #4481eb;
          border-color: #4481eb;
        }

        .btn {
          width: 150px;
          background-color: #5995fd;
          border: none;
          outline: none;
          height: 49px;
          border-radius: 49px;
          color: #fff;
          text-transform: uppercase;
          font-weight: 600;
          margin: 10px 0;
          cursor: pointer;
          transition: 0.5s;
        }

        .btnSSo {
          width: 350px;
          border: none;
          outline: none;
          height: 49px;
          border-radius: 49px;
          color: #fff;
          text-transform: uppercase;
          font-weight: 600;
          margin: 10px 0;
          cursor: pointer;
          transition: 0.5s;
        }

        .btn:hover {
          background-color: #4d84e2;
        }
        .panels-container-login {
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }

        .container-login:before {
          content: "";
          position: absolute;
          height: 2000px;
          width: 2000px;
          top: -10%;
          right: 48%;
          transform: translateY(-50%);
          background-image: linear-gradient(-45deg, #4481eb 0%, #04befe 100%);
          transition: 1.8s ease-in-out;
          border-radius: 50%;
          z-index: 6;
        }

        .image {
          width: 100%;
          transition: transform 1.1s ease-in-out;
          transition-delay: 0.4s;
        }

        .panel {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: space-around;
          text-align: center;
          z-index: 6;
        }

        .left-panel {
          pointer-events: all;
          padding: 3rem 17% 2rem 12%;
        }

        .right-panel {
          pointer-events: none;
          padding: 3rem 12% 2rem 17%;
        }

        .panel .content {
          color: #fff;
          transition: transform 0.9s ease-in-out;
          transition-delay: 0.6s;
        }

        .panel h3 {
          font-weight: 600;
          line-height: 1;
          font-size: 1.5rem;
        }

        .panel p {
          font-size: 0.95rem;
          padding: 0.7rem 0;
        }

        .btn.transparent {
          margin: 0;
          background: none;
          border: 2px solid #fff;
          width: 130px;
          height: 41px;
          font-weight: 600;
          font-size: 0.8rem;
        }

        .right-panel .image,
        .right-panel .content {
          transform: translateX(800px);
        }

        /* ANIMATION */

        .container-login.sign-up-mode:before {
          transform: translate(100%, -50%);
          right: 52%;
        }

        .container-login.sign-up-mode .left-panel .image,
        .container-login.sign-up-mode .left-panel .content {
          transform: translateX(-800px);
        }

        .container-login.sign-up-mode .signin-signup {
          left: 25%;
        }

        .container-login.sign-up-mode form.sign-up-form {
          opacity: 1;
          z-index: 2;
        }

        .container-login.sign-up-mode form.sign-in-form {
          opacity: 0;
          z-index: 1;
        }

        .container-login.sign-up-mode .right-panel .image,
        .container-login.sign-up-mode .right-panel .content {
          transform: translateX(0%);
        }

        .container-login.sign-up-mode .left-panel {
          pointer-events: none;
        }

        .container-login.sign-up-mode .right-panel {
          pointer-events: all;
        }

        @media (max-width: 870px) {
          .container-login {
            min-height: 800px;
            height: 100vh;
          }
          .signin-signup {
            width: 100%;
            top: 95%;
            transform: translate(-50%, -100%);
            transition: 1s 0.8s ease-in-out;
          }

          .signin-signup,
          .container-login.sign-up-mode .signin-signup {
            left: 50%;
          }

          .panels-container-login {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 2fr 1fr;
          }

          .panel {
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            padding: 2.5rem 8%;
            grid-column: 1 / 2;
          }

          .right-panel {
            grid-row: 3 / 4;
          }

          .left-panel {
            grid-row: 1 / 2;
          }

          .image {
            width: 200px;
            transition: transform 0.9s ease-in-out;
            transition-delay: 0.6s;
          }

          .panel .content {
            padding-right: 15%;
            transition: transform 0.9s ease-in-out;
            transition-delay: 0.8s;
          }

          .panel h3 {
            font-size: 1.2rem;
          }

          .panel p {
            font-size: 0.7rem;
            padding: 0.5rem 0;
          }

          .btn.transparent {
            width: 110px;
            height: 35px;
            font-size: 0.7rem;
          }

          .container-login:before {
            width: 1500px;
            height: 1500px;
            transform: translateX(-50%);
            left: 30%;
            bottom: 68%;
            right: initial;
            top: initial;
            transition: 2s ease-in-out;
          }

          .container-login.sign-up-mode:before {
            transform: translate(-50%, 100%);
            bottom: 32%;
            right: initial;
          }

          .container-login.sign-up-mode .left-panel .image,
          .container-login.sign-up-mode .left-panel .content {
            transform: translateY(-300px);
          }

          .container-login.sign-up-mode .right-panel .image,
          .container-login.sign-up-mode .right-panel .content {
            transform: translateY(0px);
          }

          .right-panel .image,
          .right-panel .content {
            transform: translateY(300px);
          }

          .container-login.sign-up-mode .signin-signup {
            top: 5%;
            transform: translate(-50%, 0);
          }
        }

        @media (max-width: 570px) {
          form {
            padding: 0 1.5rem;
          }

          .image {
            display: none;
          }
          .panel .content {
            padding: 0.5rem 1rem;
          }
          .container-login {
            padding: 1.5rem;
          }

          .container-login:before {
            bottom: 72%;
            left: 50%;
          }

          .container-login.sign-up-mode:before {
            bottom: 28%;
            left: 50%;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default Login;
