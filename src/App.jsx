import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Features from './Components/Features/Features';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import WhoWeAre from './Components/WhoWeAre/WhoWeAre';
import Portfolio from './Components/Portfolio/Portfolio';
import CTA from './Components/CTA/CTA';
import Team from './Components/Team/Team';
import Newsletter from './Components/Newsletter/Newsletter';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Features/>
      <About/>
      <Services/>
      <WhoWeAre/>
      <Portfolio/>
      <CTA/>
      <Team/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App
