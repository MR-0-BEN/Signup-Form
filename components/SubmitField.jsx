"use client";
import { useForm } from "react-hook-form";

const SubmitField = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  // console.log(watch("fname"));

  return (
    <>
      <div className="relative cursor-pointer">
        <p className="shadow-bottom-card relative mb-8 rounded-lg bg-[#5d54a3] text-center text-white shadow-2xl px-12 max-md:py-5 md:py-4">
          <a href="#">
            <span className="font-semibold">Try it free 7 days</span> then
            $20/mo. thereafter
          </a>
        </p>
      </div>
      <div className="relative">
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className=" shadow-bottom-card justify-left flex flex-wrap rounded-lg bg-white outline-none max-md:p-6 md:p-10"
        >
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            className={`input-style capitalize ${
              errors.fname ? "input-error" : ""
            }`}
            // defaultValue="test"
            {...register("fname", {
              required: "First Name can't be empty",
              minLength: {
                value: 3,
                message: "First Name must be at least 3 characters",
              },
            })}
          />
          {errors.fname && (
            <span className="error-message input-error-icon">
              {errors.fname.message}
            </span>
          )}
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            className={`input-style capitalize ${
              errors.lname ? "input-error" : ""
            }`}
            {...register("lname", {
              required: "Last Name can't be empty",
              minLength: {
                value: 3,
                message: "Last Name must be at least 3 characters",
              },
            })}
          />
          {errors.lname && (
            <span className="error-message input-error-icon">
              {errors.lname.message}
            </span>
          )}
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            className={`input-style ${errors.email ? "input-error" : ""}`}
            {...register("email", {
              required: "Email can't be empty",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Looks like this is not an email",
              },
            })}
          />
          {errors.email && (
            <span className="error-message input-error-icon">
              {errors.email.message}
            </span>
          )}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={`input-style capitalize ${
              errors.password ? "input-error" : ""
            }`}
            {...register("password", {
              required: "Password can't be empty",
              validate: (value) => {
                let errorMessage = "";
                if (value.length < 8) {
                  errorMessage = "Password must be at least 8 characters long.";
                } else {
                  // Check for other criteria
                  if (!/[A-Za-z]/.test(value)) {
                    errorMessage +=
                      " Include at least one letter (uppercase or lowercase).";
                  }
                  if (!/\d/.test(value)) {
                    errorMessage += " Include at least one digit (number).";
                  }
                  if (!/[$@$!%*?&]/.test(value)) {
                    errorMessage += " Include at least one special character.";
                  }
                }
                if (errorMessage) {
                  return errorMessage.trim(); // Trim leading space if there was no length error.
                }
              },
            })}
          />
          {errors.password && (
            <span className="error-message input-error-icon">
              {errors.password.message}
            </span>
          )}
          <input
            name="button"
            type="submit"
            value="claim your free trial"
            onClick={onSubmit}
            className="w-full cursor-pointer rounded-md bg-[#38CC8C] px-8 py-4 font-semibold uppercase text-white shadow-inner shadow-[#38CC8C] drop-shadow-2xl active:opacity-75"
          />
          <p className="w-full text-center text-xs text-black/40 max-md:px-3 max-md:py-3 max-md:leading-5 md:py-4 ">
            By clicking the button. you are agreeing to our{" "}
            <a className="cursor-pointer font-semibold text-[#FF7A7A]" href="#">
              terms and services
            </a>
          </p>
        </form>
      </div>
    </>
  );
};
export default SubmitField;
