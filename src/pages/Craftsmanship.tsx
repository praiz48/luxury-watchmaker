import CraftHero from '../components/craftsmanship/CraftHero';
import DesignMaterials from '../components/craftsmanship/DesignMaterials';
import Engineering from '../components/craftsmanship/Engineering';
import QualityControl from '../components/craftsmanship/QualityControl';
import FinalAssembly from '../components/craftsmanship/FinalAssembly';
import CraftCTA from '../components/craftsmanship/CraftCTA';

export default function Craftsmanship() {
  return (
    <>
      <CraftHero />
      <DesignMaterials />
      <Engineering />
      <QualityControl />
      <FinalAssembly />
      <CraftCTA />
    </>
  );
}