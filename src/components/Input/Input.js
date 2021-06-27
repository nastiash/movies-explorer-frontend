import React from "react";
import { useLocation } from "react-router-dom";

function Input({
  id,
  name,
  label,
  type,
  required,
  autoComplete,
  placeholder,
  minLength,
  maxLength,
  value,
  error,
}) {
  const location = useLocation();

  const isProfilePage = location.pathname === "/profile";
  const isRegisterPage = location.pathname === "/signup";
  const isLoginPage = location.pathname === "/signin";

  return (
    <>
      {isProfilePage && (
        <div
          className={`input__container input__container_type_profile ${
            error ? "input__container_error" : ""
          }`}
        >
          <label
            className="input__label input__label_type_profile"
            htmlFor={name}
          >
            {label}
          </label>
          <input
            className={`input input_type_profile ${
              error ? "input__error input__error_type_profile" : ""
            }`}
            id={id}
            name={name}
            label={label}
            type={type}
            required
            autoComplete="off"
            placeholder={placeholder}
            minLength={minLength}
            maxLength={maxLength}
            value={value}
            error={error}
          />
        </div>
      )}
      {isRegisterPage && (
        <div
          className={`input__container input__container_type_auth ${
            error ? "input__container_error" : ""
          }`}
        >
          <label className="input__label input__label_type_auth" htmlFor={name}>
            {label}
          </label>
          <input
            className={`input input_type_auth ${
              error ? "input__error input__error_type_auth" : ""
            }`}
            id={id}
            name={name}
            label={label}
            type={type}
            required
            autoComplete="off"
            placeholder={placeholder}
            minLength={minLength}
            maxLength={maxLength}
            value={value}
            error={error}
          />
        </div>
      )}
      {isLoginPage && (
        <div
          className={`input__container input__container_type_auth ${
            error ? "input__container_error" : ""
          }`}
        >
          <label className="input__label input__label_type_auth" htmlFor={name}>
            {label}
          </label>
          <input
            className={`input input_type_auth ${
              error ? "input__error input__error_type_auth" : ""
            }`}
            id={id}
            name={name}
            label={label}
            type={type}
            required
            autoComplete="off"
            placeholder={placeholder}
            minLength={minLength}
            maxLength={maxLength}
            value={value}
            error={error}
          />
        </div>
      )}
    </>
  );
}

export default Input;
