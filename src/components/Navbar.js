

export default function Navbar() {
  return (
    <header className="bg-slate-800 md:sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-70">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Kristina Högberg
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:text-white rounded text-base mt-4 md:mt-0">
        Contact me
        </a>
      </div>
    </header>
  );
}
