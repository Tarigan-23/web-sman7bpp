import Hero from "../sections/Hero";
import Stats from "../sections/Stats";
import BeritaHome from "../sections/BeritaHome";
import Map from "../components/Map";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <BeritaHome />
      <Map />
      <Footer />
    </>
  );
}