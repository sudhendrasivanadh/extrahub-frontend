import React from'react'
import {Link,useNavigate} from'react-router-dom'
export default function Navbar(){
const user=JSON.parse(localStorage.getItem('user')||'null')
const nav=useNavigate()
const logout=()=>{localStorage.removeItem('token');localStorage.removeItem('user');nav('/')}
return <div className="p-4 flex justify-between items-center text-white">
<div className="text-xl font-bold">ExtraHub</div>
<div className="space-x-4">
<Link to='/' className="hover:underline">Home</Link>
{user?<>
<Link to='/dashboard' className="hover:underline">Dashboard</Link>
{user.role==='admin'&&<Link to='/admin' className="hover:underline">Admin</Link>}
<button onClick={logout} className="ml-2 px-3 py-1 rounded bg-white text-black">Logout</button>
</>:<>
<Link to='/login' className="hover:underline">Login</Link>
<Link to='/signup' className="hover:underline">Sign Up</Link>
</>}
</div>
</div>
}
