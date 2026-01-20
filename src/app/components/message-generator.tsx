import { useState } from "react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Textarea } from "@/app/components/ui/textarea";
import { Label } from "@/app/components/ui/label";
import { Slider } from "@/app/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Badge } from "@/app/components/ui/badge";
import { Separator } from "@/app/components/ui/separator";
import { RefreshCw, Save, Plus, Sparkles, Copy, Check } from "lucide-react";

const mockMessages = {
  connection: `Hi {{first_name}},

I noticed your recent promotion to {{role}} at {{company}} - congratulations! Your background in {{industry}} particularly caught my attention.

I work with sales leaders scaling their teams post-funding. Given your recent Series B, I thought you might be interested in how we've helped similar companies improve their outreach efficiency by 40%.

Would you be open to a brief conversation about your current challenges with sales operations?`,
  followup1: `Hi {{first_name}},

Following up on my previous message. I understand you're likely focused on scaling initiatives right now.

Quick question: What's your biggest bottleneck when it comes to prospect outreach at the moment?

I've worked with several {{industry}} companies facing similar scaling challenges and would be happy to share some insights that might help.`,
  followup2: `Hi {{first_name}},

I wanted to share a quick case study with {{company_similar}} that might be relevant to {{company}}.

They were struggling with {{pain_point}}, and we helped them achieve a 45% increase in response rates while saving 15 hours per week.

Would next Tuesday or Wednesday work for a 15-minute call?`,
  breakup: `Hi {{first_name}},

I don't want to keep bothering you if the timing isn't right.

If you ever want to discuss sales efficiency or outreach optimization, I'm just a message away.

Best of luck with the new role!`
};

export function MessageGenerator() {
  const [message, setMessage] = useState(mockMessages.connection);
  const [tone, setTone] = useState([50]);
  const [length, setLength] = useState([50]);
  const [persona, setPersona] = useState("founder");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRegenerate = () => {
    setMessage(message + "\n\n[Regenerated with new variations]");
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-900">Message Generator</h1>
        <p className="text-gray-600 mt-1">Collaborate with AI to craft personalized LinkedIn messages</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Right Sidebar - Controls */}
        <div className="lg:col-span-1 order-2 lg:order-1">
          <Card className="p-6 border-0 shadow-md sticky top-24">
            <h3 className="text-sm font-semibold text-gray-900 mb-6">Message Controls</h3>
            
            <div className="space-y-6">
              {/* Persona Selector */}
              <div>
                <Label className="text-sm font-medium text-gray-700">Persona</Label>
                <Select value={persona} onValueChange={setPersona}>
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

              <Separator />

              {/* Tone Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <Label className="text-sm font-medium text-gray-700">Tone</Label>
                  <span className="text-xs text-gray-500">{tone[0]}%</span>
                </div>
                <Slider
                  value={tone}
                  onValueChange={setTone}
                  max={100}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>Casual</span>
                  <span>Professional</span>
                </div>
              </div>

              {/* Length Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <Label className="text-sm font-medium text-gray-700">Length</Label>
                  <span className="text-xs text-gray-500">{length[0]}%</span>
                </div>
                <Slider
                  value={length}
                  onValueChange={setLength}
                  max={100}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>Concise</span>
                  <span>Detailed</span>
                </div>
              </div>

              <Separator />

              {/* Action Buttons */}
              <div className="space-y-2">
                <Button onClick={handleRegenerate} variant="outline" className="w-full">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Regenerate
                </Button>
                <Button variant="outline" className="w-full">
                  <Save className="w-4 h-4 mr-2" />
                  Save Template
                </Button>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add to Sequence
                </Button>
              </div>

              <Separator />

              {/* Variables */}
              <div>
                <Label className="text-xs font-medium text-gray-700 mb-3 block">
                  Available Variables
                </Label>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs font-mono bg-blue-50 text-blue-700 border-blue-200">
                    {"{{first_name}}"}
                  </Badge>
                  <Badge variant="secondary" className="text-xs font-mono bg-blue-50 text-blue-700 border-blue-200">
                    {"{{company}}"}
                  </Badge>
                  <Badge variant="secondary" className="text-xs font-mono bg-blue-50 text-blue-700 border-blue-200">
                    {"{{role}}"}
                  </Badge>
                  <Badge variant="secondary" className="text-xs font-mono bg-blue-50 text-blue-700 border-blue-200">
                    {"{{industry}}"}
                  </Badge>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Variables will be automatically replaced with prospect data
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Editor Area */}
        <div className="lg:col-span-3 order-1 lg:order-2">
          <Card className="p-8 border-0 shadow-md">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Writing Studio</h3>
              </div>
              <Button onClick={handleCopy} variant="outline" size="sm">
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </>
                )}
              </Button>
            </div>

            <Tabs defaultValue="connection" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-6 bg-gray-100 p-1">
                <TabsTrigger value="connection" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  Connection
                </TabsTrigger>
                <TabsTrigger value="followup1" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  Follow-up 1
                </TabsTrigger>
                <TabsTrigger value="followup2" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  Follow-up 2
                </TabsTrigger>
                <TabsTrigger value="breakup" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  Breakup
                </TabsTrigger>
              </TabsList>

              <TabsContent value="connection" className="space-y-4">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-blue-600 border-0">Connection Request</Badge>
                    <span className="text-sm text-gray-600">First touchpoint</span>
                  </div>
                </div>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[500px] font-sans text-base leading-relaxed resize-none focus:ring-2 focus:ring-blue-500 border-gray-200"
                  placeholder="Your AI-generated message will appear here..."
                />
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Variables will be dynamically replaced</span>
                  <span className="text-gray-600 font-medium">{message.length} characters</span>
                </div>
              </TabsContent>

              <TabsContent value="followup1" className="space-y-4">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-purple-600 border-0">Follow-up 1</Badge>
                    <span className="text-sm text-gray-600">Send after 2-3 days</span>
                  </div>
                </div>
                <Textarea
                  value={mockMessages.followup1}
                  className="min-h-[500px] font-sans text-base leading-relaxed resize-none border-gray-200"
                />
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Sent if no response to connection</span>
                  <span className="text-gray-600 font-medium">{mockMessages.followup1.length} characters</span>
                </div>
              </TabsContent>

              <TabsContent value="followup2" className="space-y-4">
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-4 border border-green-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-green-600 border-0">Follow-up 2</Badge>
                    <span className="text-sm text-gray-600">Send after 5-7 days</span>
                  </div>
                </div>
                <Textarea
                  value={mockMessages.followup2}
                  className="min-h-[500px] font-sans text-base leading-relaxed resize-none border-gray-200"
                />
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Value-focused with social proof</span>
                  <span className="text-gray-600 font-medium">{mockMessages.followup2.length} characters</span>
                </div>
              </TabsContent>

              <TabsContent value="breakup" className="space-y-4">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 border border-orange-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-orange-600 border-0">Breakup Message</Badge>
                    <span className="text-sm text-gray-600">Final touchpoint</span>
                  </div>
                </div>
                <Textarea
                  value={mockMessages.breakup}
                  className="min-h-[500px] font-sans text-base leading-relaxed resize-none border-gray-200"
                />
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Polite exit that leaves door open</span>
                  <span className="text-gray-600 font-medium">{mockMessages.breakup.length} characters</span>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  );
}
