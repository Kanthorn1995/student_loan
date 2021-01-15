import React, { Component } from "react";
import Link from "next/link";

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
                    <li className="nav-item" key={`${JSON.stringify(el)}`}>
                      <Link href={el.path}>
                        <a className="nav-link">{el.title}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link href={"/login"}>
                    <a className="nav-link">{"เข้าสู่ระบบ"}</a>
                  </Link>
                </li>
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
