import Hero from "../sections/Hero";
import Marssmanju from "../sections/marssmanju";
import Stats from "../sections/Stats";
import BeritaHome from "../sections/BeritaHome";
import Map from "../components/Map";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Marssmanju />
      <Stats />
      <BeritaHome />
      <Map />
      <Footer />
    </>
  );
}