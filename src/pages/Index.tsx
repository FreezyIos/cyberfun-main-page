import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import PromoBanner from "@/components/PromoBanner";
import ServerMonitor from "@/components/ServerMonitor";
import StatsCard from "@/components/StatsCard";
import StatisticsSection from "@/components/StatisticsSection";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowDown } from "lucide-react";

const Index = () => {
  useEffect(() => {
    document.title = "CyberFun | Сеть серверов CS2";
  }, []);

  return (
    <div className="min-h-screen bg-black cyber-grid pb-16">
      {/* Навбар уже существует */}
      <Navbar />
      
      {/* Hero секция */}
      <div className="pt-24 pb-16 px-4 md:pt-32 md:pb-20 container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight neon-glow">
            Сеть серверов CS2 <span className="text-purple-400">нового поколения</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Выбери свой сервер, соревнуйся с лучшими игроками и становись чемпионом
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white py-6 px-8 text-lg neon-border">
              Начать игру
            </Button>
            <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/20 py-6 px-8 text-lg">
              Просмотреть серверы <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="mt-16 animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-purple-400" />
          </div>
        </div>
      </div>
      
      {/* Промо баннер */}
      <div className="container mx-auto px-4 mb-12">
        <PromoBanner />
      </div>
      
      {/* Статистика */}
      <div className="container mx-auto px-4 mb-12">
        <StatsCard />
      </div>
      
      {/* Мониторинг серверов */}
      <div className="container mx-auto px-4 mb-12">
        <ServerMonitor />
      </div>
      
      {/* Топ игроков */}
      <div className="container mx-auto px-4 mb-12">
        <StatisticsSection />
      </div>
      
      {/* Призыв к действию */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-lg border border-purple-500/30 p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 neon-glow">Готов присоединиться к нам?</h2>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Регистрируйся, пополняй счет и получай бонусы. Игроки с активной подпиской получают доступ к VIP-серверам и уникальным скинам.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white neon-border">
              Зарегистрироваться
            </Button>
            <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/20">
              Подробнее о VIP
            </Button>
          </div>
        </div>
      </div>
      
      {/* Футер */}
      <footer className="container mx-auto px-4 text-center text-gray-400 text-sm">
        <div className="border-t border-purple-500/20 pt-8 pb-16">
          <p>© 2025 CyberFun. Все права защищены.</p>
          <p className="mt-2">
            <a href="#" className="text-purple-400 hover:text-purple-300 mx-2">Политика конфиденциальности</a>
            <a href="#" className="text-purple-400 hover:text-purple-300 mx-2">Правила использования</a>
            <a href="#" className="text-purple-400 hover:text-purple-300 mx-2">Контакты</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
