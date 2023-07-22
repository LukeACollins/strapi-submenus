import { useAppContext } from '../AppContext';
import { useRef } from 'react';
import sublinks from '../data';

const Submenu = () => {
  const { pageId, setPageId } = useAppContext();
  const currentPage = sublinks.find((page) => page.pageId === pageId);

  const submenuContainer = useRef(null);

  const handleMouseLeave = (event) => {
    const submenu = submenuContainer.current;
    const { clientX, clientY } = event;
    const { top, right, bottom, left } = submenu.getBoundingClientRect();

    if (clientX < left + 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }

    

    // console.log(`left ${right} | clientX ${clientX}`);
    // setPageId(null);
  };

  const showSubMenu = pageId === null ? false : true;

  return (
    <div
      className={`submenu ${showSubMenu ? 'show-submenu' : []}`}
      onMouseLeave={handleMouseLeave}
      ref={submenuContainer}>
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{ gridTemplateColumns: currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr' }}>
        {currentPage?.links?.map(({ id, url, label, icon }) => (
          <a key={id} href={url}>
            {icon}
            {label}
          </a>
        ))}
      </div>
    </div>
  );
};
export default Submenu;

//className={`submenu-links ${!showSubMenu ? 'show-submenu' : []}`}
