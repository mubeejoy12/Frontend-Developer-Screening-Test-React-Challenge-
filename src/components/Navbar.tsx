import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-5 py-4">
        <Link to="/" className="text-2xl font-bold text-teal-600">
          Mubarak Blog
        </Link>
        <div className="flex gap-6">
          <Link
            to="/"
            className={`hover:text-teal-600 transition ${
              location.pathname === "/" ? "text-teal-600 font-semibold" : ""
            }`}
          >
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
}
