import { div } from "motion/react-client";

export function Services() {
  return (
    <div className="relative w-screen mt-24 bg-cover bg-center" style={{ backgroundImage: "url('/services.png')" }}>
      <div className="absolute inset-0 bg-black opacity-65"></div>
     <div className="relative p-20">
     <h1>Serviços</h1>
     </div>
    </div>
  )
}