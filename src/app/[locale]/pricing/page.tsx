import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Pricing from "@/components/sections/Pricing";

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white py-12">
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
