import React from "react";
import { useForm } from "react-hook-form";
function UseForm() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <form action="" onSubmit={handleSubmit((e) => console.log(e.target))}>
        <input
          {...register("username", {
            required: true,
            pattern: {
              value: /^[a-zA-Z0-0]+$/,
              message: "Username is not in format",
            },
          })}
        />
        {errors.username && <p>{errors.username.message}</p>}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UseForm;
