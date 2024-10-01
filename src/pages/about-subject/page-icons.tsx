import { Pencil, BookOpenText, BookA, CaseSensitive, MessageCircle, FlaskConical, Atom, Sigma, Divide, Biohazard, BookText, UsersRound, Brain, Speech, Map, Calculator, SquareFunction, ChartArea, DraftingCompass, Equal, ChevronLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

interface PageIconsProps {
  subject: string
}

export const PageIcons = ({
  subject
}: PageIconsProps) => {

  const navigate = useNavigate()

  return (
    <div className="relative w-full flex justify-center">
      <div className="flex gap-20">
        {subject == "matematica" && (
          <>
            <Calculator size={40} strokeWidth={1.5}/>
            <SquareFunction size={40} strokeWidth={1.5}/>
            <ChartArea size={40} strokeWidth={1.5}/>
            <DraftingCompass size={40} strokeWidth={1.5}/>
            <Equal size={40} strokeWidth={1.5}/>
          </>
        )}
        {subject == "humanas" && (
          <>
            <BookText size={40} strokeWidth={1.5}/>
            <UsersRound size={40} strokeWidth={1.5}/>
            <Brain size={40} strokeWidth={1.5}/>
            <Speech size={40} strokeWidth={1.5}/>
            <Map size={40} strokeWidth={1.5}/>
          </>
        )}
        {subject == "natureza" && (
          <>
            <FlaskConical size={40} strokeWidth={1.5}/>
            <Atom size={40} strokeWidth={1.5}/>
            <Sigma size={40} strokeWidth={1.5}/>
            <Divide size={40} strokeWidth={1.5}/>
            <Biohazard size={40} strokeWidth={1.5}/>
          </>
        )}
        {subject == "portugues" && (
          <>
            <Pencil size={40} strokeWidth={1.5}/>
            <BookOpenText size={40} strokeWidth={1.5}/>
            <BookA size={40} strokeWidth={1.5}/>
            <CaseSensitive size={40} strokeWidth={1.5}/>
            <MessageCircle size={40} strokeWidth={1.5}/>
          </>
        )}
      </div>
      <button 
        className="absolute left-0"
        onClick={() => navigate('/')}
      >
        <ChevronLeft size={40} strokeWidth={1.5}/>
      </button>
    </div>
  )
}