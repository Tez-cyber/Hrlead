import classNames from "classnames"
type Props = {
    children: React.ReactNode
    className?: string
}

export const Container = ({ children, className }: Props) => {
  return (
    <div className={classNames("md:w-[80%] mx-auto", className)}>{children}</div>
  )
}
