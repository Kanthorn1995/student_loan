import TextField from "@material-ui/core/TextField";

const MaxEducation101 = (props) => {
  return (
    <div>
      <h4>4.จบการศึกษาขั้นสูงสุด</h4>
      <div className="row">
        <div className="col-lg-6 mb-3">
          <TextField
            style={{ width: "100%" }}
            label="จบการศึกษาขั้นสูงสุด ระดับ"
          />
        </div>

        <div className="col-lg-6 mb-3">
          <TextField style={{ width: "100%" }} label="สาขา" />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 mb-3">
          <TextField style={{ width: "100%" }} label="สถานศึกษา" />
        </div>

        <div className="col-lg-6 mb-3">
          <TextField style={{ width: "100%" }} label="ปีการศึกษา" />
        </div>
      </div>
    </div>
  );
};

export default MaxEducation101;
