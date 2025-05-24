import Image from "next/image";
import { Button } from "./ui/button";

export function Banner() {
  return (
    <div className="relative w-full h-[500px] pt-20 bg-cover bg-center" style={{ backgroundImage: "url('/banner.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-65"></div>

      <div className="relative flex flex-col items-center justify-center w-full h-full px-6 sm:px-16 lg:px-32">
        <div className="flex flex-col items-center gap-4 sm:gap-5">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight text-center">
            Anderson Fernandes
          </h1>
          <div className="w-24 sm:w-36 h-2 bg-purple-700 rounded-full" />
        </div>

        <div className="mt-8 sm:mt-12 flex flex-col gap-6 sm:gap-7 items-center">
          <span className="w-64 sm:w-80 h-16 text-center p-4 rounded-sm bg-white text-2xl bg-opacity-80 text-purple-500">
            I'm a Web Developer
          </span>

          <Button
            variant="outline"
            className="w-44 sm:w-52 h-12 text-lg font-bold text-purple-400 border-purple-500 hover:bg-purple-500 hover:text-white hover:border-none transition-all duration-300"
          >
            Entre em contato
          </Button>
        </div>
      </div>
    </div>
  );
}
