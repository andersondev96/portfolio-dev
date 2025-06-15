import { Envelope, GithubLogo, InstagramLogo, LinkedinLogo, XLogo } from "@phosphor-icons/react";

export function Contact() {
  return (
    <div className="w-full p-16 bg-neutral-600">
      <div className="flex flex-col max-w-full">
        <h1 className="text-5xl text-center uppercase">Entre em contato</h1>
        <div className="flex flex-col items-center">

          <form className="mt-20 flex flex-col">
            <div className="flex flex-col">
              <textarea
                className="w-[739px] h-[269px] p-5 rounded-md outline-none focus:border-200 focus:border-purple-700"
                placeholder="Digite a sua mensagem"
              />
              <div className="flex flex-row w-full items-end">
                <button className="mt-6 w-[168px] h-[70px] bg-[#2AB06F] rounded-sm hover:opacity-90">
                <span className="text-2xl">Enviar</span>
              </button>
              </div>
            </div>
          </form>
          
          <div className="flex gap-2 mt-16">
            <div className="p-4 size-16 rounded-sm bg-[#2A2828] hover:opacity-95">
              <Envelope size={36} className="text-purple-500" />
            </div>
            <div className="p-4 size-16 rounded-sm bg-[#2A2828] hover:opacity-95">
              <InstagramLogo size={36} className="text-purple-500" />
            </div>
            <div className="p-4 size-16 rounded-sm bg-[#2A2828] hover:opacity-95">
              <XLogo size={36} className="text-purple-500" />
            </div>
            <div className="p-4 size-16 rounded-sm bg-[#2A2828] hover:opacity-95">
              <LinkedinLogo size={36} className="text-purple-500" />
            </div>
            <div className="p-4 size-16 rounded-sm bg-[#2A2828] hover:opacity-95">
              <GithubLogo size={36} className="text-purple-500" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}