import React, { Component } from "react";
import Theme from "../../../../../components/theme";
import Link from "next/link";

export default class Newmove extends Component {
  constructor(props) {
    super(props);
    this.setState = {};
  }
  render() {
    return (
      <Theme {...this.props}>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/student/borrow">
                <a>ข้อมูลกู้ยืมกองทุน กยศ.</a>
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/student/borrow/term1">
                <a>ภาคการศึกษาที่ 2</a>
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              รายเก่าย้ายสถานศึกษาหรือเปลี่ยนระดับชั้น
            </li>
          </ol>
        </nav>
        <div className="box-padding">Newmove</div>
      </Theme>
    );
  }
}
