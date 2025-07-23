function Input({
  name,
  type,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <div className="flex flex-col gap-1">
      <label className="capitalize font-rajdhani text-2xl" htmlFor={name}>{name}</label>
      <input
        type={type}
        className="bg-bg-dark rounded-md p-2 text-lg text-text-white"
        {...props}
      />
    </div>
  )
}

export default Input