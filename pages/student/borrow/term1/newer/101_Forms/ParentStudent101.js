import React from "react";

const typeParent = {
  father: {
    form: 7,
    api_update_data: "",
  },
  mother: {
    form: 8,
    api_update_data: "",
  },
  spouse: {
    form: 9,
    api_update_data: "",
  },
  other: {
    form: 15,
    api_update_data: "",
  },
};

const ParentStudent101 = (props) => {
  return (
    <React.Fragment>
      {(() => {
        if (props.typeParent) {
          return (
            <div>
              <h2>{typeParent[props.typeParent].form}.ParentStudent101</h2>
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
