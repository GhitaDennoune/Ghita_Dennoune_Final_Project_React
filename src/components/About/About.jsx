import Footer from "../Footer/Footer";

import { Image } from "../../constant/images";





function About() {
  return (
    
    <section className="flex flex-col gap-15">
      <div className="relative w-full">
       <img src={Image.About} alt="" className="w-[100%]    "/>
<h1 className="absolute inset-0 flex items-center justify-center text-white text-[50px] font-bold">
    About
  </h1>
      </div>


      <div className="flex  justify-center gap-13  ">
        <div className="overflow-hidden">
        <img src={Image.shopy} alt="" className="w-[370px] h-[425px]   object-cover   transition-transform duration-500 ease-in-out hover:scale-120" />

        </div>

        <div className="w-[750px] flex flex-col gap-5 ">

          <p className="font-extralight text-[25px]">Our story</p>
          <p className="font-extralight text-[#888]">Phasellus egestas nisi nisi, lobortis ultricies risus semper nec.
            Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan,
            vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis
            magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce
            eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula.
            Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis,
            eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit,
            vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum,
            et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.</p>


<div className="flex flex-col gap-3 border-l-3 border-gray-300 ml-4 pl-5">
          <p className="font-extralight text-[#888]">Creativity is just connecting things. When you ask creative people how they did something,
             they feel a little guilty because  they didn't really do it,
             they just saw something. <br /> It seemed obvious to them after a while.</p>
          <p className="font-extralight text-black-100 ">- Steve Job’s</p>
         </div>


        </div>

      </div>

      <div>
        <Footer/>
      </div>


    </section>
  )
}
export default About