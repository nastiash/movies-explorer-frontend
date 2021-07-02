import React from "react";
import { useLocation, Link } from "react-router-dom";

function AuthFormButton({ isValid }) {
  const location = useLocation();

  const isRegisterPage = location.pathname === "/signup";
  const isLoginPage = location.pathname === "/signin";

  return (
    <>
      {isRegisterPage && (
        <div className="button__container button__container_type_register">
          <button
            className={`button button_type_signup ${
              isValid ? "button_disabled" : ""
            }`}
            type="submit"
            disabled={isValid}
          >
            Зарегистрироваться
          </button>
          <p className="button__comment">
            Уже зарегистрированы?
            <Link to="/signin" className="button__link">
              {" "}
              Войти
            </Link>
          </p>
        </div>
      )}
      {isLoginPage && (
        <div className="button__container button__container_type_login">
          <button
            className={`button button_type_signin ${
              isValid ? "button_disabled" : ""
            }`}
            type="submit"
            disabled={isValid}
          >
            Войти
          </button>
          <p className="button__comment">
            Еще не зарегистрированы?
            <Link to="/signup" className="button__link">
              {" "}
              Регистрация
            </Link>
          </p>
        </div>
      )}
    </>
  );
}

export default AuthFormButton;
