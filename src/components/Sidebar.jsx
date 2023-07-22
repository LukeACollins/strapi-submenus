import { FaTimes } from 'react-icons/fa';
import { useAppContext } from '../AppContext';
import { useRef } from 'react';
import sublinks from '../data';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useAppContext();
  const asideRef = useRef(null);

  const handleClose = () => {
    asideRef.current.style.transition = 'all 1s ease-in-out';
    closeSidebar();
  };

  return (
    <aside ref={asideRef} className={`sidebar${isSidebarOpen ? ' show-sidebar' : []}`}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={handleClose}>
          <FaTimes />
        </button>
        <div className="sidebar-pages">
          {sublinks.map(({ pageId, page: title, links: sublinks }) => (
            <article key={pageId}>
              <h4>{title}</h4>
              <div className="sidebar-page-links">
                {sublinks.map(({ id, label, icon, url }) => (
                  <a key={id} href={url}>
                    {icon}
                    {label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
