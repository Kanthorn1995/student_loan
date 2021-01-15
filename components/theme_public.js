import React, { Component } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const ActiveLink = ({ href, children }) => {
  const router = useRouter();
  let className = children.props.className || "";

  if (router.pathname == href) {
    className = `${className} active`;
  }

  return (
    <React.Fragment>
      {React.cloneElement(children, { className })}
    </React.Fragment>
  );
};

const ThemePublic = (Components) => {
  return class ClassRender extends Component {
    constructor(props) {
      super(props);
      this.state = {
        menuLeft: [
          { title: "หน้าหลัก", path: "/", icon: "" },
          { title: "ติดต่อเรา", path: "/contact", icon: "" },
        ],
      };
    }

    componentDidMount() {
      console.log(this.props);
    }

    render() {
      return (
        <React.Fragment>
          <div className="header">
            <div className="mr-2">
              <img
                src={"http://sl.sci.rmuti.ac.th/assets/RMUTi_LOGO.png"}
                width={"40px"}
              />
            </div>
            <div className="mr-4">
              <img
                src={"http://sl.sci.rmuti.ac.th/assets/RMUTi_ICON.png"}
                width={"50px"}
              />
            </div>
            <div>
              <h2>กองทุนให้กู้ยืมเพื่อการศึกษา</h2>
              <p>มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน นครราชสีมา</p>
            </div>
          </div>
          <nav
            className="navbar navbar-expand-lg navbar-dark"
            style={{ backgroundColor: "#3690F0" }}
          >
            <a className="navbar-brand d-block d-xl-none d-lg-none " href="#">
              เมนู
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mr-auto">
                {this.state.menuLeft.map((el) => {
                  return (
                    <ActiveLink href={el.path} key={`${JSON.stringify(el)}`}>
                      <li className="nav-item">
                        <Link href={el.path}>
                          <a className="nav-link">{el.title}</a>
                        </Link>
                      </li>
                    </ActiveLink>
                  );
                })}
              </ul>

              <ul className="navbar-nav ml-auto">
                {(() => {
                  if (this.props.userLogin) {
                    return (
                      <li className="nav-item">
                        <div className="dropdown">
                          <button
                            className="btn btn-secondary"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fas fa-user"></i>&nbsp;&nbsp;
                            {this.props.userLogin["firstNameThai"]}&nbsp;
                            {this.props.userLogin["lastNameThai"]}
                          </button>

                          <div
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <Link href={"/home"}>
                              <a className="dropdown-item">
                                <i className="fas fa-user-cog"></i>
                                &nbsp;&nbsp;จัดการข้อมูล
                              </a>
                            </Link>

                            <a
                              className="dropdown-item"
                              href="#"
                              onClick={() => {
                                window.localStorage.clear();
                                window.location.replace(
                                  `${process.env.ssoLogout}`
                                );
                              }}
                            >
                              <i className="fas fa-sign-out-alt"></i>
                              &nbsp;&nbsp;ออกจากระบบ
                            </a>
                          </div>
                        </div>
                      </li>
                    );
                  } else {
                    return (
                      <li className="nav-item">
                        <Link href={"/login"}>
                          <a className="nav-link">{"เข้าสู่ระบบ"}</a>
                        </Link>
                      </li>
                    );
                  }
                })()}
              </ul>
            </div>
          </nav>

          <Components {...this.props} />

          <style jsx>
            {`
              h2,
              p {
                margin: unset;
              }

              .header {
                display: flex;
                align-items: center;
                padding: 15px;
              }
            `}
          </style>
        </React.Fragment>
      );
    }
  };
};

export default ThemePublic;
