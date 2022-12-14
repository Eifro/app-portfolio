import { useEffect, useState } from "react";
import { Link } from 'react-scroll';

/* icons */
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  /* states */
  const [sticky, setSticky] = useState(false)
  const [open, setOpen] = useState(false);

  const links = [
    { name: "HOME", link: "home" },
    { name: "EXPERIENCE", link: "experience" },
    { name: "SKILLS", link: "skills" },
    { name: "WORKS", link: "works" },
    { name: "CONTACT", link: "contact" },
  ];

  useEffect(() => {
    window.onscroll = () => {
      const scroll = document.documentElement.scrollTop
      if (scroll > 30) setSticky(true)
      else setSticky(false)
    }
  }, [])

  return (
    <div className="w-full fixed z-50">
      <nav className={`md:py-0 py-4 flex justify-between items-center transition ease-linear ${sticky ? 'bg-white/70 text-gray-900' : 'text-white'}`}>
        <div className="mx-4">
          <h1 className="md:text-3xl lg:text-4xl text-2xl font-bold">
            Mi<span className="text-emerald-500">guelW</span>eb
          </h1>
        </div>
        <div className={`md:z-0 md:block md:static md:h-max md:w-max md:bg-white md:py-4 md:px-14 md:rounded-bl-full fixed top-0 left-0 w-full h-screen bg-gray-900 opacity-95 -z-10 ${open ? "" : "hidden"}`}>
          <ul className="md:flex-row flex flex-col items-center justify-center gap-14 h-full">
            {links.map((link, key) => (
              <li key={key} className="md:text-lg md:hover:scale-105 md:font-medium md:text-gray-900 font-bold text-xl text-white hover:text-emerald-500 hover:scale-110 transition ease-linear duration-300 cursor-pointer">
                <Link to={link.link} smooth={true}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden cursor-pointer mx-4" onClick={() => setOpen(!open)}>
          {open ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
