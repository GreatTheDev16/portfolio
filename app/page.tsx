import Hero from "@/components/Hero";
import { FloatingNavDemo } from "@/components/navbar";
export default function Home() {
  return (
    <div className="relative bg-black w-full flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <FloatingNavDemo />
      </div>
    </div>
  );
}