import { useState } from "react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Badge } from "@/app/components/ui/badge";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Search, Filter, Check, ChevronRight, Users, Clock, MessageSquare } from "lucide-react";

const mockProspects = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  name: ["John Smith", "Sarah Johnson", "Michael Chen", "Emily Davis", "Robert Brown"][i % 5],
  role: ["VP of Sales", "Head of Marketing", "CEO", "Sales Director", "VP Growth"][i % 5],
  company: ["Acme Corp", "TechStart", "DataFlow", "CloudNine", "ScaleUp"][i % 5],
  industry: "SaaS",
  icpScore: Math.floor(Math.random() * 30) + 70,
}));

const mockSequences = [
  { id: 1, name: "SaaS Growth Outreach", steps: 4, duration: 10 },
  { id: 2, name: "Recruiting Pipeline", steps: 3, duration: 7 },
  { id: 3, name: "Partnership Outreach", steps: 5, duration: 14 },
];

export function BulkAssignment() {
  const [selectedProspects, setSelectedProspects] = useState<number[]>([]);
  const [selectedSequence, setSelectedSequence] = useState<string>("1");
  const [searchTerm, setSearchTerm] = useState("");

  const toggleProspect = (id: number) => {
    setSelectedProspects(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (selectedProspects.length === mockProspects.length) {
      setSelectedProspects([]);
    } else {
      setSelectedProspects(mockProspects.map(p => p.id));
    }
  };

  const sequence = mockSequences.find(s => s.id.toString() === selectedSequence);
  const estimatedDaily = Math.ceil(selectedProspects.length / (sequence?.duration || 1));

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-900">Assign Sequence to Prospects</h1>
        <p className="text-gray-600 mt-1">Prepare outreach sequences for your imported prospects</p>
      </div>

      {/* Compliance Banner */}
      <Card className="p-4 mb-8 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-green-600 rounded-lg">
            <Check className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-semibold text-gray-900">Preparing, Not Automating</p>
            <p className="text-sm text-gray-600">
              You're organizing prospects for manual outreach. All messages will be sent by you through LinkedIn.
            </p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Panel: Prospect List */}
        <div className="lg:col-span-2 space-y-6">
          {/* Search & Filters */}
          <Card className="p-6 border-0 shadow-md">
            <div className="flex gap-3 mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search prospects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={selectedProspects.length === mockProspects.length}
                  onCheckedChange={toggleAll}
                />
                <span className="text-sm font-medium text-gray-700">
                  {selectedProspects.length} of {mockProspects.length} selected
                </span>
              </div>
              {selectedProspects.length > 0 && (
                <Badge className="bg-blue-100 text-blue-700 border-0">
                  {selectedProspects.length} prospects ready
                </Badge>
              )}
            </div>
          </Card>

          {/* Prospect List */}
          <Card className="p-6 border-0 shadow-md">
            <div className="space-y-3 max-h-[600px] overflow-y-auto">
              {mockProspects.map((prospect) => (
                <div
                  key={prospect.id}
                  className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                    selectedProspects.includes(prospect.id)
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => toggleProspect(prospect.id)}
                >
                  <div className="flex items-start gap-3">
                    <Checkbox
                      checked={selectedProspects.includes(prospect.id)}
                      onCheckedChange={() => toggleProspect(prospect.id)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="font-semibold text-gray-900">{prospect.name}</p>
                          <p className="text-sm text-gray-600">{prospect.role} at {prospect.company}</p>
                        </div>
                        <Badge variant="secondary" className="bg-green-100 text-green-700 border-0">
                          {prospect.icpScore}% Match
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Panel: Sequence Selector */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="p-6 border-0 shadow-md sticky top-24">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Choose Sequence</h3>

            <div className="space-y-4 mb-6">
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">
                  Select Sequence
                </Label>
                <Select value={selectedSequence} onValueChange={setSelectedSequence}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {mockSequences.map((seq) => (
                      <SelectItem key={seq.id} value={seq.id.toString()}>
                        {seq.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {sequence && (
                <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Sequence Preview</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">{sequence.steps} steps</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-purple-600" />
                      <span className="text-gray-700">{sequence.duration} days duration</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Summary Card */}
            {selectedProspects.length > 0 && (
              <div className="p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl border-2 border-green-200 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-green-600 rounded-xl">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Preparing Outreach For</p>
                    <p className="text-2xl font-bold text-gray-900">{selectedProspects.length}</p>
                  </div>
                </div>

                <div className="space-y-3 pt-3 border-t border-green-300">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total messages:</span>
                    <span className="font-semibold text-gray-900">
                      {selectedProspects.length * (sequence?.steps || 0)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Estimated daily actions:</span>
                    <span className="font-semibold text-gray-900">{estimatedDaily}/day</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold text-gray-900">{sequence?.duration} days</span>
                  </div>
                </div>
              </div>
            )}

            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              disabled={selectedProspects.length === 0}
            >
              Prepare Sequence
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>

            <p className="text-xs text-center text-gray-500 mt-3">
              No messages will be sent automatically
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
