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

        <div className="box-padding">
          <div className="mb-3">
            <Link href="/student/borrow/term1">
              <a>เทอม 1</a>
            </Link>
          </div>

          <div>
            <Link href="/student/borrow/term2">
              <a>เทอม 2</a>
            </Link>
          </div>
        </div>
      </Theme>
    );
  }
}
