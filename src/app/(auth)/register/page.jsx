"use client";

import "@/app/(auth)/login/login.css";
import Link from "next/link";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    console.log(data, "login");
    // console.log(errors, "errors");
  };

  // console.log(errors, "errors");

  return (
    <div className="w-11/12 mx-auto">
      <div className="min-h-[80vh] flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="px-8 py-8 border border-transparent bg-gradient-to-r from-gray-200 via-gray-300 to-gray-100 rounded-xl"
        >
          <p className="font-semibold text-orange-600  mb-7">
            Login to Dashboard
          </p>


          <div className="mb-5">
            <div className="input-group ">
              <input
                type="text"
                {...register("text", { required: "kamal Uddin" })}
                placeholder=" "
              />
              <label>Enter your name</label>
            </div>

            {errors.name && (
              <p className="text-[10px] text-red-700 mt-3">
                {errors.name?.message}
              </p>
            )}
          </div>

          <div className="mb-5">
            <div className="input-group ">
              <input
                type="text"
                {...register("photo", { required: "Type your photo url*" })}
                placeholder=" "
              />
              <label>Photo Url</label>
            </div>

            {errors.photo && (
              <p className="text-[10px] text-red-700 mt-1">
                {errors.photo?.message}
              </p>
            )}
          </div>

          <div className="mb-5">
            <div className="input-group ">
              <input
                type="email"
                {...register("email", { required: "kamal@exmaple.com*" })}
                placeholder=" "
              />
              <label>Email Address</label>
            </div>

            {errors.email && (
              <p className="text-[10px] text-red-700 mt-1">
                {errors.email?.message}
              </p>
            )}
          </div>

          <div className="mb-5">
            <div className="input-group ">
              <input
                type="password"
                placeholder=" "
                {...register("password", {
                  required:
                    "Must be at least 8 characters with 1 uppercase and 1 number*",
                })}
              />
              <label>Password</label>
            </div>

            {errors.password && (
              <p className="text-[10px] text-red-700 mt-3">
                {errors.password.message}
              </p>
            )}
          </div>
{/* 
          <p className="text-[12px]  text-gray-600 underline hover:text-orange-600 mb-3">
            <Link href="">Forgot password</Link>
          </p> */}

          <button
            type="submit"
            className="btn w-full bg-linear-to-t bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white mb-3"
          >
           Create an Account
          </button>

          <p className="text-sm text-center text-gray-700 ">
            Already have an account ?
            <span className="text-orange-600">
              <Link href={"/login"}> Login</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
