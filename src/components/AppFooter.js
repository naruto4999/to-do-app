import { useLocation, NavLink } from "react-router-dom";


function AppFooter() {
  const location = useLocation();

  return (
    <footer className="pb-6 mt-6 text-center">
      { location.pathname === "/" ? (
        <NavLink
          to="/about"
          className="transition duration-500 ease-in-out text-gray-800 border-b border-gray-800 hover:text-gray-500 hover:border-gray-500"
          data-testid="footer-about-link"
        >
          About
        </NavLink>
      ) : (
        <p>Made by <a className="font-medium text-gray-600" target="_blank">Kaushal Kumar Singh</a></p>
      )}

    </footer>
  )
}

export default AppFooter
