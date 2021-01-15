import React, { Component } from "react";
import Theme from "../../../../components/theme";
import Link from "next/link";

export default class Term1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
            <li className="breadcrumb-item active" aria-current="page">
              ภาคการศึกษาที่ 1
            </li>
          </ol>
        </nav>
        <div className="box-padding">
          <div>
            <Link href="/student/borrow/term1/newer">
              <a>รายใหม่</a>
            </Link>
          </div>
          <div>
            <Link href="/student/borrow/term1/newmove">
              <a>รายเก่าย้ายสถานศึกษาหรือเปลี่ยนระดับชั้น</a>
            </Link>
          </div>
          <div>
            <Link href="/student/borrow/term1/older">
              <a>รายเก่า</a>
            </Link>
          </div>
        </div>
      </Theme>
    );
  }
}
