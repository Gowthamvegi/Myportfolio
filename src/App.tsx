import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';
import { useHashRoute } from './hooks/useHashRoute';

function App() {
  const [activePage, setActivePage] = useHashRoute();

  const renderPage = () => {
    switch (activePage) {
      case 'About':
        return <About onNavigate={setActivePage} />;
      case 'Resume':
        return <Resume />;
      case 'Portfolio':
        return <Portfolio />;
      // case 'Contact':
      //   return <Contact />;
      default:
        return <About onNavigate={setActivePage} />;
    }
  };

  return (
    <main className="max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-center items-start gap-6 lg:gap-8">
      <Sidebar />

      <div className="relative min-w-0 w-full lg:flex-1">
        <article
          key={activePage}
          className="bg-bg-card border border-border rounded-[20px] p-6 sm:p-8 lg:p-10 shadow-[-4px_8px_24px_hsla(0,0%,0%,0.25)] lg:shadow-[0_24px_80px_hsla(0,0%,0%,0.25)] min-h-full animate-fade-up"
        >
          <Navbar activePage={activePage} onPageChange={setActivePage} />
          {renderPage()}
        </article>
      </div>
    </main>
  );
}

export default App;
