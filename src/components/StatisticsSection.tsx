import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, Target, Clock, Zap } from "lucide-react";

interface Player {
  id: number;
  name: string;
  avatar: string;
  rank: number;
  kills: number;
  deaths: number;
  kd: number;
  headshots: number;
  playtime: string;
}

const topPlayers: Player[] = [
  { id: 1, name: "CyberKnife", avatar: "https://source.unsplash.com/random/100x100?face=1", rank: 1, kills: 24563, deaths: 6752, kd: 3.64, headshots: 62, playtime: "342ч" },
  { id: 2, name: "RusSKill3r", avatar: "https://source.unsplash.com/random/100x100?face=2", rank: 2, kills: 18932, deaths: 7211, kd: 2.62, headshots: 54, playtime: "291ч" },
  { id: 3, name: "headshot_machine", avatar: "https://source.unsplash.com/random/100x100?face=3", rank: 3, kills: 16875, deaths: 8942, kd: 1.89, headshots: 71, playtime: "267ч" },
  { id: 4, name: "n00bmaster", avatar: "https://source.unsplash.com/random/100x100?face=4", rank: 4, kills: 15423, deaths: 9103, kd: 1.69, headshots: 47, playtime: "254ч" },
  { id: 5, name: "CS2Pro", avatar: "https://source.unsplash.com/random/100x100?face=5", rank: 5, kills: 13845, deaths: 8254, kd: 1.68, headshots: 58, playtime: "223ч" }
];

