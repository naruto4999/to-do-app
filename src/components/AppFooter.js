import { useLocation, NavLink } from "react-router-dom";


function AppFooter() {
  const location = useLocation();

  return (
    <footer className="mt-6 pb-6 text-center">
      { location.pathname === "/" ? (
        <NavLink
          to="/about"
          className="transition duration-500 ease-in-out text-gray-800 border-b border-gray-800 hover:text-gray-500 hover:border-gray-500"
        >
          About
        </NavLink>
      ) : (
        <p>Made by <a className="transition duration-500 ease-in-out font-medium text-pink-600 hover:text-pink-500" href="https://phixyn.com/" target="_blank">Phixyn</a></p>
      )}

    </footer>
  )
}

export default AppFooter
