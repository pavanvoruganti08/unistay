import hero from "../assets/hero.png";

export default function Hero(){

return(

<section className="bg-[#12052c] pt-28 px-6">


<div className="max-w-7xl mx-auto">


<div className="relative rounded-3xl overflow-hidden">


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

)

}


