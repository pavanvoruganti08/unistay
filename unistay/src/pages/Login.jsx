import hero from "../assets/hero.png";
import { Link } from "react-router-dom";

export default function Login() {

  return (

    <div className="min-h-screen flex">

      {/* Left Side Illustration */}

      <div className="w-1/2 bg-[#12052c] flex items-center justify-center">

        <img
          src={hero}
          alt="Hero"
          className="w-[90%] rounded-3xl shadow-2xl"
        />

      </div>


      {/* Right Side Login Form */}

      <div className="w-1/2 bg-white flex items-center justify-center">

        <div className="w-[420px]">


          <h1 className="text-4xl font-bold">

            Welcome Back

          </h1>


          <p className="text-gray-500 mt-3">

            Login to continue booking hostels

          </p>


          {/* Email */}

          <input

            type="email"

            placeholder="Email"

            className="
            w-full
            p-4
            border
            rounded-xl
            mt-8
            outline-none
            "

          />


          {/* Password */}

          <input

            type="password"

            placeholder="Password"

            className="
            w-full
            p-4
            border
            rounded-xl
            mt-5
            outline-none
            "

          />


          {/* Remember Me */}

          <div className="flex justify-between mt-5">

            <label className="flex items-center">

              <input type="checkbox"/>

              <span className="ml-2">

                Remember Me

              </span>

            </label>



            <Link

              to="/forgot-password"

              className="text-purple-600"

            >

              Forgot Password?

            </Link>

          </div>



          {/* Login Button */}

          <button

            className="
            w-full
            mt-8
            bg-purple-600
            hover:bg-purple-700
            text-white
            p-4
            rounded-xl
            transition
            "

          >

            Login

          </button>



          {/* Google Login */}

          <button

            className="
            w-full
            mt-4
            border
            p-4
            rounded-xl
            hover:bg-gray-100
            transition
            "

          >

            Continue with Google

          </button>



          {/* Signup Link */}

          <p className="text-center mt-6">

            Don't have an account?


            <Link

              to="/signup"

              className="text-purple-600 ml-2"

            >

              Sign Up

            </Link>

          </p>


        </div>

      </div>

    </div>

  );

}