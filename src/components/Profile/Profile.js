import React from "react";
import { useContext, useState, useEffect } from "react";

import Header from "../Header/Header";
import Greeting from "../Greeting/Greeting";
import Form from "../Form/Form";
import Input from "../Input/Input";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useValidation } from "../../utils/formValidation";

function Profile({ onSignOut, onUpdate }, loggedIn) {
  const [isSubmitButtonActive, setSubmitButtonActive] = useState(false);

  const currentUser = React.useContext(CurrentUserContext);

  const { values, setValues, errors, isValid, handleChange } = useValidation();

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate({
      name: values.name || currentUser.name,
      email: values.email || currentUser.email,
    });
  };

  useEffect(() => {
    setValues(currentUser);
  }, [currentUser, setValues]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className="profile">
        <Greeting loggedIn={true} greeting={`Привет, ${currentUser.name}!`} />
        <Form name="profile" onSubmit={handleSubmit} noValidate>
          <Input
            formStyle="profile"
            id="name"
            name="name"
            label="Имя"
            type="text"
            required
            autoComplete="off"
            placeholder="Имя"
            minLength="2"
            maxLength="30"
            regexp="[a-zA-Z -]{2,30}"
            value={values.name || ""}
            error={errors.name}
            onChange={handleChange}
          />
          <Input
            formStyle="profile"
            id="email"
            name="email"
            label="E-mail"
            type="email"
            required
            autoComplete="off"
            placeholder="E-mail"
            minLength="2"
            maxLength="30"
            value={values.email || ""}
            error={errors.email}
            onChange={handleChange}
          />
          <div className="profile__container">
            <button
              type="button"
              className={`profile__button ${
                !isValid ? "profile__button_disabled" : ""
              }`}
              onClick={handleSubmit}
              disabled={!isValid}
            >
              Редактировать
            </button>
            <button
              type="button"
              className="profile__button profile__button_type_logout"
              onClick={onSignOut}
            >
              Выйти из аккаунта
            </button>
          </div>
        </Form>
      </section>
    </>
  );
}

export default Profile;
