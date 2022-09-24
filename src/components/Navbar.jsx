import { useState } from 'react'
/* icons */
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  /* states */
  const [open, setOpen] = useState(false)

  const links = [
    { name: "HOME", link: "#" },
    { name: "EXPERIENCE", link: "#" },
    { name: "SKILLS", link: "#" },
    { name: "WORKS", link: "#" },
    { name: "CONTACT", link: "#" },
  ];

  return (
    <div className="w-full bg-black text-white fixed">
      <div className="h-20 px-4 container mx-auto flex justify-between items-center">
        <div className='z-10'>
          <h1 className="md:text-3xl text-2xl  font-bold">◄►</h1>
        </div>
        <ul className={`md:flex md:static md:gap-12 md:pt-0 md:w-max md:h-max fixed top-0 left-0 w-full h-screen text-center pt-32 bg-black`}>
          {links.map((link) => (
            <li key={link.name} className='font-medium duration-300 mt-10 hover:scale-125 md:mt-0 md:hover:scale-110 hover:font-bold hover:text-indigo-400 md:hover:border-b md:hover:border-b-indigo-400'>
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
        <div className='md:hidden cursor-pointer z-10' onClick={() => {setOpen(!open)}}>
          {open ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
