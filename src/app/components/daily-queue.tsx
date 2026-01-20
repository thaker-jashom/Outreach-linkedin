import { useState } from "react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Progress } from "@/app/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/app/components/ui/dialog";
import { Textarea } from "@/app/components/ui/textarea";
import { Slider } from "@/app/components/ui/slider";
import { Label } from "@/app/components/ui/label";
import { 
  CheckCircle2, 
  Circle, 
  ExternalLink, 
  Clock, 
  User, 
  Building, 
  Sparkles,
  Copy,
  Check,
  RefreshCw,
  XCircle
} from "lucide-react";

interface Task {
  id: number;
  prospect: { name: string; role: string; company: string; linkedin: string };
  action: "connect" | "followup1" | "followup2" | "breakup";
  dueTime: string;
  status: "pending" | "completed" | "skipped";
  message: string;
}

const mockTasks: Task[] = [
  {
    id: 1,
    prospect: { name: "John Smith", role: "VP of Sales", company: "Acme Corp", linkedin: "linkedin.com/in/john-smith" },
    action: "connect",
    dueTime: "9:00 AM",
    status: "pending",
    message: "Hi {{first_name}}, I noticed your recent promotion to VP of Sales at Acme Corp..."
  },
  {
    id: 2,
    prospect: { name: "Sarah Johnson", role: "Head of Marketing", company: "TechStart", linkedin: "linkedin.com/in/sarah-johnson" },
    action: "followup1",
    dueTime: "9:15 AM",
    status: "pending",
    message: "Hi Sarah, following up on my previous message about scaling marketing operations..."
  },
  {
    id: 3,
    prospect: { name: "Michael Chen", role: "CEO", company: "DataFlow", linkedin: "linkedin.com/in/michael-chen" },
    action: "connect",
    dueTime: "9:30 AM",
    status: "completed",
    message: "Hi Michael, as a fellow SaaS founder, I wanted to reach out about..."
  },
];

const getActionBadge = (action: string) => {
  const config = {
    connect: { label: "Connection", bg: "bg-blue-600" },
    followup1: { label: "Follow-up 1", bg: "bg-purple-600" },
    followup2: { label: "Follow-up 2", bg: "bg-green-600" },
    breakup: { label: "Breakup", bg: "bg-orange-600" },
  };
  const conf = config[action as keyof typeof config];
  return <Badge className={`${conf.bg} border-0`}>{conf.label}</Badge>;
};

