import React from "react";
import { Link } from "react-router-dom";

import Greeting from "../Greeting/Greeting";
import Form from "../Form/Form";
import Input from "../Input/Input";
import AuthFormButton from "../AuthFormButton/AuthFormButton";

import logo from "../../images/logo/logo.svg";

function Login() {
  return (
    <section className="login">
      <Link to="/" className="login__link">
        <img src={logo} alt="логотип" className="login__logo"></img>
      </Link>
      <Greeting greeting="Рады видеть!" />
      <Form name="login" noValidate>
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
          value=""
          error=""
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
          value=""
          error=""
        />
        <AuthFormButton />
      </Form>
    </section>
  );
}

export default Login;
