import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import PopularHostels from "./components/PopularHostels";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import OTPVerification from "./pages/OTPVerification";


function HomePage(){

return(

<>

<Navbar/>

<div id="home">

<Hero/>

</div>

<WhyChoose/>

<PopularHostels/>

<About/>

<Testimonials/>

<Contact/>

<Footer/>

</>

)

}


function App(){

return(

<Routes>

<Route

path="/"

element={<HomePage/>}

/>


<Route

path="/login"

element={<Login/>}

/>



<Route

path="/signup"

element={<Signup/>}

/>



<Route

path="/forgot-password"

element={<ForgotPassword/>}

/>



<Route

path="/otp"

element={<OTPVerification/>}

/>



</Routes>

)

}

export default App;