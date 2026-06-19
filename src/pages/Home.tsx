import Hero from '../components/home/Hero';
import Craftsmanship from '../components/home/Craftsmanship';
import FeaturedCollection from '../components/home/FeaturedCollection';
import Movement from '../components/home/Movement';
import HeritagePreview from '../components/home/HeritagePreview';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Craftsmanship />
      <FeaturedCollection />
      <Movement />
      <HeritagePreview />
      <Testimonials />
      <CTA />
    </>
  );
}