export function DailyQueue() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [messageText, setMessageText] = useState("");
  const [tone, setTone] = useState([50]);
  const [copied, setCopied] = useState(false);
  const [filter, setFilter] = useState<"all" | "pending" | "completed">("all");

  const completedCount = tasks.filter(t => t.status === "completed").length;
  const progress = (completedCount / tasks.length) * 100;

  const filteredTasks = tasks.filter(t => 
    filter === "all" || t.status === filter
  );

  const handleOpenTask = (task: Task) => {
    setSelectedTask(task);
    setMessageText(task.message);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(messageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMarkSent = () => {
    if (selectedTask) {
      setTasks(tasks.map(t => 
        t.id === selectedTask.id ? { ...t, status: "completed" as const } : t
      ));
      setSelectedTask(null);
    }
  };

  const handleSkip = () => {
    if (selectedTask) {
      setTasks(tasks.map(t => 
        t.id === selectedTask.id ? { ...t, status: "skipped" as const } : t
      ));
      setSelectedTask(null);
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">Today's Outreach Tasks</h1>
            <p className="text-gray-600 mt-1">Complete your daily queue in under 15 minutes</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Progress</p>
            <p className="text-3xl font-bold text-gray-900">{completedCount}/{tasks.length}</p>
          </div>
        </div>

        {/* Progress Bar */}
        <Card className="p-6 border-0 shadow-md bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="flex items-center gap-4 mb-3">
            <div className="flex-1">
              <Progress value={progress} className="h-3" />
            </div>
            <span className="text-sm font-semibold text-gray-700">{Math.round(progress)}%</span>
          </div>
          <p className="text-sm text-gray-600">
            Keep going! {tasks.length - completedCount} tasks remaining today
          </p>
        </Card>
      </div>

      {/* Compliance Banner */}
      <Card className="p-4 mb-6 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-600 rounded-lg">
            <Check className="w-5 h-5 text-white" />
          </div>
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Manual Control:</span> All messages are sent by you through LinkedIn. No automation.
          </p>
        </div>
      </Card>

      {/* Filter Tabs */}
      <Tabs value={filter} onValueChange={(v) => setFilter(v as any)} className="mb-6">
        <TabsList className="bg-gray-100 p-1">
          <TabsTrigger value="all">All Tasks ({tasks.length})</TabsTrigger>
          <TabsTrigger value="pending">Pending ({tasks.filter(t => t.status === "pending").length})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({completedCount})</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Task List */}
      <div className="space-y-3">
        {filteredTasks.map((task) => (
          <Card 
            key={task.id}
            className={`p-6 border-0 shadow-md hover:shadow-lg transition-all ${
              task.status === "completed" ? "bg-gray-50 opacity-75" : ""
            }`}
          >
            <div className="flex items-center gap-4">
              {/* Status Icon */}
              <div className="flex-shrink-0">
                {task.status === "completed" ? (
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                ) : task.status === "skipped" ? (
                  <XCircle className="w-8 h-8 text-orange-500" />
                ) : (
                  <Circle className="w-8 h-8 text-gray-300" />
                )}
              </div>

              {/* Prospect Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <p className="font-semibold text-gray-900 text-lg">{task.prospect.name}</p>
                  {getActionBadge(task.action)}
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{task.dueTime}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{task.prospect.role}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    <span>{task.prospect.company}</span>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              {task.status === "completed" && (
                <Badge className="bg-green-100 text-green-700 border-0">Completed</Badge>
              )}
              {task.status === "skipped" && (
                <Badge className="bg-orange-100 text-orange-700 border-0">Skipped</Badge>
              )}

              {/* Action Buttons */}
              {task.status === "pending" && (
                <div className="flex gap-2">
                  <Button onClick={() => handleOpenTask(task)}>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Review Message
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.open(`https://${task.prospect.linkedin}`, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open LinkedIn
                  </Button>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Message Review Dialog */}
      <Dialog open={!!selectedTask} onOpenChange={(open) => !open && setSelectedTask(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Review & Send Message</DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Left: Prospect Context */}
            <div className="md:col-span-2 space-y-4">
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-4">Prospect Context</h4>
                {selectedTask && (
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600">Name</p>
                      <p className="font-medium text-gray-900">{selectedTask.prospect.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Role</p>
                      <p className="font-medium text-gray-900">{selectedTask.prospect.role}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Company</p>
                      <p className="font-medium text-gray-900">{selectedTask.prospect.company}</p>
                    </div>
                  </div>
                )}
              </Card>

              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-3 block">
                    Message Tone
                  </Label>
                  <Slider value={tone} onValueChange={setTone} max={100} step={1} />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>Casual</span>
                    <span>Professional</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Message Editor */}
            <div className="md:col-span-3 space-y-4">
              <div className="flex items-center justify-between mb-2">
                <Label className="text-sm font-medium text-gray-700">
                  AI-Generated Message
                </Label>
                <Button variant="outline" size="sm">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Regenerate
                </Button>
              </div>

              <Textarea
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                className="min-h-[300px] font-sans text-base leading-relaxed"
              />

              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Edit as needed before sending</span>
                <span>{messageText.length} characters</span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t">
                <Button variant="outline" onClick={handleCopy} className="h-12">
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Message
                    </>
                  )}
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => selectedTask && window.open(`https://${selectedTask.prospect.linkedin}`, '_blank')}
                  className="h-12"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open LinkedIn
                </Button>
                <Button onClick={handleSkip} variant="outline" className="h-12">
                  Skip for Now
                </Button>
                <Button onClick={handleMarkSent} className="h-12 bg-gradient-to-r from-blue-600 to-purple-600">
                  <Check className="w-4 h-4 mr-2" />
                  Mark as Sent
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
