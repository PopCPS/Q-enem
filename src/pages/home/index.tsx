import { Header } from "../../components/header"
import { Logo } from "../../components/logo"

export const Home = () => {
  return (
    <>

      <Header />

      <div className="flex w-full h-[640px] relative">
        <img 
          className="w-full rounded-4"
          src="/Hero.png" 
          alt="hero"  
        />
        <div className="flex items-center justify-center rounded-4 p-4 absolute right-[210px] top-[270px] bg-transDark/50">
          <Logo width={300} />
        </div>
      </div>

      <div className="flex gap-5 w-[960px]">

        <button className="flex items-center justify-center rounded-4 size-[225px] relative bg-top" style={{ backgroundImage: "url('/Natureza.png')" }}>
          <div className="absolute text-2xl p-2 rounded-4 bg-transDark/70 text-white">
            <h3>Natureza</h3>
          </div>
        </button>

        <button className="flex items-center justify-center rounded-4 size-[225px] relative bg-center bg-cover" style={{ backgroundImage: "url('/Humanas.webp')" }}>
          <div className="absolute text-2xl p-2 rounded-4 bg-transDark/70 text-white">
            <h3>Humanas</h3>
          </div>
        </button>

        <button className="flex items-center justify-center rounded-4 size-[225px] relative bg-center bg-cover" style={{ backgroundImage: "url('/Matemática.jpg')" }}>
          <div className="absolute text-2xl p-2 rounded-4 bg-transDark/70 text-white">
            <h3>Matemática</h3>
          </div>
        </button>

        <button className="flex items-center justify-center rounded-4 size-[225px] relative bg-left bg-cover" style={{ backgroundImage: "url('/Português.png')" }}>
          <div className="absolute text-2xl p-2 rounded-4 bg-transDark/70 text-white">
            <h3>Português</h3>
          </div>
        </button>

      </div>

    </>
  )
}