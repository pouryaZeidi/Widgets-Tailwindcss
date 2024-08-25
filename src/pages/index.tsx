import Image from "next/image";
import { Inter } from "next/font/google";
import AnalogClock from "./Components/AnalogClock";
import CalendarComponent from "./Components/CalendarComponent";
import TodoList from "./Components/Todolist";
import BatteryComponent from "./Components/BatteryComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" bg-slate-800 h-[100vh] p-10">
      <div className="w-[90%] h-[90%] m-auto flex relative bg-slate-400 rounded-3xl ">
        <div className="" >
      <AnalogClock/>  
      <CalendarComponent/> 
        </div>
        <div className="">
          <TodoList/>
          <BatteryComponent/>
        </div>
      </div>
    </main>
  );
}
