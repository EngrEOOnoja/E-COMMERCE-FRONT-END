import HeroSection from "../components/HeroSection";
import BrowseByStyle from "../components/BrowseByStyle";
import ProductList from "../products/ProductList";

export default function Home() {
  return (
    <div className="space-y-12">
      <HeroSection />
      <ProductList />
      <BrowseByStyle />
    </div>
  );
}
