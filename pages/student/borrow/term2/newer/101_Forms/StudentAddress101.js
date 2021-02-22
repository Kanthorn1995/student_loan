import React from "react";
import TextField from "@material-ui/core/TextField";

const typeAddress = {
  default: {
    form: 2 + ".ที่อยู่ตามภูมิลำเนา",
    api_update_data: "",
  },
  current: {
    form: 3 + ".ที่อยู่ปัจจุบัน",
    api_update_data: "",
  },
};

const StudentAddress101 = (props) => {
  return (
    <React.Fragment>
      {(() => {
        if (props.typeAddress) {
          return (
            <div>
              <h4>{typeAddress[props.typeAddress].form}</h4>
              <div className="row">
                <div className="col-lg-2 mb-3">
                  <TextField style={{ width: "100%" }} label="บ้านเลขที่" />
                </div>

                <div className="col-lg-2 mb-3">
                  <TextField style={{ width: "100%" }} label="หมู่ที่" />
                </div>

                <div className="col-lg-2 mb-3">
                  <TextField style={{ width: "100%" }} label="ตรอก/ซอย" />
                </div>

                <div className="col-lg-2 mb-3">
                  <TextField style={{ width: "100%" }} label="ถนน" />
                </div>

                <div className="col-lg-2 mb-3">
                  <TextField style={{ width: "100%" }} label="ตำบลแขวง" />
                </div>

                <div className="col-lg-2 mb-3">
                  <TextField style={{ width: "100%" }} label="อำเภอ/เขต" />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 mb-3">
                  <TextField style={{ width: "100%" }} label="จังหวัด" />
                </div>

                <div className="col-lg-3 mb-3">
                  <TextField style={{ width: "100%" }} label="รหัสไปรษณีย์" />
                </div>

                <div className="col-lg-3 mb-3">
                  <TextField style={{ width: "100%" }} label="โทรศัพท์" />
                </div>
              </div>
            </div>
          );
        } else {
          return <div>Need props data 'typeAddress'</div>;
        }
      })()}
    </React.Fragment>
  );
};

export default StudentAddress101;
