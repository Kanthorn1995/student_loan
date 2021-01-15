import Theme from "../components/theme";
import React from "react";
import { useRouter } from "next/router";
import ThemePublic from "../components/theme_public";

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
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default ThemePublic(Index);
