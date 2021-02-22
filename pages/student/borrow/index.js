import React, { Component } from "react";
import Theme from "../../../components/theme";
import Link from "next/link";

export default class Borrow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Theme {...this.props}>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              ข้อมูลกู้ยืมกองทุน กยศ.
            </li>
          </ol>
        </nav>

        <div className="box-padding ">
          <div className="mb-3">
            <div className="card">
              <div className="card-body ">
                <h1 className="center">
                  กองทุนให้กูยิมเพื่อการศึกษา มทร.อีสานยินดีต้อนรับ
                </h1>
                <div className="center">
                  <img
                    src={
                      "https://www.studentloan.or.th/sites/default/files/user/images/logo%E0%B8%81%E0%B8%A2%E0%B8%A8%20%E0%B8%A2%E0%B9%88%E0%B8%AD%20%282%29-01_2.jpg"
                    }
                    width={"550px"}
                  />
                </div>
                <h1 className="center">โปรดเลือกปีการศึกษาและภาคการศึกษา</h1>
                <Link href="/student/borrow/term1">
                  <a>
                    <h3 className="center">
                      ปีการศึกษา {new Date().getFullYear() + 543} ภาคเรียนที่ 1
                    </h3>
                  </a>
                </Link>
                <div>
                  <Link href="/student/borrow/term2">
                    <a>
                      <h3 className="center">
                        ปีการศึกษา {new Date().getFullYear() + 543} ภาคเรียนที่
                        2
                      </h3>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Theme>
    );
  }
}
