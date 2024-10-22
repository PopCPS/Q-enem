import { Loader2 } from "lucide-react"

export const LoadingModal = () => {
  return (
    <div className="inset-0 absolute bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-black rounded-4 flex items-center justify-center size-20">
        <Loader2 size={40} className="animate-spin text-white" />
      </div>
    </div>
  )
}