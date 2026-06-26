export default function OTPVerification(){

return(

<div className="min-h-screen bg-[#12052c]

flex

items-center

justify-center">



<div className="bg-white p-10 rounded-3xl w-[450px]">


<h1 className="text-3xl font-bold text-center">

OTP Verification


</h1>



<p className="text-gray-500 mt-4 text-center">

Enter the 4 digit OTP


</p>



<div className="flex gap-4 justify-center mt-10">


<input className="w-14 h-14 border rounded-xl text-center"/>

<input className="w-14 h-14 border rounded-xl text-center"/>

<input className="w-14 h-14 border rounded-xl text-center"/>

<input className="w-14 h-14 border rounded-xl text-center"/>


</div>




<button

className="w-full mt-8 bg-purple-600 text-white p-4 rounded-xl">

Verify OTP


</button>



</div>



</div>

)

}