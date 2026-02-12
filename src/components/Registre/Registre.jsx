function Register () {
    return(

<>

<section className="flex flex-col " >
<div>
<p>Home/
Create Account</p>


</div>
<div className=" w-[1000px] mx-auto flex flex-col gap-4 p-8">

<p className="text-[43px] font-extralight ">
    Create Account
</p>

<p className="text-[20px] font-extralight    ">
Your Personal Details
</p>

<label htmlFor="">First Name</label>
<input type="text" placeholder="First Name " className="w-full border border-gray-300 p-3 rounded" />
<label htmlFor="">Last Name </label>
<input type="text" placeholder="Password" className="w-full border border-gray-300 p-3 rounded" />


<label htmlFor="">Email</label>
<input type="text" placeholder="Email" className="w-full border border-gray-300 p-3 rounded" />
<label htmlFor="">Password</label>
<input type="text" placeholder="Password" className="w-full border border-gray-300 p-3 rounded" />

<div className="flex items-center">
<button className="text-white  py-2 px-4 rounded bg-black w-[140px]">CREATE</button>
<p>or <span> Return to Store</span></p>
</div>   



</div>



























</section>
























</>

    )
}
export default Register