import { Box } from "@mui/system";
import React from "react";
import firebase from "./firebase";
import useAuth from "../../Hook/useAuth";

const Information = () => {
  const { user } = useAuth();
  const handleClick = () => {
    let recaptcha = new firebase.auth.reCaptchaVerifier("recaptcha");
    let number = <input type="number" name="" id="" />;
    firebase
      .auth()
      .signInWithPhoneNumber(number, recaptcha)
      .then(function (e) {
        let code = prompt("enter the otp", "");
        if (code == null) return;
        e.confirm(code)
          .then(function (result) {
            console.log(result.user, "user");
            document.querySelector("label").textContent =
              result.user.phoneNumber + "number verified";
          })
          .ctach((err) => {
            console.log(err);
          });
      });
  };

  return <div>{user.email ? <Box></Box> : <Box></Box>}</div>;
};

export default Information;
