import React from'react'
import Navbar from'../components/Navbar'
export default function Home(){
return <div className="min-h-screen bg-main text-white">
<Navbar/>
<section className="max-w-5xl mx-auto p-8">
<div className="flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<h1 className="text-4xl font-extrabold mb-4">ExtraHub</h1>
<p className="mb-6">Centralize and verify student extracurricular achievements. Build a credible portfolio for placements and admissions.</p>
<a href="/signup" className="px-5 py-3 rounded bg-gradient-to-r from-purple-500 to-indigo-600">Get Started</a>
</div>
<div className="flex-1 card">
<h3 className="text-xl font-semibold mb-2">Why ExtraHub</h3>
<ul className="list-disc ml-5">
<li>Centralized achievement records</li>
<li>Teacher verification workflow</li>
<li>Analytics and reports</li>
</ul>
</div>
</div>
</section>
</div>
}
