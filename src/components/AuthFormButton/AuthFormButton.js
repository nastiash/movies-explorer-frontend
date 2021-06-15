import React from "react";
import { useLocation } from "react-router-dom";

function AuthFormButton() {
  const location = useLocation();

  const isRegisterPage = location.pathname === "/signup";
  const isLoginPage = location.pathname === "/signin";

  return (
    <>
      {isRegisterPage && (
        <div className="button__container button__container_type_register">
          <button type="button button_type_signup" className="button">
            Зарегистрироваться
          </button>
          <p class="button__comment">
            Уже зарегистрированы?
            <a class="button__link" href="/signin">
              {" "}
              Войти
            </a>
          </p>
        </div>
      )}
      {isLoginPage && (
        <div className="button__container button__container_type_login">
          <button type="button button_type_signin" className="button">
            Войти
          </button>
          <p class="button__comment">
            Еще не зарегистрированы?
            <a class="button__link" href="/signup">
              {" "}
              Регистрация
            </a>
          </p>
        </div>
      )}
    </>
  );
}

export default AuthFormButton;
