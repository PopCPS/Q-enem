import { Footer } from "../../components/footer"
import { Header } from "../../components/header"

export const About = () => {
  return (
    <>
    
      <div className="min-size-screen p-6 flex flex-col items-center gap-16">
      
      <Header />

      <h2 className="font-title text-[48px]">Objetivo</h2>

      <div className="flex gap-16 w-[900px]">
        <p className="flex items-center justify-center">Proporcionar aos alunos do ensino médio uma experiência de aprendizagem mais envolvente e eficaz através da prática de questões e do uso de gamificação.</p>
        <img src="/about/img-1.png" alt="" />
      </div>

      <h2 className="font-title text-[48px]">Escolas</h2>

      <div className="flex w-[900px] gap-3">
        <div className="flex flex-col rounded-4 flex-1 gap-3">
          <div className="bg-black size-full p-3 rounded-4">
            <div 
              style={{ backgroundImage: 'url("/about/escola-1.png")'}}
              className="h-96 rounded-4 bg-no-repeat bg-cover bg-center"
            />
          </div>
          <a href="https://maps.app.goo.gl/5U6UA65MFi61PbtY6" target="_blank" className="text-white w-full text-center p-4 font-title text-4xl rounded-4 bg-black">Ver escola</a>
        </div>

        <div className="flex flex-col rounded-4 flex-1 gap-3">
          <div className="bg-black size-full p-3 rounded-4">
            <div 
              style={{ backgroundImage: 'url("/about/escola-2.png")'}}
              className="h-96 rounded-4 bg-no-repeat bg-cover bg-center"
            />
          </div>
          <a href="https://maps.app.goo.gl/JZFUJLWHhC4NEHgYA" target="_blank" className="text-white w-full text-center p-4 font-title text-4xl rounded-4 bg-black">Ver escola</a>
        </div>
      </div>

      <h2 className="font-title text-[48px]">Local de Produção</h2>

      <div className="flex gap-6 rounded-4 p-3 w-[900px] bg-black">
        <img src="/about/unit.png" alt="" />
        <p className="flex items-center justify-center text-xs text-white">
          Desenvolvemos uma plataforma inovadora voltada para estudantes do ensino médio que estão se preparando para o ENEM. O site oferece questões personalizadas com base no perfil e nas necessidades de cada aluno, permitindo um aprendizado direcionado e eficiente. Nosso objetivo é criar uma experiência única, que auxilie os estudantes a identificarem suas dificuldades, aprimorarem seus conhecimentos e melhorarem seu desempenho nas áreas específicas do exame. A plataforma também conta com funcionalidades interativas, relatórios de desempenho e uma interface amigável que otimiza o processo de estudo e preparação para o ENEM.
        </p>
      </div>

      <h2 className="font-title text-[48px]">Equipe</h2>

      <div className="w-[900px]">

      </div>

      </div>
    
      <Footer />

    </>
  )
}