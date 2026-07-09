import ContactHero from '../components/contact/ContactHero';
import ConciergeServices from '../components/contact/ConciergeServices';
import BoutiqueDirectory from '../components/contact/BoutiqueDirectory';
import MapSection from '../components/contact/MapSection';
import ContactForm from '../components/contact/ContactForm';

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ConciergeServices />
      <BoutiqueDirectory />
      <MapSection />
      <ContactForm />
    </>
  );
}