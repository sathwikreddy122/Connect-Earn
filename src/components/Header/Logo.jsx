
const Logo = () => {
    const logo = "https://static.vecteezy.com/system/resources/previews/000/350/234/original/vector-dollars-coin-icon.jpg"
  return (
    <div className="flex w-32 cursor-pointer items-center gap-2 text-slate-500">
        <img src={logo} alt="logo" className="h-10 w-10"/>
        <h1 className="text-2xl font-semibold">COINS</h1>
    </div>
  )
}

export default Logo