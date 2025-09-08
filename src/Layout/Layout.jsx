import Header from "@/Layout/Header";
import Hero from "@/New/Hero";
import ElevateAftermovies from "@/New/About";
import Cultural from "@/New/page";
import IdeaJamSection from "@/New/IdeaJam";
import ThreeDMarqueeDemo from "@/Components/Gallery";
import Testimonials from '@/Components/Testimonials';
import Footer from "@/Components/Footer";
import Timeline from '@/New/Timeline';
import Panel from "@/New/panel";
import Speakers from "@/Components/ThreeScene"
import SIH from "@/New/index"
import RegisterForm from "@/RegisterForm"

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
      <section id="about" className="w-full"><ElevateAftermovies /></section>
      <section id="cultural" className="w-full"><Cultural /></section>
      <section id="speakers" className="w-full"><Speakers /></section>
      <section id="panel" className="w-full"><Panel /></section>  
      <section id="timeline" className="w-full"><Timeline /></section>
      {/* <section id="sih" className="w-full"><SIH /></section>     */}
      <section id="ideajam" className="w-full"><IdeaJamSection /></section>
      
      <section id="gallery" className="w-full"><ThreeDMarqueeDemo /></section>
      <section id="register" className="w-full"><RegisterForm /></section>
      <section id="testimonials" className="w-full"><Testimonials /></section>

      <section id="footer" className="w-full"><Footer /></section>
    </div>
  );
}