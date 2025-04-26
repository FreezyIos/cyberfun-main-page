import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Banner {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  buttonText: string;
  buttonUrl: string;
}

const banners: Banner[] = [
  {
    id: 1,
    title: "Рейтинговые игры",
    subtitle: "Сразись в рейтинговых матчах и займи первую строчку в таблице лидеров",
    imageUrl: "https://source.unsplash.com/random/1200x400?cyberpunk,counter-strike",
    buttonText: "Играть сейчас",
    buttonUrl: "/servers/competitive"
  },
  {
    id: 2,
    title: "Новые ножи",
    subtitle: "Пополни счет на 1000₽ и получи шанс выиграть один из 10 новых ножей в нашем магазине",
    imageUrl: "https://source.unsplash.com/random/1200x400?knife,gaming",
    buttonText: "Пополнить счет",
    buttonUrl: "/store"
  },
  {
    id: 3,
    title: "Турнир 5x5",
    subtitle: "Собирай команду и участвуй в ежемесячном турнире. Призовой фонд 50 000₽",
    imageUrl: "https://source.unsplash.com/random/1200x400?esports,tournament",
    buttonText: "Регистрация",
    buttonUrl: "/tournaments"
  }
];

const PromoBanner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextBanner();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const banner = banners[currentBanner];

  return (
    <Card className="overflow-hidden border-0 bg-transparent shadow-none">
      <CardContent className="p-0 relative">
        <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out transform scale-105"
            style={{ backgroundImage: `url(${banner.imageUrl})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 neon-glow">{banner.title}</h2>
            <p className="text-gray-300 mb-4 max-w-lg">{banner.subtitle}</p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white border border-purple-500/50 neon-border">
              {banner.buttonText}
            </Button>
          </div>
          
          <div className="absolute bottom-4 right-4 flex gap-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBanner(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentBanner === index ? "bg-purple-500 w-6" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
          
          <button 
            onClick={prevBanner} 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          
          <button 
            onClick={nextBanner} 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PromoBanner;
