import hero from "../assets/hero.png";

import {
FaShieldAlt,
FaLock,
FaTags,
FaHeadset
}
from "react-icons/fa";

export default function Hero(){

return(

<>

<section className="bg-[#12052c] pt-28 px-6">


<div className="max-w-7xl mx-auto">


<div className="relative overflow-hidden rounded-3xl">


<img

src={hero}

alt="hero"

className="w-full h-[650px] object-cover"

/>



<div className="absolute inset-0 bg-black/40"/>




<div className="absolute top-16 left-16 z-10">


<h1 className="text-6xl font-bold text-white">

Find Your Perfect Stay

</h1>



<h2 className="text-5xl font-bold text-white mt-3">

Live. Study.

<span className="text-purple-400">

 Thrive.

</span>

</h2>




<p className="text-slate-300 text-xl mt-6">

Search for suitable stay near you

</p>





<div className="flex mt-8">


<input


placeholder="Search for hostel near you..."


className="bg-white

w-[420px]

p-4

rounded-l-xl

outline-none"

/>



<button


className="bg-purple-600


px-8


rounded-r-xl


text-white">


Explore


</button>



</div>






<div className="flex gap-16 mt-12">



<div>

<h1 className="text-white

text-5xl

font-bold">


10K+


</h1>



<p className="text-white">


Happy Students


</p>


</div>






<div>


<h1 className="text-white

text-5xl

font-bold">


5K+


</h1>



<p className="text-white">


Hostels Available


</p>


</div>







<div>


<h1 className="text-white

text-5xl

font-bold">


4.8★


</h1>



<p className="text-white">


User Rating


</p>


</div>



</div>



</div>



</div>



</div>


</section>






<section


id="features"


className="bg-white py-16">



<h1 className="text-center text-4xl font-bold">


Why Choose


<span className="text-purple-600">


 UniStay?


</span>


</h1>




<div className="grid md:grid-cols-4 gap-8

max-w-6xl

mx-auto

mt-12">



<Card

icon={<FaShieldAlt/>}

title="Verified Hostels"

desc="Verified properties"

/>





<Card

icon={<FaLock/>}

title="Safe & Secure"

desc="Encrypted Payments"

/>





<Card

icon={<FaTags/>}

title="Best Prices"

desc="Affordable Rooms"

/>






<Card

icon={<FaHeadset/>}

title="24x7 Support"

desc="Always Available"

/>



</div>



</section>


</>

)



}




function Card({icon,title,desc}){


return(



<div className="bg-white


rounded-3xl


shadow-lg


hover:shadow-2xl


transition-all


duration-300


p-8


text-center">





<div className="w-16


h-16


mx-auto


rounded-full


bg-purple-100


flex


items-center


justify-center">



<div className="text-purple-600 text-2xl">


{icon}



</div>



</div>





<h1 className="mt-5 font-bold text-xl">


{title}



</h1>





<p className="text-gray-500 mt-3">


{desc}



</p>




</div>




)



}