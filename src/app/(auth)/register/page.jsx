"use client";

import "@/app/(auth)/login/login.css";
import { authClient } from "@/lib/auth-client";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    // console.log(data, "login");

    const { data: res, error } = await authClient.signUp.email(
      {
        name: data.name,
        email: data.email,
        password: data.password,
        image: data.photo,
        callbackURL: "/",
      },
      {
        // REQUEST START
        onRequest: () => {
          setLoading(true);
        },
        // SUCCESS
        onSuccess: (ctx) => {
          toast.success(`Hello, Welcome ${data.name} Signed in successfully`);

          // SMALL UX DELAY
          setTimeout(() => {
            redirect("/");
          }, 1200);
        },
        // ERROR
        onError: (ctx) => {
          // display the error message
          toast.error(ctx.error.message);
        },
        // FINALLY
        onResponse: () => {
          setLoading(false);
        },
      },
    );
    // console.log(res, error);
  };

  // console.log(errors, "errors");

  return (
    <div className="w-11/12 mx-auto">
      <div className="min-h-[80vh] flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="px-8 py-8 border border-transparent bg-gradient-to-r from-gray-200 via-gray-300 to-gray-100 rounded-xl"
        >
          <p className="font-semibold text-orange-600  mb-7">
            Sign up for News Page
          </p>

          <div className="mb-5">
            <div className="input-group ">
              <input
                type="text"
                {...register("name", { required: "kamal Uddin" })}
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
                type={showPassword ? "text" : "password"}
                placeholder=" "
                {...register("password", {
                  required:
                    "Must be at least 8 characters with 1 uppercase and 1 number*",
                })}
              />
              <label>Password</label>
              <span
                className="absolute right-2 top-2 text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Eye /> : <EyeOff />}
              </span>
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
            className="btn w-full bg-linear-to-t bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white mb-3   disabled:cursor-not-allowed
              disabled:opacity-70"
          >
            {loading ? (
              <>
                Signing In...
                <span className="loading loading-spinner loading-sm"></span>
              </>
            ) : (
              "Create an Account"
            )}
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
