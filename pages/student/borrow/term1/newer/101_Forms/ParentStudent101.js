import React from "react";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import Select from "@material-ui/core/Select";

const typeParent = {
  father: {
    form: 7 + ".ข้อมูลบิดา",
    api_update_data: "",
  },
  mother: {
    form: 8 + ".ข้อมูลมารดา",
    api_update_data: "",
  },
  spouse: {
    form: 9 + ".ข้อมูลคู่สมรส",
    api_update_data: "",
  },
  other: {
    form: 15 + ".ผู้ปกครอง",
    api_update_data: "",
  },
};

const ParentStudent101 = (props) => {
  const [maxEdu, setMaxEdu] = React.useState("");
  const [carrer, setCarrer] = React.useState("");
  const handleChange = (event) => {
    setMaxEdu(event.target.value);
    setCarrer(event.target.value);
  };
  return (
    <React.Fragment>
      {(() => {
        if (props.typeParent) {
          return (
            <div>
              <h4>{typeParent[props.typeParent].form}</h4>
              <div className="row">
                <div className="col-lg-3 mb-3">
                  <TextField style={{ width: "100%" }} label="ชื่อ" />
                </div>

                <div className="col-lg-3 mb-3">
                  <TextField style={{ width: "100%" }} label="นามสกุล" />
                </div>

                <div className="col-lg-4 mb-3">
                  <FormControl component="fieldset">
                    <FormLabel component="legend"></FormLabel>
                    <RadioGroup
                      row
                      aria-label="position"
                      name="position"
                      defaultValue="top"
                    >
                      <FormControlLabel
                        className="ml-3"
                        value="alive"
                        control={<Radio color="primary" />}
                        label="ถึงแก่กรรม"
                      />
                      <FormControlLabel
                        className="ml-2"
                        value="not_alive"
                        control={<Radio color="primary" />}
                        label="ยังมีชีวิตอยู่"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className="col-lg-2 mb-3">
                  <TextField style={{ width: "100%" }} label="อายุ" />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 mb-3">
                  <TextField
                    style={{ width: "100%" }}
                    label="เลขบัตรประจำตัวประชาชน"
                  />
                </div>

                <div className="col-lg-6 mb-3">
                  <TextField
                    style={{ width: "100%" }}
                    label="เลขบัตรประจำตัวผู้เสียภาษี"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 mb-3">
                  <FormControl style={{ width: "100%" }}>
                    <InputLabel id="demo-simple-select-label">
                      จบกาศึกษาสูงสุด
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={maxEdu}
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>ไม่มีวุฒิการศึกษา</MenuItem>
                      <MenuItem value={10}>ป.4</MenuItem>
                      <MenuItem value={10}>ป.6</MenuItem>
                      <MenuItem value={10}>ม.3</MenuItem>
                      <MenuItem value={10}>ม.6</MenuItem>
                      <MenuItem value={10}>ปวช.</MenuItem>
                      <MenuItem value={10}>ปวส.</MenuItem>
                      <MenuItem value={10}>ปริญญาตรี</MenuItem>
                      <MenuItem value={10}>ปริญญาโท</MenuItem>
                      <MenuItem value={10}>ปริญญาเอก</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="col-lg-6 mb-3">
                  <TextField style={{ width: "100%" }} label="จากสถานศึกษา" />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 mb-3">
                  <FormControl style={{ width: "100%" }}>
                    <InputLabel id="demo-simple-select-label">อาชีพ</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={carrer}
                      onChange={handleChange}
                    >
                      <MenuItem value={20}>รับราชการ</MenuItem>
                      <MenuItem value={20}>ค้าขาย</MenuItem>
                      <MenuItem value={20}>รับจ้าง</MenuItem>
                      <MenuItem value={20}>เกษตรกร</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="col-lg-6 mb-3">
                  <TextField
                    style={{ width: "100%" }}
                    label="รายได้ปีล่ะ(หากไม่แน่นอนให้ประมาณการ)"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-2 mb-3">
                  <TextField
                    style={{ width: "100%" }}
                    label="ที่อยู่ปัจจุบันเลขที่"
                  />
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
          return <div>Need props data 'typeParent'</div>;
        }
      })()}
    </React.Fragment>
  );
};

export default ParentStudent101;
