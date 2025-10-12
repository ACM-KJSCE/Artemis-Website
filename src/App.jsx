import Navbar from './components/Navbar';
import Prizes from './sections/Prizes';
import Footer from './components/Footer';
import FAQSection from './sections/FAQSection';
import SponserSection from './sections/SponsorSection';
import HeroSectionNew from './sections/HeroSectionNew';
import RulesSection from './sections/RulesSection';

const App = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar/>
      <HeroSectionNew />
      {/* Prizes Section */}
      <Prizes />
      <SponserSection />

      <RulesSection/>

      {/* FAQ Section */}
      <FAQSection />
      <section className='h-fit text-white' id='Footer'>
        <Footer />
      </section>
    </>

  )
}

export default App