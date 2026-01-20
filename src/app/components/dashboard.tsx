import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { MessageSquare, TrendingUp, Users, Calendar, ArrowUp, Sparkles, Lightbulb } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const trendData = [
  { date: 'Jan 10', rate: 32 },
  { date: 'Jan 17', rate: 38 },
  { date: 'Jan 24', rate: 42 },
  { date: 'Jan 31', rate: 45 },
  { date: 'Feb 7', rate: 48 },
  { date: 'Feb 14', rate: 52 },
  { date: 'Feb 21', rate: 55 },
];

export function Dashboard() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Good afternoon, Sarah</h1>
          <p className="text-gray-600 mt-1">Here's your outreach performance at a glance</p>
        </div>
        <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
          <Sparkles className="w-5 h-5 mr-2" />
          Generate Message
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Messages Sent */}
        <Card className="p-6 hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-gradient-to-br from-white to-blue-50">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-blue-600 rounded-xl shadow-md">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <Badge className="bg-green-100 text-green-700 border-0 shadow-sm">
              <ArrowUp className="w-3 h-3 mr-1" />
              12%
            </Badge>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-gray-600 font-medium">Messages Sent</p>
            <p className="text-4xl font-bold text-gray-900">847</p>
            <p className="text-xs text-gray-500">+94 from last week</p>
          </div>
        </Card>

        {/* Replies */}
        <Card className="p-6 hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-gradient-to-br from-white to-purple-50">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-purple-600 rounded-xl shadow-md">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <Badge className="bg-green-100 text-green-700 border-0 shadow-sm">
              <ArrowUp className="w-3 h-3 mr-1" />
              8%
            </Badge>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-gray-600 font-medium">Reply Rate</p>
            <p className="text-4xl font-bold text-gray-900">55%</p>
            <p className="text-xs text-gray-500">+4pp from last week</p>
          </div>
        </Card>

        {/* Positive Responses */}
        <Card className="p-6 hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-gradient-to-br from-white to-green-50">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-green-600 rounded-xl shadow-md">
              <Users className="w-6 h-6 text-white" />
            </div>
            <Badge className="bg-green-100 text-green-700 border-0 shadow-sm">
              <ArrowUp className="w-3 h-3 mr-1" />
              15%
            </Badge>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-gray-600 font-medium">Positive Responses</p>
            <p className="text-4xl font-bold text-gray-900">312</p>
            <p className="text-xs text-gray-500">+41 from last week</p>
          </div>
        </Card>

        {/* Meetings Booked */}
        <Card className="p-6 hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-gradient-to-br from-white to-orange-50">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-orange-600 rounded-xl shadow-md">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <Badge className="bg-green-100 text-green-700 border-0 shadow-sm">
              <ArrowUp className="w-3 h-3 mr-1" />
              23%
            </Badge>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-gray-600 font-medium">Meetings Booked</p>
            <p className="text-4xl font-bold text-gray-900">87</p>
            <p className="text-xs text-gray-500">+16 from last week</p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Trend Chart */}
        <Card className="p-8 lg:col-span-2 border-0 shadow-md">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Reply Rate Trend</h3>
              <p className="text-sm text-gray-500 mt-1">Last 30 days performance</p>
            </div>
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-0">
              30 Days
            </Badge>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendData}>
              <defs>
                <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="date" stroke="#6B7280" style={{ fontSize: '12px' }} />
              <YAxis stroke="#6B7280" style={{ fontSize: '12px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: 'none', 
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }} 
              />
              <Line
                type="monotone"
                dataKey="rate"
                stroke="#4F46E5"
                strokeWidth={3}
                dot={{ fill: '#4F46E5', r: 6, strokeWidth: 2, stroke: 'white' }}
                activeDot={{ r: 8 }}
                fill="url(#colorRate)"
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* AI Insight Card */}
        <Card className="p-8 border-0 shadow-md bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <div className="flex items-start gap-3 mb-4">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <Lightbulb className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-1">AI Insight</h3>
              <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm">
                Data-Driven
              </Badge>
            </div>
          </div>
          <p className="text-lg leading-relaxed mb-6">
            Shorter messages convert <span className="font-bold text-2xl">22% better</span> in SaaS compared to lengthy introductions.
          </p>
          <div className="space-y-2 text-sm text-blue-100">
            <p>✓ Keep messages under 100 words</p>
            <p>✓ Lead with value, not credentials</p>
            <p>✓ Include one clear CTA</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
