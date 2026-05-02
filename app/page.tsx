import Hero from "@/components/Hero";
import Woking from "@/components/Woking";
import Benifits from "@/components/Benifits";
import Reviews from "@/components/Reviews";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Scanner from "@/components/Scanner";
import Pricing from "@/components/Pricing";
import Footer from "@/components/ui/Footer";
import { Analytics } from "@vercel/analytics/next"


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center selection:bg-olive-secondary selection:text-olive-primary overflow-x-hidden">
      <div className="w-full p-4 md:p-9 space-y-12 md:space-y-20">
        <Hero />
        <Woking />
      </div>
      <Benifits />
      <Reviews />
      <Scanner />
      <Pricing />
      {/* <Features /> */}
      <FAQ />
      <Footer />
      <Analytics />
    </div>
  );
}
