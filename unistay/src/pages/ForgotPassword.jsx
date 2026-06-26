import { Link } from "react-router-dom";

export default function ForgotPassword() {

return(

<div className="min-h-screen bg-[#12052c] flex items-center justify-center">


<div className="bg-white p-10 rounded-3xl w-[420px]">


<h1 className="text-3xl font-bold text-center">

Forgot Password

</h1>



<p className="text-gray-500 mt-4 text-center">

Enter your email address


</p>




<input

placeholder="Email"

className="w-full border p-4 rounded-xl mt-8"

/>



<button

className="w-full mt-6 bg-purple-600 text-white p-4 rounded-xl">

Send OTP


</button>



<p className="text-center mt-6">


<Link

to="/login"

className="text-purple-600">

Back to Login


</Link>


</p>



</div>



</div>


)

}