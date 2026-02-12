import Footer from "../Footer/Footer"
import { Image } from "../../constant/images";

function Home() {
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



<Footer/>
</div>
    </>
    

  )
}
export default Home