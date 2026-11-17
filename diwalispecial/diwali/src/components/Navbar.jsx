const Navbar=()=> {
  return (
   <> <nav className="bg-red-900 text-white p-5 flex justify-between items-center sticky top-0 z-50 shadow-lg">

      <h2 className="text-2xl font-bold">
        🪔 Diwali
      </h2>

      <ul className="flex gap-6 font-semibold">
        <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
        <li><a href="#about" className="hover:text-yellow-400">About</a></li>
        <li><a href="#celebration" className="hover:text-yellow-400">Celebration</a></li>
        <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
      </ul>

    </nav> </>
  );
}

export default Navbar;