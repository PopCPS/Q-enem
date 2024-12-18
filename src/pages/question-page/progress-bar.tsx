import { useAppSelector } from "../../store/hooks"

export const ProgressBar = () => {

  const progress = useAppSelector(state => state.apiData.questionIndex)

  return (
    <>
      <div className="h-[14px] w-full rounded-xl p-[2px] bg-black">
        <div className="relative h-full w-full rounded-xl bg-rainbow">
          <div className="absolute right-0 h-full transition-all bg-black" style={{ width: 96 * (10 - progress)}} />
        </div>
      </div>
    </>
  )
}