const StatisticsSection = () => {
  return (
    <Card className="border border-purple-500/30 bg-black/60 backdrop-blur-sm shadow-lg">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-purple-400">🏆</span> Топ игроков
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="kills" className="w-full">
          <TabsList className="w-full mb-4 bg-black/40 p-1">
            <TabsTrigger value="kills" className="data-[state=active]:bg-purple-600">По киллам</TabsTrigger>
            <TabsTrigger value="kd" className="data-[state=active]:bg-purple-600">По K/D</TabsTrigger>
            <TabsTrigger value="hs" className="data-[state=active]:bg-purple-600">По хедшотам</TabsTrigger>
            <TabsTrigger value="time" className="data-[state=active]:bg-purple-600">По времени</TabsTrigger>
          </TabsList>
          
          <TabsContent value="kills" className="mt-0">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-purple-500/20">
                  <TableHead className="text-purple-300 w-[80px]">Ранг</TableHead>
                  <TableHead className="text-purple-300">Игрок</TableHead>
                  <TableHead className="text-purple-300 text-right"><Zap className="h-4 w-4 inline mr-1" />Киллы</TableHead>
                  <TableHead className="text-purple-300 text-right"><Target className="h-4 w-4 inline mr-1" />K/D</TableHead>
                  <TableHead className="text-purple-300 text-right"><Clock className="h-4 w-4 inline mr-1" />Время</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topPlayers.sort((a, b) => b.kills - a.kills).map((player) => (
                  <TableRow key={player.id} className="border-b border-purple-500/10 hover:bg-purple-500/5">
                    <TableCell className="font-medium">
                      <div className="flex items-center justify-center">
                        {player.rank === 1 ? (
                          <Trophy className="h-5 w-5 text-yellow-400" />
                        ) : player.rank === 2 ? (
                          <Trophy className="h-5 w-5 text-gray-400" />
                        ) : player.rank === 3 ? (
                          <Trophy className="h-5 w-5 text-amber-700" />
                        ) : (
                          <span className="text-gray-400">#{player.rank}</span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8 border border-purple-500/30">
                          <AvatarImage src={player.avatar} />
                          <AvatarFallback>{player.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium text-white">{player.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">{player.kills.toLocaleString()}</TableCell>
                    <TableCell className="text-right">{player.kd.toFixed(2)}</TableCell>
                    <TableCell className="text-right">{player.playtime}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          
          <TabsContent value="kd" className="mt-0">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-purple-500/20">
                  <TableHead className="text-purple-300 w-[80px]">Ранг</TableHead>
                  <TableHead className="text-purple-300">Игрок</TableHead>
                  <TableHead className="text-purple-300 text-right"><Target className="h-4 w-4 inline mr-1" />K/D</TableHead>
                  <TableHead className="text-purple-300 text-right"><Zap className="h-4 w-4 inline mr-1" />Киллы</TableHead>
                  <TableHead className="text-purple-300 text-right"><Clock className="h-4 w-4 inline mr-1" />Время</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topPlayers.sort((a, b) => b.kd - a.kd).map((player, idx) => (
                  <TableRow key={player.id} className="border-b border-purple-500/10 hover:bg-purple-500/5">
                    <TableCell className="font-medium">
                      <div className="flex items-center justify-center">
                        {idx === 0 ? (
                          <Trophy className="h-5 w-5 text-yellow-400" />
                        ) : idx === 1 ? (
                          <Trophy className="h-5 w-5 text-gray-400" />
                        ) : idx === 2 ? (
                          <Trophy className="h-5 w-5 text-amber-700" />
                        ) : (
                          <span className="text-gray-400">#{idx+1}</span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8 border border-purple-500/30">
                          <AvatarImage src={player.avatar} />
                          <AvatarFallback>{player.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium text-white">{player.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">{player.kd.toFixed(2)}</TableCell>
                    <TableCell className="text-right">{player.kills.toLocaleString()}</TableCell>
                    <TableCell className="text-right">{player.playtime}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          
          <TabsContent value="hs" className="mt-0">
            {/* Аналогично для хедшотов */}
            <Table>
              <TableHeader>
                <TableRow className="border-b border-purple-500/20">
                  <TableHead className="text-purple-300 w-[80px]">Ранг</TableHead>
                  <TableHead className="text-purple-300">Игрок</TableHead>
                  <TableHead className="text-purple-300 text-right">Хедшоты %</TableHead>
                  <TableHead className="text-purple-300 text-right"><Zap className="h-4 w-4 inline mr-1" />Киллы</TableHead>
                  <TableHead className="text-purple-300 text-right"><Clock className="h-4 w-4 inline mr-1" />Время</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topPlayers.sort((a, b) => b.headshots - a.headshots).map((player, idx) => (
                  <TableRow key={player.id} className="border-b border-purple-500/10 hover:bg-purple-500/5">
                    <TableCell className="font-medium">
                      <div className="flex items-center justify-center">
                        {idx === 0 ? (
                          <Trophy className="h-5 w-5 text-yellow-400" />
                        ) : idx === 1 ? (
                          <Trophy className="h-5 w-5 text-gray-400" />
                        ) : idx === 2 ? (
                          <Trophy className="h-5 w-5 text-amber-700" />
                        ) : (
                          <span className="text-gray-400">#{idx+1}</span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8 border border-purple-500/30">
                          <AvatarImage src={player.avatar} />
                          <AvatarFallback>{player.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium text-white">{player.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">{player.headshots}%</TableCell>
                    <TableCell className="text-right">{player.kills.toLocaleString()}</TableCell>
                    <TableCell className="text-right">{player.playtime}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          
          <TabsContent value="time" className="mt-0">
            {/* Аналогично для времени */}
            <Table>
              <TableHeader>
                <TableRow className="border-b border-purple-500/20">
                  <TableHead className="text-purple-300 w-[80px]">Ранг</TableHead>
                  <TableHead className="text-purple-300">Игрок</TableHead>
                  <TableHead className="text-purple-300 text-right"><Clock className="h-4 w-4 inline mr-1" />Время</TableHead>
                  <TableHead className="text-purple-300 text-right"><Zap className="h-4 w-4 inline mr-1" />Киллы</TableHead>
                  <TableHead className="text-purple-300 text-right"><Target className="h-4 w-4 inline mr-1" />K/D</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topPlayers.sort((a, b) => parseInt(a.playtime) - parseInt(b.playtime)).map((player, idx) => (
                  <TableRow key={player.id} className="border-b border-purple-500/10 hover:bg-purple-500/5">
                    <TableCell className="font-medium">
                      <div className="flex items-center justify-center">
                        {idx === 0 ? (
                          <Trophy className="h-5 w-5 text-yellow-400" />
                        ) : idx === 1 ? (
                          <Trophy className="h-5 w-5 text-gray-400" />
                        ) : idx === 2 ? (
                          <Trophy className="h-5 w-5 text-amber-700" />
                        ) : (
                          <span className="text-gray-400">#{idx+1}</span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8 border border-purple-500/30">
                          <AvatarImage src={player.avatar} />
                          <AvatarFallback>{player.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium text-white">{player.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">{player.playtime}</TableCell>
                    <TableCell className="text-right">{player.kills.toLocaleString()}</TableCell>
                    <TableCell className="text-right">{player.kd.toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default StatisticsSection;
