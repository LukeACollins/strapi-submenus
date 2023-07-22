import sublinks from '../data';
import { useAppContext } from '../AppContext';

const NavLinks = () => {
  const { setPageId } = useAppContext();

  return (
    <div className="nav-links">
      {sublinks.map(({ pageId: id, page: label }) => (
        <button
          key={id}
          className="nav-link"
          onMouseEnter={() => {
            setPageId(id);
          }}>
          {label}
        </button>
      ))}
    </div>
  );
};

export default NavLinks;
