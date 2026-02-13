


import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useState } from "react";

function User (){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedUsers, setLoggedUsers] = useState([]);
 
const handleLogin = () => {

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {

      setLoggedUsers((prev) => {
        const updated = [...prev, foundUser]; 
        console.log("Logged Users:", updated); 
        return updated;
      });

      alert("Login successful ");

    } else {
      alert("Email not found  Please register first.");
    }
  };






    return(

<>
<section className="flex flex-col gap-5">
<div>
    Home /
Account
</div>



<section className="flex gap-10  justify-center">


<div className=" flex flex-col gap-5 w-[495px] h-[250px]  font-extralight   border-2 border-gray-100 p-4">
<div>
<p className="text-[30px] font-extralight">New Customer</p>
<p className="text-gray-800">Register Account</p>
<p className="text-gray-400">By creating an account you will be able to shop faster,<br /> be up to date on an order's status, and keep track of the orders you have previously made.</p>



</div>


<div>
    <Link to="/registre">
<p className="text-white  py-2 px-4 rounded bg-black w-[140px] flex items-center justify-center">CONTINUE</p>
</Link>
</div>





</div>


<div className="flex flex-col gap-5 w-[490px] h-[450px] font-extralight   border-2 border-gray-100 p-4">
<p className="text-[30px] font-extralight">Returning Customer</p>
<p className="text-gray-400">I am a returning customer</p>
<label htmlFor="">Email</label>
<input type="text" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder="Email"     className="w-full border border-gray-300 p-3 rounded" />
<label htmlFor="">Password</label>
<input type="text"  value={password}  onChange={(e) => setPassword(e.target.value)}  placeholder="Password" className="w-full border border-gray-300 p-3 rounded" />
<p>Forgot your password?</p>
<div className="flex items-center ">
<button onClick={handleLogin}  className="text-white  py-2 px-4 rounded bg-black w-[140px]">SIGIN IN</button>
<p>or <span> Return to Store</span></p>
</div>



</div>






















</section>


        <Footer/>




</section>


















</>

    )
}
export default User 





