import { Card } from '@/components/ui/card';
import { 
  Users, 
  FileText, 
  CheckCircle, 
  XCircle,
  Clock 
} from 'lucide-react';

const stats = [
  {
    title: 'Total Applications',
    value: '156',
    icon: FileText,
    change: '+12%',
    changeType: 'positive'
  },
  {
    title: 'Under Review',
    value: '43',
    icon: Clock,
    change: '-5%',
    changeType: 'negative'
  },
  {
    title: 'Accepted',
    value: '89',
    icon: CheckCircle,
    change: '+18%',
    changeType: 'positive'
  },
  {
    title: 'Rejected',
    value: '24',
    icon: XCircle,
    change: '-2%',
    changeType: 'negative'
  }
];

export default function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Icon className="h-8 w-8 text-muted-foreground" />
                <span className={`text-sm ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.title}</p>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity will be added here */}
    </div>
  );
}