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
<div className="w-[365px]   flex-col gap-7  h-full">

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




  
<Footer/>
</div>
    </>
    

  )
}
export default Home