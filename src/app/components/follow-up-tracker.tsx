import { useState } from "react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Badge } from "@/app/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Search, Filter, TrendingUp, MessageSquare, Clock, CheckCircle2, XCircle, Pause } from "lucide-react";

interface Prospect {
  id: number;
  name: string;
  role: string;
  company: string;
  currentStep: string;
  lastAction: string;
  replyStatus: "replied" | "no-reply" | "stopped" | "in-progress";
  nextAction: string;
}

const mockProspects: Prospect[] = [
  {
    id: 1,
    name: "John Smith",
    role: "VP of Sales",
    company: "Acme Corp",
    currentStep: "Follow-up 2",
    lastAction: "Jan 15, 2026",
    replyStatus: "in-progress",
    nextAction: "Jan 20, 2026"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Head of Marketing",
    company: "TechStart",
    currentStep: "Connection",
    lastAction: "Jan 17, 2026",
    replyStatus: "replied",
    nextAction: "—"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "CEO",
    company: "DataFlow",
    currentStep: "Follow-up 1",
    lastAction: "Jan 14, 2026",
    replyStatus: "no-reply",
    nextAction: "Jan 19, 2026"
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Sales Director",
    company: "CloudNine",
    currentStep: "Breakup",
    lastAction: "Jan 10, 2026",
    replyStatus: "stopped",
    nextAction: "—"
  },
  {
    id: 5,
    name: "Robert Brown",
    role: "VP Growth",
    company: "ScaleUp",
    currentStep: "Follow-up 2",
    lastAction: "Jan 16, 2026",
    replyStatus: "in-progress",
    nextAction: "Jan 21, 2026"
  },
];

const getReplyBadge = (status: string) => {
  const config = {
    "replied": { label: "Replied", bg: "bg-green-100 text-green-700 border-green-200", icon: CheckCircle2 },
    "no-reply": { label: "No Reply", bg: "bg-orange-100 text-orange-700 border-orange-200", icon: Clock },
    "stopped": { label: "Stopped", bg: "bg-gray-100 text-gray-700 border-gray-200", icon: XCircle },
    "in-progress": { label: "In Progress", bg: "bg-blue-100 text-blue-700 border-blue-200", icon: MessageSquare },
  };
  const conf = config[status as keyof typeof config];
  const Icon = conf.icon;
  return (
    <Badge className={`${conf.bg} border`}>
      <Icon className="w-3 h-3 mr-1" />
      {conf.label}
    </Badge>
  );
};

export function FollowUpTracker() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredProspects = mockProspects.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         p.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = statusFilter === "all" || p.replyStatus === statusFilter;
    return matchesSearch && matchesFilter;
  });

  const stats = {
    total: mockProspects.length,
    replied: mockProspects.filter(p => p.replyStatus === "replied").length,
    inProgress: mockProspects.filter(p => p.replyStatus === "in-progress").length,
    noReply: mockProspects.filter(p => p.replyStatus === "no-reply").length,
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-900">Follow-Up Status Tracker</h1>
        <p className="text-gray-600 mt-1">Monitor outreach progress and manage responses</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6 border-0 shadow-md hover:shadow-lg transition-all">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600 font-medium">Total Prospects</p>
            <div className="p-2 bg-blue-100 rounded-lg">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
        </Card>

        <Card className="p-6 border-0 shadow-md hover:shadow-lg transition-all bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600 font-medium">Replied</p>
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900">{stats.replied}</p>
        </Card>

        <Card className="p-6 border-0 shadow-md hover:shadow-lg transition-all bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600 font-medium">In Progress</p>
            <div className="p-2 bg-blue-100 rounded-lg">
              <MessageSquare className="w-5 h-5 text-blue-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900">{stats.inProgress}</p>
        </Card>

        <Card className="p-6 border-0 shadow-md hover:shadow-lg transition-all bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600 font-medium">No Reply Yet</p>
            <div className="p-2 bg-orange-100 rounded-lg">
              <Clock className="w-5 h-5 text-orange-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900">{stats.noReply}</p>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-6 border-0 shadow-md mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search prospects or companies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-48">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="replied">Replied</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="no-reply">No Reply</SelectItem>
              <SelectItem value="stopped">Stopped</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Prospects Table */}
      <Card className="p-6 border-0 shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4 font-semibold text-gray-700">Prospect</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700">Current Step</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700">Last Action</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700">Reply Status</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700">Next Action</th>
                <th className="text-right py-4 px-4 font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProspects.map((prospect) => (
                <tr key={prospect.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-semibold text-gray-900">{prospect.name}</p>
                      <p className="text-sm text-gray-600">{prospect.role} at {prospect.company}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200">
                      {prospect.currentStep}
                    </Badge>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{prospect.lastAction}</td>
                  <td className="py-4 px-4">
                    {getReplyBadge(prospect.replyStatus)}
                  </td>
                  <td className="py-4 px-4">
                    {prospect.nextAction === "—" ? (
                      <span className="text-gray-400">—</span>
                    ) : (
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        {prospect.nextAction}
                      </div>
                    )}
                  </td>
                  <td className="py-4 px-4 text-right">
                    <div className="flex justify-end gap-2">
                      {prospect.replyStatus === "in-progress" && (
                        <Button size="sm" variant="outline">
                          <Pause className="w-4 h-4 mr-1" />
                          Pause
                        </Button>
                      )}
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredProspects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No prospects match your filters</p>
          </div>
        )}
      </Card>
    </div>
  );
}
