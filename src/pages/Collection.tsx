import CollectionHero from '../components/collection/CollectionHero';
import CategoryGrid from '../components/collection/CategoryGrid';
import FilterBar from '../components/collection/FilterBar';
import ProductShowcase from '../components/collection/ProductShowcase';

export default function Collection() {
  return (
    <>
      <CollectionHero />
      <CategoryGrid />
      <FilterBar />
      <ProductShowcase />
    </>
  );
}