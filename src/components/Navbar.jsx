const Navbar = () => {
  const links = [
    { name: "HOME", link: "#" },
    { name: "EXPERIENCIE", link: "#" },
    { name: "SKILLS", link: "#" },
    { name: "WORKS", link: "#" },
    { name: "CONTACT", link: "#" },
  ];

  return (
    <div className="w-full bg-black text-white fixed">
      <div className="h-20 px-4 container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">◄►</h1>
        </div>
        <div>
          <ul className="flex gap-12">
            {links.map((link) => (
              <li key={link.name} className='font-medium duration-300 hover:scale-110 hover:text-indigo-400 hover:border-b hover:border-b-indigo-400'>
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
