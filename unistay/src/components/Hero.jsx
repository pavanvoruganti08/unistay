import hostel from "../assets/hostel.png";
import student from "../assets/student.png";

export default function Hero() {
  return (

<section className="pt-28 px-10">

<div className="bg-gradient-to-r
from-[#12052c]
to-[#32105f]

rounded-3xl

p-10

relative

overflow-hidden">


<div className="grid md:grid-cols-2 items-center">


<div>


<h1 className="text-5xl

font-bold

text-white">

Find Your Perfect Stay


</h1>


<h2 className="text-4xl

font-bold

text-white mt-2">

Live. Study. Thrive.


</h2>



<p className="text-slate-300

mt-5">


Search for suitable stay near you


</p>




<div className="flex

mt-5">


<input

placeholder="Search for hostel near you..."


className="bg-white

p-4

rounded-l-xl

w-72"


/>


<button className="bg-purple-600


px-6


text-white


rounded-r-xl">


Explore


</button>


</div>



<div className="flex

gap-12


mt-10">


<div>

<h1 className="text-white

text-3xl

font-bold">

10K+


</h1>

<p className="text-slate-300">

Happy Students


</p>

</div>


<div>

<h1 className="text-white

text-3xl

font-bold">

5K+


</h1>

<p className="text-slate-300">

Hostels


</p>

</div>



<div>

<h1 className="text-white

text-3xl

font-bold">

4.8★


</h1>

<p className="text-slate-300">

User Rating


</p>

</div>


</div>



</div>




<div className="relative">


<img

src={hostel}

className="w-[500px]"


/>



<img

src={student}


className="absolute

bottom-0

right-0

w-52"


/>


</div>



</div>


</div>



</section>


  );
}