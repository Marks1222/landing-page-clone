import { Button } from "@/components/ui/button";

export const CTAButton = () => {
  const handleClick = () => {
    // Trigger smartplayer click event if needed
    window.dispatchEvent(new CustomEvent('smartplayer-click'));
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[9999] w-[90%] max-w-[500px] bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-6 rounded-2xl text-lg shadow-lg border-4 border-white animate-pulse-scale transition-all duration-300"
    >
      Quero a Receita
    </Button>
  );
};
