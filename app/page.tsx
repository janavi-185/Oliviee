import Hero from "@/components/Hero";
import Woking from "@/components/Woking";
import Benifits from "@/components/Benifits";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center selection:bg-olive-secondary selection:text-olive-primary">
      <div className="w-full p-4 md:p-9 space-y-12 md:space-y-20">
        <Hero />
        <Woking />
        <Benifits />
        <Reviews />
      </div>
    </div>
  );
}
