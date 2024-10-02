import { Header } from "../../components/header";
import data from "../../lib/data.json"
import { useNavigate, useParams } from "react-router-dom"
import { PageIcons } from "./page-icons";
import { Footer } from "../../components/footer";

interface ParagraphInterface {
  title: string
  text: string
}

export const AboutSubject = () => {
  
  const navigate = useNavigate()
  const { subject } = useParams<{ subject: keyof typeof data }>();

  if(!subject) {
    navigate('/')
    return
  }
  // @ts-expect-error: if statement treats if params are invalid
  const subjectData = data.subjects[subject]
  console.log(subject)

  return (
    <>
      <div className="flex flex-col items-center gap-6 p-6 mb-20">
        <Header />
        <div 
          className="flex items-center justify-center bg-center bg-cover w-full h-[640px]"
          style={{ backgroundImage: `url('/about/${subject}.jpeg')` }}
        >
          <h1 className="p-2.5 text-4xl font-title rounded-4 block w-fit text-white bg-black">
            {subjectData.name}
          </h1>
        </div>

        <div className="w-[960px] space-y-6">
          <PageIcons subject={subject} />

          <div className="space-y-8">
            {subjectData.paragraphs.map((paragraph: ParagraphInterface, index: number) => {
              return(
                <div className={`space-y-4 px-24 ${index % 2 == 0 ? 'border-l-2' : 'border-r-2'} border-black`}>
                  <h3 className="font-extrabold text-2xl">{paragraph.title}</h3>
                  <p className="whitespace-pre-wrap">{paragraph.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}