import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, MessageSquare, Target, Lightbulb, Filter, Download } from "lucide-react";

// Mock data
const replyRateData = [
  { name: 'Short + Professional', rate: 71, sent: 200 },
  { name: 'Medium + Professional', rate: 62, sent: 180 },
  { name: 'Short + Casual', rate: 53, sent: 150 },
  { name: 'Long + Professional', rate: 45, sent: 120 },
  { name: 'Long + Casual', rate: 38, sent: 100 },
];

const personaData = [
  { name: 'Recruiters', rate: 67, count: 145 },
  { name: 'Founders', rate: 58, count: 230 },
  { name: 'Consultants', rate: 51, count: 98 },
  { name: 'SDRs', rate: 42, count: 156 },
];

const tableData = [
  { variant: 'Short + Professional', sent: 200, replies: 142, rate: '71%', meetings: 28 },
  { variant: 'Medium + Professional', sent: 180, replies: 112, rate: '62%', meetings: 22 },
  { variant: 'Short + Casual', sent: 150, replies: 80, rate: '53%', meetings: 16 },
  { variant: 'Long + Professional', sent: 120, replies: 54, rate: '45%', meetings: 11 },
];

export function Analytics() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Analytics & Insights</h1>
          <p className="text-gray-600 mt-1">Turn data into actionable decisions</p>
        </div>
        <div className="flex gap-3">
          <Select defaultValue="30">
            <SelectTrigger className="w-40">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">Last 7 Days</SelectItem>
              <SelectItem value="30">Last 30 Days</SelectItem>
              <SelectItem value="90">Last 90 Days</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* AI Insight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white border-0 shadow-lg">
          <div className="flex items-start gap-3 mb-4">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm mb-2">
                Top Insight
              </Badge>
              <p className="text-sm opacity-90">Performance Trend</p>
            </div>
          </div>
          <p className="text-lg font-semibold leading-relaxed">
            Short messages perform <span className="text-2xl font-bold">22% better</span> across all personas
          </p>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-purple-600 to-purple-700 text-white border-0 shadow-lg">
          <div className="flex items-start gap-3 mb-4">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <Target className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm mb-2">
                Best Persona
              </Badge>
              <p className="text-sm opacity-90">Highest Conversion</p>
            </div>
          </div>
          <p className="text-lg font-semibold leading-relaxed">
            Recruiters show <span className="text-2xl font-bold">67%</span> reply rate with professional tone
          </p>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-green-600 to-green-700 text-white border-0 shadow-lg">
          <div className="flex items-start gap-3 mb-4">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <Lightbulb className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm mb-2">
                Recommendation
              </Badge>
              <p className="text-sm opacity-90">Quick Win</p>
            </div>
          </div>
          <p className="text-lg font-semibold leading-relaxed">
            Use <span className="text-2xl font-bold">professional tone</span> for SaaS industry prospects
          </p>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-8 border-0 shadow-md">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Reply Rate by Message Type</h3>
            <p className="text-sm text-gray-500 mt-1">Performance comparison across message variants</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={replyRateData} layout="horizontal">
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#4F46E5" />
                  <stop offset="100%" stopColor="#9333EA" />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis type="number" stroke="#6B7280" style={{ fontSize: '12px' }} />
              <YAxis dataKey="name" type="category" stroke="#6B7280" style={{ fontSize: '12px' }} width={150} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: 'none', 
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }} 
              />
              <Bar dataKey="rate" fill="url(#barGradient)" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-8 border-0 shadow-md">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Performance by Persona</h3>
            <p className="text-sm text-gray-500 mt-1">Reply rates across different target personas</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={personaData}>
              <defs>
                <linearGradient id="personaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#6366F1" />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="name" stroke="#6B7280" style={{ fontSize: '12px' }} />
              <YAxis stroke="#6B7280" style={{ fontSize: '12px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: 'none', 
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }} 
              />
              <Bar dataKey="rate" fill="url(#personaGradient)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Performance Table */}
      <Card className="p-8 border-0 shadow-md">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Message Variant Performance</h3>
          <p className="text-sm text-gray-500 mt-1">Detailed breakdown of all message types</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4 font-semibold text-gray-700">Message Variant</th>
                <th className="text-right py-4 px-4 font-semibold text-gray-700">Sent</th>
                <th className="text-right py-4 px-4 font-semibold text-gray-700">Replies</th>
                <th className="text-right py-4 px-4 font-semibold text-gray-700">Reply Rate</th>
                <th className="text-right py-4 px-4 font-semibold text-gray-700">Meetings</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                      <span className="font-medium text-gray-900">{row.variant}</span>
                    </div>
                  </td>
                  <td className="text-right py-4 px-4 text-gray-600">{row.sent}</td>
                  <td className="text-right py-4 px-4 text-gray-600">{row.replies}</td>
                  <td className="text-right py-4 px-4">
                    <Badge className={`${
                      parseInt(row.rate) >= 60 
                        ? 'bg-green-100 text-green-700 border-green-200' 
                        : parseInt(row.rate) >= 50 
                          ? 'bg-blue-100 text-blue-700 border-blue-200'
                          : 'bg-orange-100 text-orange-700 border-orange-200'
                    } border font-semibold`}>
                      {row.rate}
                    </Badge>
                  </td>
                  <td className="text-right py-4 px-4 font-semibold text-gray-900">{row.meetings}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
