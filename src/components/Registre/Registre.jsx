import { useState } from "react";






function Register () {



  const [users, setUsers] = useState([]); 
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleRegister = () => {
  if (firstName && lastName && email && password) {

    const newUser = { firstName, lastName, email, password };

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = [...existingUsers, newUser];

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    console.log("Users:", updatedUsers);

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");

    alert("User registered successfully!");
  } else {
    alert("Please fill all the fields!");
  }
};






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
<input type="text" placeholder="First Name "  value={firstName}    onChange={(e) => setFirstName(e.target.value)}  className="w-full border border-gray-300 p-3 rounded" />
<label htmlFor="">Last Name </label>
<input type="text" placeholder="Password"    onChange={(e) => setLastName(e.target.value)}  value={lastName} className="w-full border border-gray-300 p-3 rounded" />


<label htmlFor="">Email</label>
<input type="text" placeholder="Email"  value={email}  onChange={(e) => setEmail(e.target.value)}  className="w-full border border-gray-300 p-3 rounded" />
<label htmlFor="">Password</label>
<input type="text" placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)} className="w-full border border-gray-300 p-3 rounded" />

<div className="flex items-center">
<button   onClick={handleRegister} className="text-white  py-2 px-4 rounded bg-black w-[140px]">CREATE</button>
<p>or <span> Return to Store</span></p>
</div>   



</div>



























</section>
























</>

    )
}
export default Register