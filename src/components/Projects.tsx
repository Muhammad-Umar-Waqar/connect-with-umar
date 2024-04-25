import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState, useEffect } from "react";

function Projects() {
  const [data, setData] = useState<Project[]>([]);
  const [filteredData, setFilteredData] = useState<Project[]>([]);

  useEffect(() => {
    axios.get("../../src/projects.json")
      .then(res => {
        const data = res.data;
        setData(data);
        setFilteredData(data); 
      })
      .catch(error => {
        console.error('Error fetching JSON:', error);
      });
  }, []); 

  function handleAll(){
    setFilteredData(data); 
  }

  interface Project {
    image: string;
    title: string;
    description: string;
    category: string;
    hyperlink : string;
  }

  function handleFilter(category: string) {
    const filtered = data.filter(item => item.category === category);
    setFilteredData(filtered);
  }

  return (
    <div id="projects" className="mt-[100px] flex flex-col justify-center items-center m-4">
      <div className="text-3xl sm:text-4xl md:text-5xl font-DMsans font-semibold text-center text-black capitalize ">
        My Creative <span className="text-blue-800"> Portfolio</span> Section
      </div>
      <div className="mt-[50px] flex">
        <div className="grid grid-cols-2 sm:grid-cols-4   gap-2">
          <Button className="" onClick={() => handleFilter('React')}>React</Button>
          <Button className="mx-[10px]" onClick={() => handleFilter('Next')}>Next Js</Button>
          <Button className="" onClick={() => handleFilter('js')}>Javascript</Button>
          <Button className="mx-[10px]" onClick={() => handleAll()}>All</Button>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 justify-items-center gap-5">
          {filteredData.map((item, index) => (
            <div key={index} className="w-[250px] m-[30px] border border-xl shadow-md p-5 rounded-lg">
              <a href={item.hyperlink}><img src={item.image} alt={item.title} className="h-[250px] rounded-lg object-cover object-center mb-[10px] " /></a>
              <h1 className="font-bold DMsans">{item.title}</h1>
              <p className="mt-[10px] text-gray-600 text-sm ml-[13px] text-left font- leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
