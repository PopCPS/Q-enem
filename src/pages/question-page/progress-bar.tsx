interface ProgressBarProps {
  progress: number
}

export const ProgressBar = ({
  progress
}: ProgressBarProps) => {

  return (
    <div className="h-[14px] w-[960px] p-[2px] rounded-[7px] bg-black">
      <div className="h-full bg-cyan rounded-[5px]" style={{ width: 96 * progress }} />
    </div>
  )
}