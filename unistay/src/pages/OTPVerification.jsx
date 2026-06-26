export default function OTPVerification(){


return(

<div className="min-h-screen bg-[#12052c]

flex

items-center

justify-center">



<div className="bg-white/10

backdrop-blur-xl

p-10

rounded-3xl

w-[420px]">



<h1 className="text-3xl font-bold text-white text-center">

OTP Verification


</h1>



<p className="text-slate-300 text-center mt-4">


Enter the OTP sent to your email


</p>




<div className="flex gap-4 mt-10 justify-center">



<input className="w-14 h-14 text-center rounded-xl"/>

<input className="w-14 h-14 text-center rounded-xl"/>

<input className="w-14 h-14 text-center rounded-xl"/>

<input className="w-14 h-14 text-center rounded-xl"/>



</div>




<button

className="w-full mt-8

bg-purple-600

hover:bg-purple-700

text-white

p-4

rounded-xl">


Verify OTP


</button>




</div>



</div>


)


}