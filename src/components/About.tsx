
function About() {

  return (
     <div className="mt-[100px]  " id="about">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-DMsans font-semibold text-center text-black capitalize ">
          I Know That <span className="text-blue-800z"> Good Apps</span>
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-DMsans font-semibold text-center text-black capitalize ">
      Means Good Business
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 justify-items-center gap-5">
          <div className=" w-[250px] m-[30px] border border-xl shadow-md p-5 rounded-lg">
            <img src="image3.jpg" alt="" />
            <h1 className="font-bold DMsans">Backend Development</h1>
            <p className="mt-[10px] text-gray-600 text-sm ml-[13px] text-left font- leading-relaxed">Strong skills in building scalable and maintainable web applications using RESTful as well as GraphQL APIs.</p>
          </div>
          <div className=" w-[250px] m-[30px] border border-xl shadow-md p-5 rounded-lg">
            <img src="./image6.jpg" alt="" />
            <h1 className="font-bold DMsans">Fluency With Dev Tools</h1>
            <p className="mt-[10px] text-gray-600 text-sm  ml-[10px] text-left font- leading-relaxed">Proficiency in Dev Tools such as VsCode, Git, CI/CD. These tools aid in tasks such as writing, debugging, testing, and deploying code.</p>
          </div>
          <div className=" w-[250px] m-[30px] border border-xl shadow-md p-5 rounded-lg">
            <img src="./image4.jpg" alt="" />
            <h1 className="font-bold DMsans">Frontend Development</h1>
            <p className="mt-[10px] text-gray-600 text-sm  ml-[13px] text-left font- leading-relaxed">Skilled in creating complex UI designs and implementing them in efficient, reusable code while adhering to best practices and standards.</p>
          </div>

          <div className="  md:hidden block w-[250px] m-[30px] border border-xl shadow-md p-5 rounded-lg">
          <img src="./image5.jpg" alt="" />
            <h1 className="font-bold DMsans">Database Technologies</h1>
            <p className="mt-[10px] text-gray-600 text-sm  ml-[10px] text-left font- leading-relaxed">Experience in designing and optimizing database schemas, writing complex queries, and implementing efficient indexing strategies.</p>
            </div>

        </div>
          <div className=" w-[250px] hidden md:block md:mr-auto md:ml-auto m-[30px] border border-xl shadow-md p-5 rounded-lg">
            <img src="./image5.jpg" alt="" />
            <h1 className="font-bold DMsans">Database Technologies</h1>
            <p className="mt-[10px] text-gray-600 text-sm  ml-[10px] text-left font- leading-relaxed">Experience in designing and optimizing database schemas, writing complex queries, and implementing efficient indexing strategies.</p>
          </div>
      </div>
  )
}

export default About