import React, { Component } from "react";
import Theme from "../../../../components/theme";
import Link from "next/link";

export default class Term2 extends Component {
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
              ภาคการศึกษาที่ 2
            </li>
          </ol>
        </nav>

        <div className="box-padding">Term2</div>
      </Theme>
    );
  }
}
