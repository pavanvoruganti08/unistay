export default function ForgotPassword() {

return (

<div className="min-h-screen bg-[#12052c] flex items-center justify-center">


<div className="bg-white/10 backdrop-blur-xl

p-10

rounded-3xl

w-[400px]

shadow-2xl">


<h1 className="text-3xl font-bold text-white text-center">

Forgot Password

</h1>



<p className="text-slate-300 mt-4 text-center">

Enter your registered email

</p>



<input

type="email"

placeholder="Email Address"

className="w-full mt-8

p-4

rounded-xl

outline-none"

/>




<button

className="w-full mt-6

bg-purple-600

hover:bg-purple-700

text-white

p-4

rounded-xl">


Send OTP


</button>



</div>



</div>

)

}