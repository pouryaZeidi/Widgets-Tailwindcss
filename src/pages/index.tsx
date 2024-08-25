import Image from "next/image";
import { Inter } from "next/font/google";
import AnalogClock from "./Components/AnalogClock";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" bg-slate-800 h-[100vh] p-10">
      <div className="w-[90%] h-[90%] m-auto flex bg-slate-400 rounded-3xl ">
      <AnalogClock/>
      
      </div>
    
    </main>
  );
}
