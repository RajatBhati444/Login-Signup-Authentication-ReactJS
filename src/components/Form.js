import React from "react";
import "../App.css";
import Input from "./Input";
import Button from "./Button";
import VisibilityToggle from "./VisiblityToggle";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { UserConsumer } from "../Context/UserContext";

const Form = props => {
  const {
    submitLabel,
    linkRoute,
    linkLabel,
    type,
    emailPlaceholder,
    passwordPlaceholer,
    onChangeHandle,
    LoginClick,
    password,
    email,
    signupchangehandle,
    keyName,
    createAc,
    submitType,
    submitClick,
    cnfPassword,
    name,
    gobacklabel,
    loginstatus,
    gobacklink
  } = props;

  return (
    <UserConsumer>
      { 
        data=>(
          <div className="formD">
      <VisibilityToggle visible={type === "signup"}>
        <label className="labelD"> Name: </label>
        <Input keyName="name" onChangeHandle={onChangeHandle} val={name} />
        <br />
      </VisibilityToggle>

      <label className="labelD"> Email: </label>
      <Input
        placeholder="enter email"
        onChangeHandle={onChangeHandle}
        val={email}
        keyName={"email"}
      />
      <br />
      <label className="labelD">Password: </label>
      <Input
        type="password"
        placeholder="enter password"
        onChangeHandle={onChangeHandle}
        keyName={"password"}
        val={password}
      />

      <br />

      <VisibilityToggle visible={type === "signup"}>
        <label className="labelD">Confirm Password: </label>
        <Input
          type="password"
          onChangeHandle={onChangeHandle}
          keyName={"cnfPassword"}
          val={cnfPassword}
        />
        <br />
      </VisibilityToggle>

      <div>
        <VisibilityToggle visible={type === "login"}>
          <Button name={submitLabel} LoginClick={LoginClick} />
          <Link to={linkRoute}  >{linkLabel}</Link>
        </VisibilityToggle>

        <VisibilityToggle visible={type === "signup"}>
          <Button name={createAc} LoginClick={LoginClick} />
          <Link to={gobacklink}  >{gobacklabel}</Link>
        </VisibilityToggle>
      </div>
    </div>
        )
      }
    </UserConsumer>
  );
};
export default Form;
