

const Button = ({ Children } ) => {
  return (
    <div className="flex cursor-pointer items-center gap-2 rounded-full bg-blue-400 px-5 py-3 hover: bg-blue-600 outline-none text-sm font-medium text-slate-50">{Children}</div>
  )
}

export default Button