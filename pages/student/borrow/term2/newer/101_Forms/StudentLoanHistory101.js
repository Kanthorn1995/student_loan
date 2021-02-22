import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";

const StudentLoanHistory101 = (props) => {
  const [value, setValue] = React.useState("nohaveloan");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <React.Fragment>
      <div>
        <h4>
          6.เคยกู้ยืมจากกองทุนเงินให้กู้ยืมเพื่อการศึกษา(ข้อมูลเฉพาะการกู้ยืม
          กยศ./กรอ. เท่านั้น ระบุให้ครบทุกปีที่มีการกู้)
        </h4>
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
              control={<Radio color="primary" />}
              label="ไม่เคยกู้ยืมเงินจากกองทุนให้กู้ยืมเพื่อการศึกษา"
            />
            <FormControlLabel
              value="haveloan"
              control={<Radio color="primary" />}
              label="เคยกู้ยืมเงินจากกองทุนให้กู้ยืมเพื่อการศึกษา"
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
            <th scope="col-lg-1">ครั้งที่</th>
            <th scope="col">ปีการศึกาา</th>
            <th scope="col">ระดับชั้น</th>
            <th scope="col">ชั้นปี</th>
            <th scope="col">สถานศึกษา</th>
            <th scope="col">ค่าเล่าเรียน/ปี</th>
            <th scope="col">ค่าครองชีพ/ปี</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Account">Visa - 3412</td>
            <td data-label="Due Date">04/01/2016</td>
            <td data-label="Amount">$1,190</td>
            <td data-label="Period">03/01/2016 - 03/31/2016</td>
            <td data-label="Period"></td>
            <td data-label=""></td>
            <td data-label=""></td>
          </tr>
          <tr>
            <td scope="row" data-label="Account">
              Visa - 6076
            </td>
            <td data-label="Due Date">03/01/2016</td>
            <td data-label="Amount">$2,443</td>
            <td data-label="Period">02/01/2016 - 02/29/2016</td>
            <td data-label=""></td>
            <td data-label=""></td>
            <td data-label=""></td>
          </tr>
          <tr>
            <td scope="row" data-label="Account">
              Corporate AMEX
            </td>
            <td data-label="Due Date">03/01/2016</td>
            <td data-label="Amount">$1,181</td>
            <td data-label="Period">02/01/2016 - 02/29/2016</td>
            <td data-label=""></td>
            <td data-label=""></td>
            <td data-label=""></td>
          </tr>
          <tr>
            <td scope="row" data-label="Acount">
              Visa - 3412
            </td>
            <td data-label="Due Date">02/01/2016</td>
            <td data-label="Amount">$842</td>
            <td data-label="Period">01/01/2016 - 01/31/2016</td>
            <td data-label=""></td>
            <td data-label=""></td>
            <td data-label=""></td>
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

export default StudentLoanHistory101;
