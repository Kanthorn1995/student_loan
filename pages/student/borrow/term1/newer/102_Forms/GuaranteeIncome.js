import React from "react";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const GuaranteeIncome = (props) => {
  const [value, setValue] = React.useState("female");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <React.Fragment>
        <h4>เอกสารรับรองรายได้</h4>
        <FormControl component="fieldset">
          <FormLabel component="legend">*เลือกไดเเพียง 1 ข้อ*</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="1.มีรายได้ประจำ"
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="2.มีบัตรสวัวดิการแห่งรัฐ"
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="3.ไม่มีรายได้ประจำ"
            />
          </RadioGroup>
        </FormControl>
        <div className="row">
          <div className="col-lg-6 mb-3">
            <TextField style={{ width: "100%" }} label="รายได้ต่อเดือน" />
          </div>

          <div className="col-lg-6 mb-3">
            <TextField style={{ width: "100%" }} label="รายได้ต่อปี" />
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};

export default GuaranteeIncome;
