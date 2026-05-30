import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Stats from "../sections/Stats";
import BeritaHome from "../sections/BeritaHome";
import Map from "../components/Map";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <BeritaHome />
      <Map />
      <Footer />
    </main>
  )
}