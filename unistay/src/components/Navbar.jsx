export default function Navbar() {

return(

<nav className="absolute top-5 left-0 right-0 z-50">

<div className="max-w-7xl mx-auto">


<div className="
bg-white/10
backdrop-blur-xl
border border-white/10
rounded-2xl
px-10
py-5
flex justify-between items-center
">


<h1 className="text-4xl font-bold text-white">

Uni

<span className="text-purple-400">

Stay

</span>

</h1>



<ul className="hidden md:flex gap-12 text-white">

<li>Home</li>

<li>Features</li>

<li>About</li>

<li>Contact</li>

</ul>




<button className="
bg-gradient-to-r
from-purple-600
to-pink-500
px-7
py-3
rounded-xl
text-white
">

Get Started

</button>



</div>


</div>


</nav>

)

}