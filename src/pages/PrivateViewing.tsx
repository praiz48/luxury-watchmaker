import PrivateHero from '../components/private-viewing/PrivateHero';
import BookingForm from '../components/private-viewing/BookingForm';
import Locations from '../components/private-viewing/Locations';
import VipServices from '../components/private-viewing/VipServices';

export default function PrivateViewing() {
  return (
    <>
      <PrivateHero />
      <BookingForm />
      <Locations />
      <VipServices />
    </>
  );
}