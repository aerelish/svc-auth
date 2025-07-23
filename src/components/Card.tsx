type CardProps = {
  children: React.ReactNode,
}

function Card({
  children
}: CardProps) {
  return (
    <div className="p-6 bg-white rounded-xl">
      {children}
    </div>
  )
}

export default Card