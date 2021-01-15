import "../styles/globals.scss";
import { ThemeProvider } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import ThemeConfig from "../components/themeConfig";
import useLocalStorage from "../components/localStorage";

const initialState = { tabSidenav: true };

function MyApp({ Component, pageProps }) {
  const [userLogin, patchUserLogin] = useLocalStorage("userLogin", {});
  const [state, patchState] = useState(initialState);
  const [initialPage, setInitialPage] = useState(true);

  const delayInitialPage = () => {
    return new Promise((res) => {
      setTimeout(() => {
        res(false);
      }, 300);
    });
  };

  delayInitialPage().then((val) => {
    setInitialPage(val);
  });

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      {(() => {
        if (initialPage) {
          return (
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          );
        } else {
          return (
            <ThemeProvider theme={ThemeConfig}>
              <Component
                {...pageProps}
                {...state}
                patchState={(e) => {
                  patchState({ ...state, ...e });
                }}
                userLogin={
                  Object.keys(userLogin).length > 0 ? { ...userLogin } : null
                }
                patchUserLogin={(e) => {
                  patchUserLogin(e);
                }}
              />
            </ThemeProvider>
          );
        }
      })()}
    </React.Fragment>
  );
}

export default MyApp;
