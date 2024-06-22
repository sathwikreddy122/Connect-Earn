import { menuItems } from "../../data/constants"

const Navigation = () => {
  return (
    <>
        {menuItems.map((item, index) => (
            
            <a key={index} href={item.href} className="cursor-pointer text-sm text-slate-600 hover:text-blue-600 focus:text-neutral-300 focus: outline-none ">
                {item.name}
            </a>
        ))}
    </>
  )
}

export default Navigation