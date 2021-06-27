import React from "react";

import Header from "../Header/Header";
import Greeting from "../Greeting/Greeting";
import Form from "../Form/Form";
import Input from "../Input/Input";

function Profile() {
  return (
    <>
      <Header loggedIn={true} />
      <section className="profile">
        <Greeting greeting="Привет, Анастасия!" />
        <Form name="profile" noValidate>
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
            value={"Анастасия" || ""}
            error=""
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
            value={"pochta@yandex.ru" || ""}
            error=""
          />
          <div className="profile__container">
            <button type="button" className="profile__button">
              Редактировать
            </button>
            <button
              type="button"
              className="profile__button profile__button_type_logout"
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
