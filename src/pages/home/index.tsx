import { useNavigate } from "react-router-dom"
import { Header } from "../../components/header"
import { Logo } from "../../components/logo"
import { Footer } from "../../components/footer"

export const Home = () => {

  const navigate = useNavigate()

  const subjects = [
    {
      "name": "Natureza",
      "img": "Natureza.png"
    },
    {
      "name": "Humanas",
      "img": "Humanas.webp"
    },
    {
      "name": "Matemática",
      "img": "Matemática.jpg"
    },
    {
      "name": "Português",
      "img": "Português.png"
    },
  ]

  return (
    <>
      <div className="min-size-screen p-6 flex flex-col items-center gap-8">

        <Header />

        <div className="flex w-full h-[640px] relative">
          <img 
            className="w-full rounded-4"
            src="/home/Hero.png" 
            alt="hero"  
          />
          <div className="flex items-center justify-center rounded-4 p-4 absolute right-[210px] top-[270px] bg-transDark/50">
            <Logo width={300} />
          </div>
        </div>

        <div className="flex gap-5 w-[960px]">

          {subjects.map(subject => {
            return (
              <button 
                key={subject.name}
                className="relative group flex items-center justify-center rounded-4 overflow-hidden size-[225px]" 
                onClick={() => navigate(subject.name.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase())}  
              >
                <div 
                  style={{ backgroundImage: `url('/home/${subject.img}')` }}  
                  className="size-full bg-center bg-cover transition-all duration-200 group-hover:scale-105"
                />
                <div className="absolute text-2xl p-2 rounded-4 bg-transDark/70 text-white">
                  <h3>{subject.name}</h3>
                </div>
              </button>
            )
          })}

        </div>
      </div>
      <Footer />
    </>
  )
}