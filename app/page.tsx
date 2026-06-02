import Navbar from "@/components/common/Navbar";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import GalleryPreview from "@/components/home/GalleryPreview";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        <Hero />
      </div>
      <AboutPreview />
      <FeaturedProducts />
      <GalleryPreview />
      <Footer />
    </div>
  );
}
