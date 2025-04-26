
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Users, Map, Clock, Star } from "lucide-react";

interface ServerCardProps {
  name: string;
  map: string;
  players: number;
  maxPlayers: number;
  rating: number;
  isVip?: boolean;
}

const ServerCard = ({ name, map, players, maxPlayers, rating, isVip = false }: ServerCardProps) => {
  const playersPercentage = (players / maxPlayers) * 100;
  
  return (
    <div className={`relative p-4 border rounded-md transition-all duration-300 hover:scale-[1.02] ${isVip ? 'border-purple-500 bg-gradient-to-br from-black to-purple-950/30' : 'border-gray-800 bg-black/50'}`}>
      {isVip && (
        <div className="absolute -top-2 -right-2 bg-purple-600 text-xs font-semibold px-2 py-0.5 rounded-md">
          VIP
        </div>
      )}
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-white">{name}</h3>
        <div className="flex items-center text-yellow-400">
          <Star className="w-3 h-3 fill-yellow-400 mr-1" />
          <span className="text-xs">{rating.toFixed(1)}</span>
        </div>
      </div>
      
      <div className="space-y-2 mb-3">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Map className="w-3 h-3" />
          <span>{map}</span>
        </div>
        
        <div className="space-y-1">
          <div className="flex justify-between items-center text-xs">
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3 text-gray-400" />
              <span className="text-gray-400">Игроки:</span>
            </div>
            <span className={playersPercentage > 80 ? 'text-red-400' : playersPercentage > 50 ? 'text-yellow-400' : 'text-green-400'}>
              {players}/{maxPlayers}
            </span>
          </div>
          <Progress 
            value={playersPercentage} 
            className="h-1 bg-gray-800"
            indicatorClassName={
              playersPercentage > 80 
                ? 'bg-red-500' 
                : playersPercentage > 50 
                  ? 'bg-yellow-500' 
                  : 'bg-green-500'
            }
          />
        </div>
      </div>
      
      <Button 
        size="sm" 
        className={`w-full ${isVip ? 'bg-purple-600 hover:bg-purple-700' : 'bg-blue-600 hover:bg-blue-700'}`}
      >
        Подключиться
      </Button>
    </div>
  );
};

export default ServerCard;
