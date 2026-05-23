import "@/app/(auth)/login/login.css";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="w-11/12 mx-auto shadow rounded">
      <div className="min-h-[80vh] flex flex-col items-center justify-center">
        <form className="space-y-4 ">
          <p className="font-semibold text-orange-600">Login to Dashboard</p>

          <div className="input-group">
            <input type="email" name="email" required />
            <label>Email Address</label>
          </div>

          <div className="input-group">
            <input type="password" name="password" required />
            <label>Password</label>
          </div>

          <p className="text-[14px]  text-gray-600 underline hover:text-orange-600">
            <Link href="">Forgot password</Link>
          </p>

          <button className="btn w-full bg-linear-to-t bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white">
            Login
          </button>

          <p className="text-sm text-center text-gray-700">
            Don't have an account{" "}
            <span className="text-orange-600">
              <Link href={"/register"}>Sign up</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
