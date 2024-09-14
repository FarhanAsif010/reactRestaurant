import About from '../components/About';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Menu from '../components/Menu';
import Qualities from '../components/Qualities';
import Reservation from '../components/Reservation';
import Services from '../components/Services';
import Team from '../components/Team';
const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Qualities />
      <Menu />
      <Services />
      <Team />
      <Reservation />
      <Footer />
    </>
  );
};

export default Home;
