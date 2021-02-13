import React from "react";
import Error404 from "../pages/404";
import { useRouter } from "next/router";

const Guard = (Components) => (props) => {
  const router = useRouter();

  React.useEffect(() => {
    if (props.userLogin == null) {
      // router.replace("/login");
    }
  }, []);

  return (
    <React.Fragment>
      {(() => {
        if (props.userLogin != null) {
          return <Components {...props}></Components>;
        } else {
          return <Components {...props}></Components>;
          {
            /* return (
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ); */
          }
        }
      })()}
    </React.Fragment>
  );
};

export default Guard;
