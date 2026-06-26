export default function Navbar() {

return(

<nav className="fixed top-4 left-0 right-0 z-50">

<div className="max-w-7xl mx-auto">


<div className="bg-white/10 backdrop-blur-xl

rounded-full

px-10 py-4

flex justify-between items-center">


<h1 className="text-4xl font-bold text-white">

Uni

<span className="text-purple-400">

Stay

</span>

</h1>



<ul className="hidden md:flex gap-12 text-white">


<li>

<a href="#home">

Home

</a>

</li>


<li>

<a href="#features">

Features

</a>

</li>



<li>

<a href="#about">

About

</a>

</li>



<li>

<a href="#contact">

Contact

</a>

</li>



</ul>



<button className="bg-gradient-to-r

from-purple-600

to-pink-500

px-7 py-3

rounded-full

text-white">

Get Started

</button>



</div>

</div>

</nav>

)

}