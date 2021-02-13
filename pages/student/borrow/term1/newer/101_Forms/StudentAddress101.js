import React from "react";

const typeAddress = {
  default: {
    form: 2,
    api_update_data: "",
  },
  current: {
    form: 3,
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
              <h2>{typeAddress[props.typeAddress].form}.StudentAddress101</h2>
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
