import React from "react";
import { useLocation } from "react-router-dom";

function Form({
  name,
  children,
  onSubmit,
  noValidate,
  isTooltipOpen,
  message,
}) {
  const location = useLocation();

  const isProfilePage = location.pathname === "/profile";
  const isRegisterPage = location.pathname === "/signup";
  const isLoginPage = location.pathname === "/signin";

  return (
    <>
      {isProfilePage && (
        <form
          className="form form_type_profile"
          name={name}
          onSubmit={onSubmit}
          noValidate={noValidate}
        >
          {children}
        </form>
      )}
      {isRegisterPage && (
        <form
          className="form form_type_auth"
          name={name}
          onSubmit={onSubmit}
          noValidate={noValidate}
        >
          {children}
        </form>
      )}
      {isLoginPage && (
        <form
          className="form form_type_auth"
          name={name}
          onSubmit={onSubmit}
          noValidate={noValidate}
        >
          {children}
        </form>
      )}
    </>
  );
}

export default Form;
