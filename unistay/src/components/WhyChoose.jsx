import {
FaShieldAlt,
FaLock,
FaTags,
FaHeadset
}
from "react-icons/fa";


export default function WhyChoose(){


return(


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