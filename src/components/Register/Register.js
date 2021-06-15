import React from 'react';
import { Link } from "react-router-dom";

import Greeting from '../Greeting/Greeting';
import Form from '../Form/Form';
import Input from '../Input/Input';
import AuthFormButton from '../AuthFormButton/AuthFormButton';

import logo from "../../images/logo/logo.svg";

function Register() {

  return (
    <section className="register">
      <Link to="/" className="register__link">
        <img src={logo} alt="логотип" className="register__logo"></img>
      </Link>
      <Greeting
        greeting="Добро пожаловать!"
      />
      <Form name="register" noValidate>
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
          value=""
          error=""
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
          value=""
          error=""
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
          value=""
          error=""
        />
        <AuthFormButton />
      </Form>
    </section>
  )
}

export default Register;