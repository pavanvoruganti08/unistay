export default function PopularHostels() {

const hostels=[
{
name:"Sunrise Girls Hostel",
price:"₹6000/month",
rating:"4.8"
},
{
name:"UniStay Boys Hostel",
price:"₹5500/month",
rating:"4.7"
},
{
name:"Green Valley PG",
price:"₹7000/month",
rating:"4.9"
}
]

return(

<section className="bg-white py-16">

<h1 className="text-center text-4xl font-bold">

Popular Hostels

</h1>


<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">


{
hostels.map((h)=>(
<div className="bg-white rounded-3xl shadow-lg overflow-hidden">


<img
src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
className="h-56 w-full object-cover"
/>


<div className="p-5">

<h1 className="font-bold text-xl">

{h.name}

</h1>


<p className="text-purple-600 mt-2">

{h.price}

</p>


<p>

⭐ {h.rating}

</p>


<button className="mt-4 bg-purple-600 text-white px-5 py-2 rounded-full">

View Details

</button>


</div>

</div>
))
}



</div>

</section>

)

}