import React from "react";
import { Link } from "react-router-dom";

import Greeting from "../Greeting/Greeting";
import Form from "../Form/Form";
import Input from "../Input/Input";
import AuthFormButton from "../AuthFormButton/AuthFormButton";
import ToolTip from "../ToolTip/ToolTip";

import { useValidation } from '../../utils/formValidation';

import logo from "../../images/logo/logo.svg";

function Login({onLogin, isTooltipOpen, message}) {
  const loggedIn = false;
  const { values, errors, isValid, handleChange } = useValidation();

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(values.email, values.password);
  };

  return (
    <section className="login">
      <Link to="/" className="login__link">
        <img src={logo} alt="логотип" className="login__logo"></img>
      </Link>
      <Greeting greeting="Рады видеть!"
        loggedIn={loggedIn}
      />
      <Form name="login"
        onSubmit={handleSubmit}
        noValidate
      >
        <Input
          formStyle="login"
          id="email"
          name="email"
          label="E-mail"
          type="email"
          required
          autoComplete="off"
          placeholder=""
          minLength="2"
          maxLength="30"
          value={"" || values.email}
          error={errors.email}
          onChange={handleChange}
        />
        <Input
          formStyle="login"
          id="password"
          name="password"
          label="Пароль"
          type="password"
          required
          autoComplete="off"
          placeholder=""
          minLength="8"
          value={"" || values.password}
          error={errors.password}
          onChange={handleChange}
        />
        <ToolTip
          isOpen={isTooltipOpen}
          message={message}
        />
        <AuthFormButton
          isValid={!isValid}
        />
      </Form>
    </section>
  );
}

export default Login;
