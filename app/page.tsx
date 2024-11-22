import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Hero from "../components/Hero";
import  Grid  from "../components/Grid";
import { navItems } from "@/data/index";


export default function Home() {
  return (
    <main className=" w-full  h-full relative bg-black-100 flex-justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full mx-auto">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />


      </div>
    </main>
  );
}
