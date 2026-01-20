import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Switch } from "@/app/components/ui/switch";
import { Badge } from "@/app/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Separator } from "@/app/components/ui/separator";
import { Users, Briefcase, Bell, Key, Linkedin, CheckCircle2, AlertCircle, Shield } from "lucide-react";

export function Settings() {
  return (
    <div className="space-y-6 p-8">
      <div>
        <h1 className="text-3xl font-semibold mb-2">Settings</h1>
        <p className="text-gray-600">Manage your account and application preferences</p>
      </div>

      <Tabs defaultValue="linkedin" className="w-full">
        <TabsList className="grid w-full grid-cols-5 bg-gray-100 p-1">
          <TabsTrigger value="linkedin" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </TabsTrigger>
          <TabsTrigger value="team" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <Users className="w-4 h-4 mr-2" />
            Team
          </TabsTrigger>
          <TabsTrigger value="brand" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <Briefcase className="w-4 h-4 mr-2" />
            Brand Voice
          </TabsTrigger>
          <TabsTrigger value="integrations" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <Key className="w-4 h-4 mr-2" />
            Integrations
          </TabsTrigger>
          <TabsTrigger value="notifications" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <Bell className="w-4 h-4 mr-2" />
            Notifications
          </TabsTrigger>
        </TabsList>

        {/* LinkedIn Connection */}
        <TabsContent value="linkedin" className="space-y-6">
          <Card className="p-8 border-0 shadow-md">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">LinkedIn Connection</h3>
                <p className="text-sm text-gray-600">Manage your LinkedIn account integration</p>
              </div>
              <Badge className="bg-green-100 text-green-700 border-0">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                Connected
              </Badge>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0A66C2] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="font-semibold text-gray-900">Sarah Johnson</p>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">Premium</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">Admin at Outreach Copilot AI</p>
                    <p className="text-sm text-gray-600">linkedin.com/in/sarah-johnson</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Connection Details</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Status</span>
                    <Badge className="bg-green-100 text-green-700 border-0">Active</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Connected since</span>
                    <span className="text-sm font-medium text-gray-900">January 15, 2026</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Last sync</span>
                    <span className="text-sm font-medium text-gray-900">2 minutes ago</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Compliance & Safety</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Manual sending only</p>
                      <p className="text-xs text-gray-600">All messages require your explicit action</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">LinkedIn policy compliant</p>
                      <p className="text-xs text-gray-600">No automation or bot-like behavior</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Secure connection</p>
                      <p className="text-xs text-gray-600">Enterprise-grade encryption</p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1">
                  <Linkedin className="w-4 h-4 mr-2" />
                  Reconnect LinkedIn
                </Button>
                <Button variant="outline" className="flex-1 text-red-600 hover:text-red-700 hover:bg-red-50">
                  Disconnect
                </Button>
              </div>
            </div>
          </Card>

          {/* Daily Limits */}
          <Card className="p-8 border-0 shadow-md">
            <div className="flex items-start gap-3 mb-6">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Shield className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Daily Action Limits</h3>
                <p className="text-sm text-gray-600">Protect your LinkedIn account with smart rate limiting</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <Label className="text-sm font-medium text-gray-700">Daily connection requests</Label>
                  <span className="text-sm font-semibold text-gray-900">50</span>
                </div>
                <p className="text-xs text-gray-500 mb-2">Recommended: 30-50 per day</p>
                <Input type="number" defaultValue="50" className="w-32" />
              </div>

              <Separator />

              <div>
                <div className="flex justify-between items-center mb-2">
                  <Label className="text-sm font-medium text-gray-700">Daily messages</Label>
                  <span className="text-sm font-semibold text-gray-900">100</span>
                </div>
                <p className="text-xs text-gray-500 mb-2">Recommended: 80-100 per day</p>
                <Input type="number" defaultValue="100" className="w-32" />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Enforce manual sending</p>
                  <p className="text-sm text-gray-600">Prevent accidental automation</p>
                </div>
                <Switch defaultChecked disabled />
              </div>

              <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                Save Limits
              </Button>
            </div>
          </Card>
        </TabsContent>

        {/* Team Management */}
        <TabsContent value="team" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Team Members</h3>
            <div className="space-y-4">
              {[
                { name: 'John Smith', email: 'john@company.com', role: 'Admin' },
                { name: 'Sarah Johnson', email: 'sarah@company.com', role: 'Member' },
                { name: 'Mike Chen', email: 'mike@company.com', role: 'Member' },
              ].map((member, idx) => (
                <div key={idx} className="flex items-center justify-between py-3 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-gray-600">{member.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600">{member.role}</span>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                </div>
              ))}
            </div>
            <Button className="mt-4">Add Team Member</Button>
          </Card>
        </TabsContent>

        {/* Brand Voice */}
        <TabsContent value="brand" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Brand Voice Configuration</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="company-name">Company Name</Label>
                <Input id="company-name" placeholder="Your Company Inc." className="mt-2" />
              </div>
              <div>
                <Label htmlFor="value-prop">Value Proposition</Label>
                <Input
                  id="value-prop"
                  placeholder="We help companies..."
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="tone-desc">Brand Tone Description</Label>
                <Input
                  id="tone-desc"
                  placeholder="Professional yet friendly, data-driven..."
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="avoid-words">Words to Avoid</Label>
                <Input
                  id="avoid-words"
                  placeholder="Synergy, revolutionary, game-changer..."
                  className="mt-2"
                />
              </div>
            </div>
            <Button className="mt-4">Save Brand Voice</Button>
          </Card>
        </TabsContent>

        {/* Integrations */}
        <TabsContent value="integrations" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">CRM Integrations</h3>
            <div className="space-y-4">
              {[
                { name: 'HubSpot', connected: true, logo: '🟠' },
                { name: 'Salesforce', connected: false, logo: '☁️' },
                { name: 'Pipedrive', connected: false, logo: '🟢' },
              ].map((crm, idx) => (
                <div key={idx} className="flex items-center justify-between py-3 border-b">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{crm.logo}</span>
                    <div>
                      <p className="font-medium">{crm.name}</p>
                      <p className="text-sm text-gray-600">
                        {crm.connected ? 'Connected' : 'Not connected'}
                      </p>
                    </div>
                  </div>
                  <Button variant={crm.connected ? "outline" : "default"}>
                    {crm.connected ? 'Disconnect' : 'Connect'}
                  </Button>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">API Keys</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="api-key">Your API Key</Label>
                <div className="flex gap-2 mt-2">
                  <Input
                    id="api-key"
                    value="sk_live_••••••••••••••••"
                    readOnly
                    className="font-mono"
                  />
                  <Button variant="outline">Copy</Button>
                </div>
              </div>
              <Button variant="outline">Generate New Key</Button>
            </div>
          </Card>
        </TabsContent>

        {/* Notifications */}
        <TabsContent value="notifications" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Notification Preferences</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-gray-600">Receive email updates about your sequences</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Weekly Reports</p>
                  <p className="text-sm text-gray-600">Get weekly performance summaries</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Sequence Alerts</p>
                  <p className="text-sm text-gray-600">Notify when sequences complete</p>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Reply Notifications</p>
                  <p className="text-sm text-gray-600">Get notified when prospects reply</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}