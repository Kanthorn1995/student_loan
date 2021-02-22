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

        <div className="box-padding">
          <div class="card">
            <div class="card-body">
              <div>
                <h4 className="mb-4">
                  <strong>ข้อมูลกู้ยืมกองทุน</strong> (ภาคเรียนที่ 2)
                </h4>
                <div>
                  <Link href="/student/borrow/term2/newer">
                    <a>
                      <div className="flex">
                        <div>
                          {" "}
                          <i className="fas fa-user-plus mr-2  fa-2x mb-3"></i>
                        </div>

                        <h5>ผู้กู้รายใหม่</h5>
                      </div>
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href="/student/borrow/term2/newmove">
                    <a>
                      <div className="flex">
                        <div>
                          {" "}
                          <i className="fas fa-user-tag mr-2  fa-2x mb-3"></i>
                        </div>

                        <h5>ผู้กู้รรายเก่าย้ายสถานศึกษาหรือเปลี่ยนระดับชั้น</h5>
                      </div>
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href="/student/borrow/term2/older">
                    <a>
                      <div className="flex">
                        <div>
                          <i className="fas fa-user mr-3  fa-2x mb-3"></i>
                        </div>

                        <h5>ผู้กู้รายเก่า</h5>
                      </div>
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
