import { useState, useCallback } from "react";

export const useValidation = () => {
  const [isValid, setIsValid] = useState(false);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    //console.log(event.target);
    //console.log(target.name);
    //console.log(target.value);

    setValues({ ...values, [name]: value });
    setIsValid(target.closest("form").checkValidity());
    setErrors({ ...errors, [name]: target.validationMessage });
  };

  return {
    values,
    setValues,
    errors,
    isValid,
    handleChange,
  };
};
