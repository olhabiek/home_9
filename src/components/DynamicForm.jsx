import React from "react";
import { useForm } from "react-hook-form";
import styles from "./DynamicForm.module.css";

function DynamicForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const firstInput = watch("firstInput");
  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="firstInput">First Field</label>
        <input
          id="firstInput"
          {...register("firstInput", {
            required: "This field is required",
            minLength: {
              value: 5,
              message: "Minimum 5 characters required",
            },
          })}
        />
        {errors.firstInput && (
          <span className={styles.errorMessage}>
            {errors.firstInput.message}
          </span>
        )}
      </div>
      {firstInput && firstInput.length >= 5 && (
        <div className={styles.formGroup}>
          <label htmlFor="secondInput">Second Field</label>
          <input id="secondInput" {...register("secondInput")} />
        </div>
      )}
      <button type="submit">Submit</button>
    </form>
  );
}

export default DynamicForm;
