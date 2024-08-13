
import Timer from "@/components/Timer";
import Image from "next/image";

export default function Home() {
  return (
   <main className="container mx-auto h-screen flex justify-center items-center">
   <section className="flex px-4 w-full flex-col lg:flex-row justify-between items-center">
    <aside className="w-full lg:w-1/2">
   <Timer launchDate="2024-08-13T20:20:00"/>
    </aside>
    <aside className="w-full lg:w-1/2">
    <div>
      <h1 className="text-5xl">
       <span className="text-5xl  p-0 bg-yellow-500 text-black font-bold">Hey!!</span> <br/><small className=" text-normal p-1 font-bold bg-yellow-500 text-black ">Making &nbsp;&nbsp; &nbsp;</small> countdown<br/>  
        <span className="bg-yellow-500 rounded font-bold text-black p-0 ">
          Hope
          </span>&nbsp;
          we can make it 
      </h1>
    </div>
    
    </aside>
   </section>
   </main>
  );
}
