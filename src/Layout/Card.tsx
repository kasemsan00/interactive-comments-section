interface Props {
  children: React.ReactNode
}

export default function Card({ children }: Props) {
  return <div className="flex w-full flex-row gap-2 rounded-md bg-White p-4"> {children}</div>
}
