import Theme from "../components/theme";
import React from "react";
import { useRouter } from "next/router";
import ThemePublic from "../components/theme_public";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Index = (props) => {
  const router = useRouter();

  React.useEffect(() => {
    // if (props.userLogin != null) {
    //   router.replace("/home");
    // } else {
    //   router.replace("/login");
    // }
  }, []);

  return (
    <div className="box-padding">
      <div className="row">
        <div className="col-lg-4 col-xl-3 mb-3">
          <div className="card">
            <div className="card-body">
              This is some text within a card body.
            </div>
          </div>
        </div>

        <div className="col-lg-8 col-xl-9">
          <div className="card">
            <div className="card-body">
              This is some text within a card body.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemePublic(Index);
