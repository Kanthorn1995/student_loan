import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const LoanOther101 = (props) => {
  const [value, setValue] = React.useState("nohaveloan");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <React.Fragment>
      <div>
        <h4>5.เคยได้รับทุนการศึกษา(ทุนการศึกาาอิ่นไม่รวมทุน กยศ./กรอ.)</h4>
      </div>
      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend"></FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="nohaveloan"
              control={<Radio />}
              label="ไม่เคยได้รับทุนการศึกษา"
            />
            <FormControlLabel
              value="haveloan"
              control={<Radio />}
              label="เคยได้รับทุนการศึกษา"
            />
          </RadioGroup>
        </FormControl>
      </div>

      <div className="mb-3">
        <Button variant="contained" color="primary">
          เพิ่มแถว
        </Button>
      </div>

      <table>
        <thead>
          <tr>
            <th scope="col">ปีการศึกษา</th>
            <th scope="col">ประเภททุนการศึกษา</th>
            <th scope="col">ชื่อทุนการศึกษา</th>
            <th scope="col">จำนวนเงิน</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="ปีการศึกษา">
              <TextField
                id="outlined-basic"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </td>
            <td data-label="ประเภททุนการศึกษ">
              <TextField
                id="outlined-basic"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </td>
            <td data-label="ชื่อทุนการศึกษา">
              <TextField
                id="outlined-basic"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </td>
            <td data-label="จำนวนเงิน">
              <TextField
                id="outlined-basic"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </td>
          </tr>
          <tr>
            <td scope="row" data-label="ปีการศึกษา">
              <TextField
                id="outlined-basic"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </td>
            <td data-label="ประเภททุนการศึกษ">
              <TextField
                id="outlined-basic"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </td>
            <td data-label="ชื่อทุนการศึกษา">
              <TextField
                id="outlined-basic"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </td>
            <td data-label="จำนวนเงิน">
              <TextField
                id="outlined-basic"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </td>
          </tr>

          <tr>
            <td scope="row" data-label="ปีการศึกษา">
              <TextField
                id="outlined-basic"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </td>
            <td data-label="ประเภททุนการศึกษ">
              <TextField
                id="outlined-basic"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </td>
            <td data-label="ชื่อทุนการศึกษา">
              <TextField
                id="outlined-basic"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </td>
            <td data-label="จำนวนเงิน">
              <TextField
                id="outlined-basic"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <style jsx>{`
        table {
          border-collapse: collapse;
          margin: 0;
          padding: 0;
          width: 100%;
          table-layout: fixed;
        }

        table tr {
          padding: 0.35em;
        }

        table th,
        table td {
          padding: 0.625em;
          text-align: center;
        }

        table th {
          font-size: 16px;
          letter-spacing: 0.1em;
        }

        tr,
        td,
        th {
          border: 1px solid #e0e0e0;
        }

        @media screen and (max-width: 900px) {
          table thead {
            clip: rect(0 0 0 0);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px;
          }

          table tr {
            display: block;
            margin-bottom: 0.625em;
          }

          table td {
            display: block;
            text-align: right;
            border: none;
          }

          table td::before {
            content: attr(data-label);
            float: left;
            font-weight: bold;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default LoanOther101;
