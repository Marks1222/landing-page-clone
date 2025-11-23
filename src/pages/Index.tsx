import { VideoPlayer } from "@/components/VideoPlayer";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1 flex items-center justify-center py-8 px-4">
        <VideoPlayer />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
