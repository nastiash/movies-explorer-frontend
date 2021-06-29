import React from "react";
import { Link } from "react-router-dom";

import Greeting from "../Greeting/Greeting";
import Form from "../Form/Form";
import Input from "../Input/Input";
import AuthFormButton from "../AuthFormButton/AuthFormButton";
import ToolTip from "../ToolTip/ToolTip";

import { useValidation } from '../../utils/formValidation';

import logo from "../../images/logo/logo.svg";

function Register({ onRegister, isTooltipOpen, message }) {
  const loggedIn = false;
  const { values, errors, isValid, handleChange } = useValidation();

  const handleSubmit = (event) => {
    event.preventDefault();
    onRegister(values.name, values.email, values.password);
  };

  return (
    <section className="register">
      <Link to="/" className="register__link">
        <img src={logo} alt="логотип" className="register__logo"></img>
      </Link>
      <Greeting greeting="Добро пожаловать!"
        loggedIn={loggedIn}
      />
      <Form name="register"
        onSubmit={handleSubmit}
        noValidate
        isOpen={isTooltipOpen}
        message={message}
        >
        <Input
          formStyle="register"
          id="name"
          name="name"
          label="Имя"
          type="text"
          required
          autoComplete="off"
          placeholder=""
          minLength="2"
          maxLength="30"
          regexp='[a-zA-Z -]{2,30}'
          value={"" || values.name}
          error={errors.name}
          onChange={handleChange}
        />
        <Input
          formStyle="register"
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
          formStyle="register"
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

export default Register;
