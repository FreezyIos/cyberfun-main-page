import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Users, Server, Award, Activity } from "lucide-react";

const stats = [
  {
    title: "Игроков онлайн",
    value: "538",
    icon: <Users className="h-5 w-5 text-purple-400" />,
    progress: 53,
    secondaryText: "+12% с прошлой недели"
  },
  {
    title: "Всего серверов",
    value: "16",
    icon: <Server className="h-5 w-5 text-purple-400" />,
    progress: 80,
    secondaryText: "13 активных / 3 в тех. работах"
  },
  {
    title: "Турниров проведено",
    value: "42",
    icon: <Award className="h-5 w-5 text-purple-400" />,
    progress: 42,
    secondaryText: "Следующий турнир через 3 дня"
  },
  {
    title: "Средний онлайн",
    value: "342",
    icon: <Activity className="h-5 w-5 text-purple-400" />,
    progress: 68,
    secondaryText: "Пиковый онлайн: 621"
  }
];

const StatsCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="border border-purple-500/30 bg-black/60 backdrop-blur-sm shadow-lg">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-sm text-gray-400">{stat.title}</p>
                <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
              </div>
              <div className="p-2 bg-purple-500/10 rounded-md">
                {stat.icon}
              </div>
            </div>
            <Progress value={stat.progress} className="h-1 bg-gray-700">
              <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
            </Progress>
            <p className="text-xs text-gray-400 mt-2">{stat.secondaryText}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsCard;
