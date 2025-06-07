import { div, h1 } from "motion/react-client";

export function Projects() {
  return (
    <div className="flex flex-col md:p-20 bg-neutral-900">
      <div className="flex flex-col w-full ">
        <h1 className="text-3xl md:text-5xl font-semibold uppercase">Projetos</h1>
        <div className="flex flex-col items-center">
          <div className="w-[calc(3*15rem+2*8rem)] flex flex-col items-start">
            <div className="flex items-center gap-9 mt-28">
              <span className="text-xl">Categorias:</span>
              <div className="flex items-center gap-4">
                <span className="text-xl text-white/50 hover:text-purple-500 hover:cursor-pointer transition-all duration-100">Sites institucionais</span>
                <span className="text-xl text-white/50 hover:text-purple-500 hover:cursor-pointer transition-all duration-100">Landing-pages</span>
                <span className="text-xl text-white/50 hover:text-purple-500 hover:cursor-pointer transition-all duration-100">Blogs</span>
                <span className="text-xl text-white/50 hover:text-purple-500 hover:cursor-pointer transition-all duration-100">Sistemas Web</span>
                <span className="text-xl text-white/50 hover:text-purple-500 hover:cursor-pointer transition-all duration-100">E-commerces</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-x-28 gap-y-16 mt-16">
              <div className="flex flex-col">
                <div className="w-60 h-60 bg-white rounded-md"></div>
                <div className="flex flex-col mt-2">
                  <span className="text-lg font-semibold">Software para anotações</span>
                  <p className="text-sm">Interface desenvolvida em React</p>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="w-60 h-60 bg-white rounded-md"></div>
                <div className="flex flex-col mt-2">
                  <span className="text-lg font-semibold">Software para locadora de veículos</span>
                  <p className="text-sm">API desenvolvida em Node.js</p>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="w-60 h-60 bg-white rounded-md"></div>
                <div className="flex flex-col mt-2">
                  <span className="text-lg font-semibold">Software para agendamento em barbearias</span>
                  <p className="text-sm">
                    API desenvolvida em Node.js <br />
                    Interface desenvolvida em React.js
                  </p>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="w-60 h-60 bg-white rounded-md"></div>
                <div className="flex flex-col mt-2">
                  <span className="text-lg font-semibold">Software para fórum de perguntas e respostas</span>
                  <p className="text-sm">API desenvolvida em Node.js</p>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="w-60 h-60 bg-white rounded-md"></div>
                <div className="flex flex-col mt-2">
                  <span className="text-lg font-semibold">Software para divulgar microempreendedores individuais</span>
                  <p className="text-sm">
                    API desenvolvida em Node.js <br />
                    Front-end desenvolvido em React.js
                  </p>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="w-60 h-60 bg-white rounded-md"></div>
                <div className="flex flex-col mt-2">
                  <span className="text-lg font-semibold">Software para reservas em hóteis</span>
                  <p className="text-sm">
                    API desenvolvida em Node.js <br />
                    Interface desenvolvida em React.js
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}