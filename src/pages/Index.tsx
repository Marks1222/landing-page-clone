import { VideoPlayer } from "@/components/VideoPlayer";
import { CTAButton } from "@/components/CTAButton";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center py-8 px-4">
        <VideoPlayer />
      </main>
      <CTAButton />
      <Footer />
    </div>
  );
};

export default Index;
