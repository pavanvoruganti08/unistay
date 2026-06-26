import hero from "../assets/hero.png";
import { Link } from "react-router-dom";

export default function Signup() {

  return (

    <div className="min-h-screen flex">

      {/* Left Side Illustration */}

      <div className="w-1/2 bg-[#12052c] flex items-center justify-center">

        <img
          src={hero}
          alt="hero"
          className="w-[90%] rounded-3xl shadow-2xl"
        />

      </div>



      {/* Right Side Form */}

      <div className="w-1/2 flex items-center justify-center bg-white">

        <div className="w-[420px]">

          <h1 className="text-4xl font-bold">

            Create Account

          </h1>


          <p className="text-gray-500 mt-3">

            Join UniStay and find your perfect hostel

          </p>



          <input

            type="text"

            placeholder="Full Name"

            className="w-full p-4 border rounded-xl mt-8"

          />



          <input

            type="email"

            placeholder="Email"

            className="w-full p-4 border rounded-xl mt-5"

          />



          <input

            type="password"

            placeholder="Password"

            className="w-full p-4 border rounded-xl mt-5"

          />



          <select

            className="w-full p-4 border rounded-xl mt-5"

          >

            <option>

              Student

            </option>


            <option>

              Hostel Owner

            </option>

          </select>



          <button

            className="w-full mt-8

            bg-purple-600

            hover:bg-purple-700

            text-white

            p-4

            rounded-xl"

          >

            Create Account

          </button>



          <button

            className="w-full mt-4

            border

            p-4

            rounded-xl"

          >

            Continue with Google

          </button>



          <p className="text-center mt-6">

            Already have an account?


            <Link

              to="/login"

              className="text-purple-600 ml-2"

            >

              Login

            </Link>


          </p>


        </div>

      </div>

    </div>

  );

}