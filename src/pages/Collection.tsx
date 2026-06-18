import CollectionHero from '../components/collection/CollectionHero';
import ProductGrid from '../components/collection/ProductGrid';
import FilterBar from '../components/collection/FilterBar';

export default function Collection() {
  return (
    <>
      <CollectionHero />
      <FilterBar />
      <ProductGrid />
    </>
  );
}