import Footer from "../../components/Footer/Footer"
import { Image } from "../../constant/images";
import { useContext, useState } from "react";
import { MoviesContext } from "../../context/context";

function Home() {



const { couress } = useContext(MoviesContext)



  return (
    <>
    <section>
{/* caroussel */}
{/* les images section  */}

<div className="  w-[1200px]  mx-auto h-[800px]  flex gap-10">

<div className="w-[365px]   flex flex-col gap-10  relative overflow-hidden  h-full ">
  <div  className="relative  overflow-hidden">
<img src={Image.model1} alt="" className=" object-cover   transition-transform duration-500 ease-in-out hover:scale-120" />
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 px-10 py-3">
      <h2 className="text-gray-700 tracking-widest text-lg font-medium">
        DRESSES
      </h2>
    </div>
  </div>





<img src={Image.card2} className="w-full h-[280px]   object-cover   transition-transform duration-500 ease-in-out hover:scale-120  " alt=""  />


 <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 px-10 py-3">
      <h2 className="text-gray-700 tracking-widest text-lg font-medium">
        SUNGLASSES
      </h2>
    </div>
</div>



<div className="w-[365px]    flex flex-col gap-9  h-full  ">
<div className="relative overflow-hidden">
<img src={Image.item1} alt="" className="w-full h-[330px] object-cover   transition-transform duration-500 ease-in-out hover:scale-120" />
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 px-10 py-3">
      <h2 className="text-gray-700 tracking-widest text-lg font-medium">
        WATCHES
      </h2>
    </div>

</div>

<div className="relative  overflow-hidden">
<img src={Image.card4} alt=""  className="  w-full   h-[430px] object-cover   transition-transform duration-500 ease-in-out hover:scale-120"/>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 px-10 py-3">
      <h2 className="text-gray-700 tracking-widest text-lg font-medium">
        FOOTERWEAR
      </h2>
    </div>


</div>
</div>
<div className="w-[365px]  flex  flex-col gap-7  h-full">

  <div className="relative overflow-hidden">
<img src={Image.card1} alt="" className="object-cover   transition-transform duration-500 ease-in-out hover:scale-120" />
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 px-10 py-3">
      <h2 className="text-gray-700 tracking-widest text-lg font-medium">
        BAGS
      </h2>
    </div>

  </div>

  <div className="relative overflow-hidden ">
<img src={Image.card3} alt="" className=" w-full h-[295px] object-cover   transition-transform duration-500 ease-in-out hover:scale-120 " />

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 px-10 py-3">
      <h2 className="text-gray-700 tracking-widest text-lg font-medium">
        ACCESSORIES
      </h2>
    </div>

  </div>

</div>




</div>









    </section>
  

<div>
{/* section number  */}

<div className="w-full bg-gray-100 py-16 flex justify-center">
  <div className="flex gap-10">

    <div className="relative w-[600px] h-[400px] overflow-hidden group">
      <img
        src={Image.model2}
        alt=""
        className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-white text-center">
        <h3 className="text-xl tracking-widest">The Beauty</h3>
        <h1 className="text-6xl font-bold">LOOKBOOK</h1>
        <p className="tracking-[4px] mt-3">VIEW COLLECTION</p>
      </div>
    </div>

    <div className=" relative w-[600px] h-[400px] overflow-hidden group   flex flex-col items-center justify-center">
      <img
        src={Image.item9}
        alt=""
        className="w-[600px] h-[ 400px] object-cover transition duration-500 group-hover:scale-110  "
      />
<div className="absolute inset-0  flex flex-col items-center pt-50 text-white text-center">
<h2 className="text-gray-700  text-lg mt-6">
        Boxy2 T-Shirt with Roll Sleeve
      </h2>
      <p className="mt-2 text-gray-600">¥3,123</p>

      <div className="flex gap-4 mt-6">

        <div className="border border-black px-4 py-2 text-center">
          <span className="block text-lg text-black font-medium">-2600</span>
          <span className="block text-sm text-gray-500">days</span>
        </div>

        <div className="border border-black px-4 py-2 text-center">
          <span className="block text-lg text-black font-medium">-14</span>
          <span className="block text-sm text-gray-500">hrs</span>
        </div>

        <div className="border border-black px-4 py-2 text-center">
          <span className="block text-black text-lg font-medium">-15</span>
          <span className="block text-black text-sm text-gray-500">mins</span>
        </div>

        <div className="border border-black px-4 py-2 text-center">
          <span className="block text-black text-lg font-medium">-45</span>
          <span className="block text-black text-sm text-gray-500">secs</span>
        </div>

      </div>
</div>
      

    </div>

  </div>
</div>


{/* our Blog  */}

<section className="w-full h-[1100px] flex flex-col pt-20   items-center gap-20   ">

<div className="text-[30px] font-bold"> OUR BLOG</div>
<div className=" flex flex-col gap-9  ">


 <div className="grid grid-cols-3 gap-10 w-[1200px] pb-10">
      {couress.map((item) => (
        <div key={item.id} className="flex flex-col gap-4">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[300px] object-cover"
          />

          <h2 className="text-xl font-semibold">{item.title}</h2>

          <p className="text-sm text-gray-500">
            by {item.author} on {item.date}
          </p>

          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>







<div className="">

<div className=" flex  flex-col gap-26 items-center jusrift-center  ">
<p className="text-[30px] font-medium text-center">@ FOLLOW US ON INSTAGRAM</p>
<div className="flex  gap-20">



<div>
  <p className="font-extralight text-center text-[20px] ">Free Delivery Worldwide</p>
  <p className="font-extralight text-gray-400  ">Mirum est notare quam littera gothica</p>
</div>

<div className="border-l-2 border-gray-200 ml-4 pl-5">
  <p className="font-extralight text-center text-[20px]   ">30 Days Return</p>
  <p className="font-extralight text-gray-400 ">Simply return it within 30 days for an exchange.</p>
</div>

<div className="border-l-2 border-gray-200 ml-4 pl-5">
  <p className="font-extralight  text-center text-[20px]">Store Opening</p>
  <p className="font-extralight text-gray-400 ">Shop open from Monday to Sunday</p>
</div>




</div>










</div>






</div>
<div></div>
<div></div>





</div>


  
</section>




<Footer/>
</div>
    </>
    

  )
}
export default Home