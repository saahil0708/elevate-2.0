import Header from "@/Layout/Header";
import Hero from "@/New/Hero";
import CombinedAbout from "@/New/About";
import Cultural from "@/New/page";
import IdeaJamSection from "@/New/IdeaJam";
import Gallery from "@/Components/Gallery";
import Testimonials from '@/Components/Testimonials';
import Footer from "@/Components/Footer";
import Timeline from '@/New/Timeline';
import Panel from "@/New/panel";
import Speakers from "@/Components/ThreeScene"

export default function Layout() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-gradient-to-t from-black to-gray-900">
      <Header />  

      <section
        id="home"
        className="relative h-screen w-full flex items-center justify-center"
      >
        <Hero />
      </section>

      {/* Make sure each section uses w-full */}
      {/* <section id="about" className="w-full"><CombinedAbout /></section>
      <section id="timeline" className="w-full"><Timeline /></section>*/}
      <section id="cultural" className="w-full"><Cultural /></section>
      <section id="speakers" className="w-full"><Speakers /></section>
      <section id="panel" className="w-full"><Panel /></section>
      <section id="ideajam" className="w-full"><IdeaJamSection /></section>
      <section id="gallery" className="w-full"><Gallery /></section>
      <section id="testimonials" className="w-full"><Testimonials /></section>
      <section id="footer" className="w-full"><Footer /></section>
    </div>
  );
}

