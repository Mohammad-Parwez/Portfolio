import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Process } from './components/sections/Process';
import { Industries } from './components/sections/Industries';
import { Leadership } from './components/sections/Leadership';
import { WhyChooseMe } from './components/sections/WhyChooseMe';
import { FAQ } from './components/sections/FAQ';
import { CTA } from './components/sections/CTA';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-zinc-900 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <Process />
        <Industries />
        <Leadership />
        <WhyChooseMe />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
