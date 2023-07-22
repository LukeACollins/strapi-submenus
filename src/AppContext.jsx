import { useState, createContext, useContext } from 'react';

const Context = createContext(null);

const useAppContext = () => useContext(Context);

const AppContext = ({ children }) => {
  const [isSidebarOpen, setIsSideBarOpen] = useState(false);
  const [pageId, setPageId] = useState(null);

  const openSidebar = () => {
    setIsSideBarOpen(true);
  };
  const closeSidebar = () => {
    setIsSideBarOpen(false);
  };

  return (
    <Context.Provider value={{ isSidebarOpen, openSidebar, closeSidebar, pageId, setPageId }}>
      {children}
    </Context.Provider>
  );
};

export { useAppContext };

export default AppContext;
