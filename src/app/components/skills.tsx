export default function Skill() {
  return (
    <section id="skills" className="flex flex-col justify-center py-20 border-t min-w-full">
        <div className="flex flex-col justify-center py-2">
        <h1 className="text-[32px] font-serif italic mb-4">My Skills</h1>
        <div className="text-left ">
            Technologies and tools I use to build responsive and user-friendly web applications. I am constantly learning and exploring new technologies to enhance my skill set and stay up-to-date with industry trends.
        
            <div className="flex py-5 flex-wrap justify-items-stretch  h-30">
              <p className="border inline p-1 mx-2 text-[10px] max-h-fit rounded-sm  text-red-500 hover:border-2 hover:font-semibold transition-all duration-300 ease-in-out">HTML</p>
              <p className="border inline p-1 px-2 mx-2 text-[10px] max-h-fit rounded-sm  text-[#3065f8] hover:border-2 hover:font-semibold transition-all duration-300 ease-in-out">CSS</p>
              <p className="border inline p-1 px-3 mx-2 text-[10px] max-h-fit rounded-sm text-yellow-400 hover:border-2 hover:font-semibold transition-all duration-300 ease-in-out">JS</p>
              <p className="border inline p-1 mx-2 text-[10px] max-h-fit rounded-sm text-blue-500 hover:border-2 hover:font-semibold transition-all duration-300 ease-in-out">React</p>
              <p className="border inline p-1 mx-2 text-[10px] max-h-fit rounded-sm  text-purple-500 hover:border-2 hover:font-semibold transition-all duration-300 ease-in-out">Tailwind CSS</p>
              <p className="border inline p-1 mx-2 text-[10px] max-h-fit rounded-sm  text-green-500 hover:border-2 hover:font-semibold transition-all duration-300 ease-in-out">Next JS</p>
            </div>
        </div>
        </div>
    </section>
    
  );
}