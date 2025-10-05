import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

interface Inputs {
  firstName: string;
  lastName: string;
  age: number;
  date: Date;
  email: string;
  gender: string;
  hobbies: Array<any>;
  subscribed: boolean;
}
function ZodFormComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  useEffect(() => {
    console.log("child rendered");
  });
  const ref = useRef<any>("");
  return (
    <div>
      <h1 className="text-5xl font-extrabold">React form tutorial</h1>
      <input
        type="text"
        onChange={(e) => {
          ref.current = e.target?.value;
        }}
      />
      {ref.current}
      <form
        action="post"
        target=""
        onSubmit={handleSubmit((e) => {
          console.log(e);
        })}
      >
        <label htmlFor="fname" className="text-2xl">
          First Name
        </label>
        <input type="text" id="fname" className="border-2" {...register("firstName")} />
        <label htmlFor="lname">Last Name</label>
        <input type="text" id="lname" className="border-2" {...register("lastName")} />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" className="border-2" {...register("email")} />
        <label htmlFor="age">Age</label>
        <input type="number" id="age" className="border-2" {...register("age")} />
        <label htmlFor="gender">Gender - </label>
        <select {...register("gender")} className="border-[1px]">
          <option value="" selected disabled>
            Select
          </option>

          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <br />
        <label htmlFor="date">Start date </label>
        <input type="date" id="date" className="border-2" />
        <label htmlFor="hobbies">Hobbies </label>
        <input type="text" id="hobbies" className="border-2" />
        <br />
        <input type="button" value={"Add Hobbie"} onClick={() => console.log(ref.current)} className="border-[1px]" />
        <label htmlFor="subscribe">Subscribe to newslater</label>
        <input type="checkbox" name="" id="subscribe" />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default ZodFormComponent;
