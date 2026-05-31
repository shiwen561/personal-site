import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CareerSection from './components/Career/CareerSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="bg-grid" />
      <Header />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <CareerSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
