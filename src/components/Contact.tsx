import { motion } from "framer-motion";
import { Button } from "./ui/button"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { fadeIn } from "./variants";

function Contact() {

  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");


  return (
  <div className="mt-[100px]" id="contact">
    <div className="text-3xl sm:text-4xl md:text-5xl font-DMsans font-semibold text-center text-black capitalize ">Take A <span  className="text-blue-900">Coffee</span> & <span className="text-blue-900">Connect</span> With Me</div>
    <div className="flex  md:flex-row flex-col  items-center justify-center md:space-x-10 mt-[64px]">
      <motion.div variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }} >
      <button className=" shadow-2xl flex bg-pink-50 h-[70px] min-w-[290px]   rounded-xl items-center p-[16px]">
       <img src="https://www.connectwithahmed.com/_next/image?url=%2Femail.png&w=1920&q=75" className="h-[30px] w-auto mr-2" alt="" />
       <a href="mailto:mohammthegreat@gmail.com">mohammthegreat@gmail.com</a>
      </button>
      </motion.div>
      <motion.div variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }} >
      <button className="  shadow-2xl flex bg-blue-50 h-[70px] min-w-[290px] md:mt-[0] mt-[20px]   rounded-xl items-center p-[16px]">
       <img src="https://www.connectwithahmed.com/_next/image?url=%2Fmobile.png&w=1920&q=75" className="h-[30px] w-auto mr-2" alt="" />
       <h1>+92 312-5321226 </h1>
      </button>
      </motion.div>
    </div>
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
    <div className="flex flex-col gap-5 items-center justify-center mt-[70px]">
      <div>
          <input {...register("name")} type="text" placeholder="Your Name" className="md:w-[650px] w-[300px] sm:w-[500px] p-[15px]  rounded-xl bg-gray-100 outline-none" />
        </div>
        <div><input {...register("email")} type="text" placeholder="Your Email" className="md:w-[650px] w-[300px] sm:w-[500px]  p-[15px]  rounded-xl bg-gray-100 outline-none" /></div>
        <div>
          <textarea {...register("aboutme")} name="" placeholder="your message" id="" className="md:w-[650px] w-[300px] sm:w-[500px] rounded-xl p-[15px] bg-gray-100 outline-none" cols={10} rows={7}></textarea>
        </div>
        <div>
          <Button type="submit" variant="destructive" className="p-[5px ] h-[50px] mb-[60px] hover:bg-red-700" >Send Message</Button>
        </div>
    </div>
      </form>
      {/* <p className="m-50px">{data}</p> */}
  </div>
    
    
  )
}

export default Contact