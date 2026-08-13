import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gameplay from "./components/Gameplay";
import Trailer from "./components/Trailer";
import CoreGameplay from "./components/CoreGameplay";
import Characters from "./components/Characters";
import Token from "./components/Token";
import KillToEarn from "./components/KillToEarn";
import Partners from "./components/Partners";
import Ambassador from "./components/Ambassador";
import Community from "./components/Community";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-paper overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Gameplay />
        <Trailer />
        <CoreGameplay />
        <Characters />
        <Token />
        <KillToEarn />
        <Partners />
        <Ambassador />
        <Community />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
