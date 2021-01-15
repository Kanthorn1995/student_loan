import React, { Component } from "react";
import Theme from "../../../components/theme";
import Link from "next/link";
export default class History extends Component {
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
              ประวัติการขอกู้ยืม
            </li>
          </ol>
        </nav>

        <div className="box-padding">
          <div className="mb-3">
            <Link href="/student/history">
              <a>ประวัติการขอกู้ยืม</a>
            </Link>
          </div>
        </div>
      </Theme>
    );
  }
}
