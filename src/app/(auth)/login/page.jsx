"use client";

import "@/app/(auth)/login/login.css";

import { authClient } from "@/lib/auth-client";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // LOGIN
  const handleLogin = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email.trim(),
      password: data.password,
      callbackURL: redirect,

      fetchOptions: {
        // REQUEST START
        onRequest: () => {
          setLoading(true);
        },

        // SUCCESS
        onSuccess: () => {
          toast.success(`Welcome Back 🎉`);
          router.push(redirect);
        },

        // ERROR
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },

        // FINALLY
        onResponse: () => {
          setLoading(false);
        },
      },
    });
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="min-h-[80vh] flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit(handleLogin)}
          className=" px-8 p-20 border border-transparent bg-gradient-to-r from-gray-200 via-gray-300 to-gray-100 rounded-xl"
        >
          <p className="font-semibold text-orange-600 mb-7">
            Login your account
          </p>
          <div className="mb-6">
            <div className="input-group ">
              <input
                type="email"
                {...register("email", { required: "kamal@exmaple.com*" })}
                placeholder=" "
              />
              <label>Email Address</label>{" "}
            </div>
            {errors.email && (
              <p className="text-[10px] text-red-700 mt-2">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="mb-2">
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
                className="absolute right-2 top-2 text-gray-600 "
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Eye /> : <EyeOff />}
              </span>
            </div>
            {errors.password && (
              <p className="text-[10px] text-red-700 mt-2">
                {errors.password.message}
              </p>
            )}
          </div>
          <p className="text-[12px] text-gray-600 underline hover:text-orange-600 mb-3">
            <Link href="">Forgot password</Link>
          </p>
          <button
            type="submit"
            disabled={loading}
            className="btn w-full bg-linear-to-t bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white mb-3   disabled:cursor-not-allowed
              disabled:opacity-70"
          >
            {loading ? (
              <>
                Logging...
                <span className="loading loading-spinner loading-sm"></span>
              </>
            ) : (
              "Login"
            )}
          </button>
          <p className="text-sm text-center text-gray-700 ">
            Don’t have an account ?
            <span className="text-orange-600">
              <Link href={"/register"}> Register</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
