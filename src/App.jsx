import { Navbar, Sidebar, Hero, Submenu } from './components';
import { useAppContext } from './AppContext';
const App = () => {
  const { pageId } = useAppContext();
  return (
    <main>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </main>
  );
};
export default App;
