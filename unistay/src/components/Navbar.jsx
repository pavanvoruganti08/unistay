import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50">

      <div className="max-w-7xl mx-auto">

        <div
          className="
          bg-white/10
          backdrop-blur-xl
          rounded-full
          px-10
          py-4
          flex
          justify-between
          items-center
        "
        >

          {/* Logo */}
          <Link to="/">

            <h1 className="text-4xl font-bold text-white">

              Uni

              <span className="text-purple-400">

                Stay

              </span>

            </h1>

          </Link>



          {/* Navigation Links */}
          <ul className="hidden md:flex gap-12 text-white">

            <li>

              <a
                href="#home"
                className="hover:text-purple-400 transition"
              >

                Home

              </a>

            </li>



            <li>

              <a
                href="#features"
                className="hover:text-purple-400 transition"
              >

                Features

              </a>

            </li>



            <li>

              <a
                href="#about"
                className="hover:text-purple-400 transition"
              >

                About

              </a>

            </li>



            <li>

              <a
                href="#contact"
                className="hover:text-purple-400 transition"
              >

                Contact

              </a>

            </li>

          </ul>



          {/* Buttons */}
          <div className="flex gap-4">

            <Link to="/login">

              <button
                className="
                px-6
                py-3
                text-white
                hover:text-purple-400
                transition
              "
              >

                Login

              </button>

            </Link>



            <Link to="/signup">

              <button
                className="
                bg-gradient-to-r
                from-purple-600
                to-pink-500
                px-7
                py-3
                rounded-full
                text-white
                hover:scale-105
                transition
              "
              >

                Get Started

              </button>

            </Link>

          </div>

        </div>

      </div>

    </nav>
  );
}