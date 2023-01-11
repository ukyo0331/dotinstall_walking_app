import './App.css';
import { CallToAction } from './organisms/CallToAction';
import { Features } from './organisms/Features';
import { Header } from './organisms/Header';
import { HeroArea } from './organisms/HeroArea';
import { Voices } from './organisms/Voices';
import { Footer } from './organisms/Footer'

function App() {
  return (
      <>
        <Header />
        <HeroArea />
        <Features />
        <Voices />
        <CallToAction />
        <Footer />
      </>
    );
}

export default App;
