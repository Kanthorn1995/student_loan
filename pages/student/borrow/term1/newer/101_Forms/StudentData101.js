import React from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
const StudentData101 = (props) => {
  //คำนำหน้า
  const [age, setAge] = React.useState("");
  const [max, setMax] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
    setMax(event.target.value);

    const useStyles = makeStyles((theme) => ({
      container: {
        display: "flex",
        flexWrap: "wrap",
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
    }));
  };
  return (
    <div>
      <h3>ข้อมูลส่วนตัวนักศึกษา</h3>
      <div className="row">
        <div className="col-lg-3 mb-3">
          <FormControl style={{ width: "100%" }}>
            <InputLabel id="demo-simple-select-label">คำนำหน้า</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={10}>นาย</MenuItem>
              <MenuItem value={10}>นาง</MenuItem>
              <MenuItem value={10}>นางสาว</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="col-lg-3 mb-3">
          <TextField style={{ width: "100%" }} label="ชื่อ" />
        </div>

        <div className="col-lg-3 mb-3">
          <TextField style={{ width: "100%" }} label="สกุล" />
        </div>

        <div className="col-lg-3 mb-3">
          <TextField style={{ width: "100%" }} label="รหัสนักศึกษา" />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3 mb-3">
          <form>
            <TextField
              style={{ width: "100%" }}
              id="date"
              label="วัน/เดือน/ปีเกิด"
              type="date"
              defaultValue="2000-01-01"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </div>

        <div className="col-lg-1 mb-3">
          <TextField style={{ width: "100%" }} label="อายุ" />
        </div>

        <div className="col-lg-2 mb-3">
          <TextField style={{ width: "100%" }} label="สัญชาติ" />
        </div>

        <div className="col-lg-2 mb-3">
          <TextField style={{ width: "100%" }} label="เชื้อชาติ" />
        </div>

        <div className="col-lg-4 mb-3">
          <TextField
            style={{ width: "100%" }}
            label="เลขที่บัตรประจำตัวประชาชน"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3 mb-3">
          <FormControl style={{ width: "100%" }}>
            <InputLabel id="demo-simple-select-label">ศึกษาระดับ</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={max}
              onChange={handleChange}
            >
              <MenuItem value={10}>ปวส.</MenuItem>
              <MenuItem value={10}>ปริญญาตรี</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="col-lg-4 mb-3">
          <TextField style={{ width: "100%" }} label="สาขาวิชา" />
        </div>

        <div className="col-lg-5 mb-3">
          <TextField style={{ width: "100%" }} label="คณะ" />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4 mb-3">
          <TextField style={{ width: "100%" }} label="เกรดเฉลี่ย" />
        </div>
        <div className="col-lg-8 mb-3">
          <TextField style={{ width: "100%" }} label="ชื่ออาจารย์ที่ปรึกษา" />
        </div>
      </div>
    </div>
  );
};

export default StudentData101;
