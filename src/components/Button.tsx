type ButtonProps = {
  variants?: "primary" | "secondary",
  children?: React.ReactNode
}

function Button({
  variants = "primary",
  children,
  ...props
}: React.ComponentProps<"button"> & ButtonProps) {

  const buttonVariants = {
    primary: "bg-bg-dark text-lg text-text-white hover:text-accent",
    secondary: "border-3 border-bg-black text-lg hover:bg-accent",
  }

  return (
    <button
      className={`p-2 rounded-md w-full font-semibold cursor-pointer ${buttonVariants[variants]}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button