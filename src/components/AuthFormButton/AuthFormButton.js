import React from "react";
import { useLocation } from "react-router-dom";

function AuthFormButton({ isValid }) {
  const location = useLocation();

  const isRegisterPage = location.pathname === "/signup";
  const isLoginPage = location.pathname === "/signin";




  return (
    <>
      {isRegisterPage && (
        <div className="button__container button__container_type_register">
          <button
            className={`button button_type_signup ${isValid ? "button_disabled" : ""}`}
            type="submit"
            disabled={isValid}
          >
            Зарегистрироваться
          </button>
          <p className="button__comment">
            Уже зарегистрированы?
            <a className="button__link" href="/signin">
              {" "}
              Войти
            </a>
          </p>
        </div>
      )}
      {isLoginPage && (
        <div className="button__container button__container_type_login">
          <button
            className={`button button_type_signin ${isValid ? "button_disabled" : ""}`}
            type="submit"
            disabled={isValid}
          >
            Войти
          </button>
          <p className="button__comment">
            Еще не зарегистрированы?
            <a className="button__link" href="/signup">
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
