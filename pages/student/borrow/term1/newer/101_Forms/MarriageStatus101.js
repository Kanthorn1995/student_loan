import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

const MarriageStatus101 = (props) => {
  return (
    <div>
      <h4>10.สถานะภาพการสมรสของบิดา-มารดา</h4>
      <div className="row">
        <div className="col-lg-6 mb-3">
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
                value="stay"
                control={<Radio color="primary" />}
                label="อยู่ด้วยกัน"
              />
              <FormControlLabel
                className="ml-2"
                value="divorce"
                control={<Radio color="primary" />}
                label="หย่า"
              />

              <FormControlLabel
                className="ml-2"
                value="separate"
                control={<Radio color="primary" />}
                label="แยกกัยอยู่ตามอาชีพ"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div className="col-lg-6 mb-3">
          <TextField style={{ width: "100%" }} label="อื่นๆ" />
        </div>
      </div>
    </div>
  );
};

export default MarriageStatus101;
