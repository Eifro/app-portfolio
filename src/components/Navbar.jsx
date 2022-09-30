import { useEffect, useState } from "react";

/* icons */
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  /* states */
  const [sticky, setSticky] = useState(false)
  const [open, setOpen] = useState(false);

  const links = [
    { name: "HOME", link: "#" },
    { name: "EXPERIENCE", link: "#" },
    { name: "SKILLS", link: "#" },
    { name: "WORKS", link: "#" },
    { name: "CONTACT", link: "#" },
  ];

  useEffect(() => {
    window.onscroll = () => {
      const scroll = document.documentElement.scrollTop
      if (scroll > 30) setSticky(true)
      else setSticky(false)
    }
  }, [])

  return (
    <div className="w-full fixed">
      <nav className={`md:py-0 py-4 flex justify-between items-center transition ease-linear ${sticky ? 'bg-white/70 text-gray-900' : 'text-white'}`}>
        <div className="mx-4">
          <h1 className="md:text-3xl lg:text-4xl text-2xl font-bold">
            Mi<span className="text-emerald-500">guelW</span>eb
          </h1>
        </div>
        <div className={`md:z-0 md:block md:static md:h-max md:w-max md:bg-white md:py-4 md:px-14 md:rounded-bl-full fixed top-0 left-0 w-full h-screen bg-gray-900 -z-10 ${open ? "hidden" : ""}`}>
          <ul className="md:flex-row flex flex-col items-center justify-center gap-14 h-full">
            {links.map((link, key) => (
              <li key={key} className="md:text-lg md:hover:scale-105 font-bold md:font-medium text-xl text-white md:text-gray-900 hover:text-emerald-500 hover:scale-110 transition ease-linear duration-300">
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden cursor-pointer mx-4" onClick={() => setOpen(!open)}>
          {open ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
