import { useState } from "react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Badge } from "@/app/components/ui/badge";
import { Separator } from "@/app/components/ui/separator";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { GripVertical, Edit, Trash2, Plus, Save, Copy, Send, Clock, MessageSquare } from "lucide-react";

interface SequenceStep {
  id: string;
  type: 'connection' | 'followup' | 'breakup';
  delay: number;
  message: string;
}

const initialSteps: SequenceStep[] = [
  {
    id: '1',
    type: 'connection',
    delay: 0,
    message: 'Hi {{first_name}}, I noticed your recent promotion to {{role}} at {{company}}...'
  },
  {
    id: '2',
    type: 'followup',
    delay: 2,
    message: 'Following up on my previous message. Quick question about your biggest challenge...'
  },
  {
    id: '3',
    type: 'followup',
    delay: 5,
    message: 'I wanted to share a case study that might be relevant to {{company}}...'
  },
  {
    id: '4',
    type: 'breakup',
    delay: 10,
    message: "I don't want to keep bothering you if the timing isn't right..."
  },
];

export function SequenceBuilder() {
  const [steps, setSteps] = useState<SequenceStep[]>(initialSteps);
  const [sequenceName, setSequenceName] = useState("SaaS Growth Outreach");
  const [targetPersona, setTargetPersona] = useState("founder");
  const [goal, setGoal] = useState("meeting");

  const getStepColor = (type: string) => {
    switch (type) {
      case 'connection':
        return 'from-blue-50 to-blue-100 border-blue-300';
      case 'followup':
        return 'from-purple-50 to-purple-100 border-purple-300';
      case 'breakup':
        return 'from-orange-50 to-orange-100 border-orange-300';
      default:
        return 'from-gray-50 to-gray-100 border-gray-300';
    }
  };

  const getStepBadge = (type: string) => {
    switch (type) {
      case 'connection':
        return <Badge className="bg-blue-600 border-0">Connection</Badge>;
      case 'followup':
        return <Badge className="bg-purple-600 border-0">Follow-up</Badge>;
      case 'breakup':
        return <Badge className="bg-orange-600 border-0">Breakup</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">Sequence Builder</h1>
          <p className="text-gray-600 mt-1">Build multi-touch outreach playbooks</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sequence Flow - Left Side (wider) */}
          <div className="lg:col-span-3 space-y-6">
            {/* Sequence Header */}
            <Card className="p-6 border-0 shadow-md bg-gradient-to-br from-blue-600 to-purple-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-1">{sequenceName}</h2>
                  <p className="text-blue-100">Multi-touch LinkedIn outreach sequence</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-0">
                    <Copy className="w-4 h-4 mr-2" />
                    Duplicate
                  </Button>
                </div>
              </div>
            </Card>

            {/* Sequence Steps */}
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={step.id} className="relative">
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-full h-4 w-0.5 bg-gradient-to-b from-gray-300 to-transparent z-0" />
                  )}
                  
                  <Card className={`p-6 bg-gradient-to-br ${getStepColor(step.type)} border-2 hover:shadow-lg transition-all duration-200 relative z-10`}>
                    <div className="flex gap-4">
                      {/* Drag Handle */}
                      <div className="flex flex-col items-center">
                        <div className="cursor-grab hover:bg-white/50 rounded p-1 transition-colors">
                          <GripVertical className="w-5 h-5 text-gray-500" />
                        </div>
                        <div className="flex-1 w-px bg-gray-300 my-2" />
                        <div className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center font-semibold text-gray-700">
                          {index + 1}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        {/* Step Header */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            {getStepBadge(step.type)}
                            {step.delay > 0 && (
                              <div className="flex items-center gap-1 text-sm text-gray-600">
                                <Clock className="w-4 h-4" />
                                <span>Day {step.delay}</span>
                              </div>
                            )}
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="ghost" className="h-8">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="h-8 hover:bg-red-100 hover:text-red-600">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        
                        {/* Message Preview */}
                        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 mb-3">
                          <div className="flex items-start gap-2 mb-2">
                            <MessageSquare className="w-4 h-4 text-gray-500 mt-1" />
                            <p className="text-sm text-gray-700 leading-relaxed line-clamp-2">
                              {step.message}
                            </p>
                          </div>
                        </div>
                        
                        {/* Delay Setting */}
                        <div className="flex items-center gap-4">
                          <Label className="text-sm text-gray-700">Delay (days):</Label>
                          <Input
                            type="number"
                            value={step.delay}
                            className="w-20 h-8 text-sm bg-white/70"
                            readOnly
                          />
                          <Button variant="outline" size="sm" className="h-8 bg-white/70">
                            Edit Message
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            {/* Add Step Button */}
            <Button variant="outline" className="w-full border-dashed border-2 h-16 hover:bg-gray-50">
              <Plus className="w-5 h-5 mr-2" />
              Add Another Step
            </Button>
          </div>

          {/* Right Sidebar Configuration */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6 border-0 shadow-md sticky top-24">
              <h3 className="text-sm font-semibold text-gray-900 mb-6">Sequence Settings</h3>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="seq-name" className="text-sm font-medium text-gray-700">
                    Sequence Name
                  </Label>
                  <Input
                    id="seq-name"
                    value={sequenceName}
                    onChange={(e) => setSequenceName(e.target.value)}
                    className="mt-2"
                  />
                </div>

                <Separator />

                <div>
                  <Label htmlFor="target-persona" className="text-sm font-medium text-gray-700">
                    Target Persona
                  </Label>
                  <Select value={targetPersona} onValueChange={setTargetPersona}>
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="founder">Founder</SelectItem>
                      <SelectItem value="sdr">SDR</SelectItem>
                      <SelectItem value="recruiter">Recruiter</SelectItem>
                      <SelectItem value="consultant">Consultant</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="goal" className="text-sm font-medium text-gray-700">
                    Sequence Goal
                  </Label>
                  <Select value={goal} onValueChange={setGoal}>
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="meeting">Book Meeting</SelectItem>
                      <SelectItem value="demo">Schedule Demo</SelectItem>
                      <SelectItem value="hiring">Hiring Discussion</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                {/* Stats */}
                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <h4 className="text-xs font-semibold text-gray-600 uppercase">Sequence Stats</h4>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total Steps</span>
                    <span className="font-semibold text-gray-900">{steps.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold text-gray-900">{Math.max(...steps.map(s => s.delay))} days</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Touch Points</span>
                    <span className="font-semibold text-gray-900">{steps.length}</span>
                  </div>
                </div>

                <Separator />

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Button className="w-full h-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
                    <Send className="w-4 h-4 mr-2" />
                    Activate Sequence
                  </Button>
                  <Button variant="outline" className="w-full h-10">
                    <Save className="w-4 h-4 mr-2" />
                    Save as Draft
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DndProvider>
  );
}
