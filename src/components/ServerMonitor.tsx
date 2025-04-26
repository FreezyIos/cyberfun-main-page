import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UsersRound, Timer, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Server {
  id: string;
  name: string;
  map: string;
  players: number;
  maxPlayers: number;
  ping: number;
  mode: string;
  type: 'competitive' | 'casual' | 'deathmatch' | 'private';
  status: 'online' | 'offline' | 'restarting';
}

const servers: Server[] = [
  {
    id: "1",
    name: "CyberFun Classic #1",
    map: "de_dust2",
    players: 18,
    maxPlayers: 20,
    ping: 5,
    mode: "5v5",
    type: "competitive",
    status: "online"
  },
  {
    id: "2",
    name: "CyberFun AWP",
    map: "awp_india",
    players: 12,
    maxPlayers: 16,
    ping: 7,
    mode: "AWP Only",
    type: "casual",
    status: "online"
  },
  {
    id: "3",
    name: "CyberFun Retake",
    map: "de_mirage",
    players: 9,
    maxPlayers: 10,
    ping: 8,
    mode: "Retake",
    type: "competitive",
    status: "online"
  },
  {
    id: "4",
    name: "CyberFun DM",
    map: "de_nuke",
    players: 24,
    maxPlayers: 32,
    ping: 12,
    mode: "FFA",
    type: "deathmatch",
    status: "online"
  },
  {
    id: "5",
    name: "CyberFun Classic #2",
    map: "de_inferno",
    players: 2,
    maxPlayers: 20,
    ping: 6,
    mode: "5v5",
    type: "competitive",
    status: "online"
  }
];

const ServerMonitor = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  
  const filteredServers = activeTab === "all" 
    ? servers 
    : servers.filter(server => server.type === activeTab);

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'online': return 'bg-green-500';
      case 'offline': return 'bg-red-500';
      case 'restarting': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'competitive': return 'bg-purple-600 hover:bg-purple-700';
      case 'casual': return 'bg-blue-600 hover:bg-blue-700';
      case 'deathmatch': return 'bg-red-600 hover:bg-red-700';
      case 'private': return 'bg-gray-600 hover:bg-gray-700';
      default: return 'bg-gray-600 hover:bg-gray-700';
    }
  };

  return (
    <Card className="border border-purple-500/30 bg-black/60 backdrop-blur-sm shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-purple-400">🖥️</span> Мониторинг серверов
            </CardTitle>
            <CardDescription>Текущая информация по серверам CS2</CardDescription>
          </div>
          <Button variant="link" className="text-purple-400 p-0">
            Все серверы <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="w-full mb-4 bg-black/40 p-1">
            <TabsTrigger value="all" className="data-[state=active]:bg-purple-600">Все</TabsTrigger>
            <TabsTrigger value="competitive" className="data-[state=active]:bg-purple-600">Соревновательные</TabsTrigger>
            <TabsTrigger value="casual" className="data-[state=active]:bg-purple-600">Обычные</TabsTrigger>
            <TabsTrigger value="deathmatch" className="data-[state=active]:bg-purple-600">Deathmatch</TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTab} className="mt-0">
            <div className="space-y-3">
              {filteredServers.map((server) => (
                <div key={server.id} className="flex flex-col md:flex-row justify-between bg-black/40 p-3 rounded-md border border-purple-500/10 hover:border-purple-500/30 transition-all">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-2 h-2 rounded-full ${getStatusColor(server.status)}`}></div>
                      <h3 className="font-medium text-white">{server.name}</h3>
                      <Badge className={`${getTypeColor(server.type)} text-xs`}>{server.mode}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>Карта: <span className="text-white">{server.map}</span></span>
                      <span>Пинг: <span className="text-white">{server.ping} ms</span></span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-2 md:mt-0">
                    <div className="flex items-center">
                      <UsersRound className="h-4 w-4 text-purple-400 mr-1" />
                      <span className="text-white">{server.players}/{server.maxPlayers}</span>
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white h-8 px-3 py-1">
                      Подключиться
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ServerMonitor;
