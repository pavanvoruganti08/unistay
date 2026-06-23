export default function SearchCard() {


return(

<div className="bg-white/10
backdrop-blur-xl
border
border-white/20
rounded-3xl
p-6
w-full
max-w-4xl">


<div className="grid
md:grid-cols-4
gap-5">



<input

placeholder="Location"

className="bg-slate-800
text-white
rounded-xl
p-4"

/>



<select className="bg-slate-800
text-white
rounded-xl
p-4">


<option>

Girls Hostel

</option>


<option>

Boys Hostel

</option>



<option>

Co-Living

</option>



</select>



<input

placeholder="Budget"

className="bg-slate-800
text-white
rounded-xl
p-4"

/>



<button className="bg-gradient-to-r

from-purple-600

to-pink-500

rounded-xl

text-white">


Search


</button>



</div>



</div>



)



}