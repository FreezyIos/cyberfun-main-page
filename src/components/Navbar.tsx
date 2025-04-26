
import { Link } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { LogIn, Zap, ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-purple-500/30">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="text-purple-400 font-bold text-2xl">
              <span className="text-white">Cyber</span>
              <span className="text-purple-400 relative">
                Fun
                <span className="absolute -top-1 -right-2 text-xs text-purple-300">2</span>
              </span>
            </div>
          </Link>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Главная
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Серверы</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4">
                  <div className="px-4 py-2 hover:bg-purple-500/10 rounded-md">
                    <div className="text-sm font-medium text-white">Все серверы</div>
                    <p className="text-xs text-gray-400">Полный список наших серверов CS2</p>
                  </div>
                  <div className="px-4 py-2 hover:bg-purple-500/10 rounded-md">
                    <div className="text-sm font-medium text-white">Рейтинговые</div>
                    <p className="text-xs text-gray-400">Сражайся за рейтинг</p>
                  </div>
                  <div className="px-4 py-2 hover:bg-purple-500/10 rounded-md">
                    <div className="text-sm font-medium text-white">Приватные</div>
                    <p className="text-xs text-gray-400">Серверы для команд и организаций</p>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/stats">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Статистика
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/faq">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  FAQ
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="border-purple-500 text-purple-400 hover:bg-purple-500/20">
            <Zap className="h-4 w-4 mr-1" />
            Пополнить
          </Button>
          <Button variant="default" size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
            <LogIn className="h-4 w-4 mr-1" />
            Войти через Steam
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
