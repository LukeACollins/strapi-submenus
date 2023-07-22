import { FaBars } from 'react-icons/fa';
import { useAppContext } from '../AppContext';
import { NavLinks } from './';

const Navbar = () => {
  const { openSidebar, setPageId } = useAppContext();

  const handleSubmenu = (e) => {
    // only set page id to null if its not over
    // 'nav-link' elements
    if (!e.target.classList.contains('nav-link')) {
      setPageId(null);
    }
  };
  return (
    <nav className="centered" onMouseOver={handleSubmenu}>
      <div className="nav-content">
        <h3 className="logo">strapi</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};
export default Navbar;
