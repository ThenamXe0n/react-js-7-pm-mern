import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="flex justify-between items-center p-4 bg-[var(--primaryColor)] w-[80vw] min-h-10 rounded-full mx-auto mt-8 text-white">
      <div className="flex items-center gap-x-2">
        <div className="p-4 h-[50px] w-[50px] text-3xl rounded-full bg-[var(--secondryColor)] flex items-center justify-center">
          0
        </div>
        <p className="font-bold text-xl">Olivia</p>
      </div>

      <nav>
        <ul className="flex items-center gap-x-6 font-semibold">
          <li className="text-[var(--secondryColor)] underline underline-[var(--secondryColor)] ">
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
         <Link to="/about"> <li>About</li></Link>
          <li>Project</li>
          <li>Blogs</li>
          <li>Testimonials</li>
        </ul>
      </nav>
      <button className="py-3 px-6 rounded-full bg-white text-[var(--primaryColor)]">
        <Link to="/contact">Contact me</Link>
      </button>
    </header>
  );
}

export default NavBar;
