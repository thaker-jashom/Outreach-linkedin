import { useState } from "react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Textarea } from "@/app/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Switch } from "@/app/components/ui/switch";
import { Label } from "@/app/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Separator } from "@/app/components/ui/separator";
import { Alert, AlertDescription } from "@/app/components/ui/alert";
import { 
  Chrome, 
  Copy, 
  RefreshCw, 
  Settings as SettingsIcon, 
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Eye,
  Lock,
  Shield,
  MousePointerClick,
  Download,
  Linkedin,
  User,
  Briefcase,
  MapPin,
  ExternalLink,
  ArrowRight,
  Check,
  X
} from "lucide-react";

export function ChromeExtension() {
  const [extensionInstalled, setExtensionInstalled] = useState(true);
  const [onLinkedIn, setOnLinkedIn] = useState(true);
  const [profileDetected, setProfileDetected] = useState(true);
  const [messageGenerated, setMessageGenerated] = useState(false);
  const [messageInserted, setMessageInserted] = useState(false);

  // Mock profile data (visible/public only)
  const profileData = {
    name: "Sarah Chen",
    headline: "VP of Sales at TechFlow Solutions",
    location: "San Francisco, CA",
    company: "TechFlow Solutions",
    experience: "15+ years in enterprise sales",
    profileUrl: "linkedin.com/in/sarah-chen",
  };

  const generatedMessage = `Hi Sarah,

I came across your profile and noticed your impressive track record in enterprise sales at TechFlow Solutions. Your 15+ years of experience in this space really stood out.

I'm reaching out because I work with sales leaders who are looking to scale their teams efficiently while maintaining quality outreach. Would you be open to a brief conversation about your current approach to sales enablement?

Best regards`;

  return (
    <div className="space-y-6 p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
            <Chrome className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Chrome Extension</h1>
            <p className="text-gray-600">LinkedIn Assistant with Manual Control</p>
          </div>
        </div>
      </div>

      {/* Installation Status */}
      <Card className="p-6 border-0 shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${extensionInstalled ? 'bg-green-100' : 'bg-gray-100'}`}>
              <Chrome className={`w-6 h-6 ${extensionInstalled ? 'text-green-600' : 'text-gray-400'}`} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Extension Status</h3>
              <p className="text-sm text-gray-600">
                {extensionInstalled 
                  ? 'Chrome extension is installed and active' 
                  : 'Extension not detected'}
              </p>
            </div>
          </div>
          {extensionInstalled ? (
            <Badge className="bg-green-100 text-green-700 border-0">
              <CheckCircle2 className="w-3 h-3 mr-1" />
              Installed
            </Badge>
          ) : (
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Download className="w-4 h-4 mr-2" />
              Install Extension
            </Button>
          )}
        </div>
      </Card>

      {/* Main Content Tabs */}
      <Tabs defaultValue="activation" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-gray-100 p-1">
          <TabsTrigger value="activation" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <MousePointerClick className="w-4 h-4 mr-2" />
            Activation
          </TabsTrigger>
          <TabsTrigger value="profile-reading" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <Eye className="w-4 h-4 mr-2" />
            Profile Reading
          </TabsTrigger>
          <TabsTrigger value="message-insert" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Message Insert
          </TabsTrigger>
        </TabsList>

        {/* 9.1 - Extension Activation */}
        <TabsContent value="activation" className="space-y-6">
          <Card className="p-8 border-0 shadow-md">
            <div className="flex items-start gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <MousePointerClick className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">9.1 Activate Extension on LinkedIn</h3>
                <p className="text-gray-600">
                  Extension activates only on LinkedIn pages with explicit user interaction
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Activation Status */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className={`p-6 border-2 ${onLinkedIn ? 'border-green-200 bg-green-50' : 'border-gray-200'}`}>
                  <div className="flex items-start gap-3 mb-3">
                    <Linkedin className={`w-6 h-6 ${onLinkedIn ? 'text-green-600' : 'text-gray-400'}`} />
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">LinkedIn Detection</h4>
                      <p className="text-xs text-gray-600">
                        {onLinkedIn ? 'On LinkedIn page' : 'Not on LinkedIn'}
                      </p>
                    </div>
                  </div>
                  {onLinkedIn ? (
                    <Badge className="bg-green-100 text-green-700 border-0">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Active
                    </Badge>
                  ) : (
                    <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                      Inactive
                    </Badge>
                  )}
                </Card>

                <Card className={`p-6 border-2 ${profileDetected ? 'border-green-200 bg-green-50' : 'border-gray-200'}`}>
                  <div className="flex items-start gap-3 mb-3">
                    <User className={`w-6 h-6 ${profileDetected ? 'text-green-600' : 'text-gray-400'}`} />
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">Profile Detected</h4>
                      <p className="text-xs text-gray-600">
                        {profileDetected ? 'Profile page open' : 'No profile detected'}
                      </p>
                    </div>
                  </div>
                  {profileDetected ? (
                    <Badge className="bg-green-100 text-green-700 border-0">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Ready
                    </Badge>
                  ) : (
                    <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                      Waiting
                    </Badge>
                  )}
                </Card>

                <Card className="p-6 border-2 border-orange-200 bg-orange-50">
                  <div className="flex items-start gap-3 mb-3">
                    <Shield className="w-6 h-6 text-orange-600" />
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">User Interaction</h4>
                      <p className="text-xs text-gray-600">Manual activation required</p>
                    </div>
                  </div>
                  <Badge className="bg-orange-100 text-orange-700 border-0">
                    Required
                  </Badge>
                </Card>
              </div>

              <Separator />

              {/* Acceptance Criteria */}
              <div>
                <h4 className="font-semibold mb-4">✅ Acceptance Criteria</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Extension activates only on LinkedIn pages</p>
                      <p className="text-sm text-gray-600 mt-1">
                        The extension monitors the URL and only activates when linkedin.com is detected. 
                        It remains dormant on all other websites.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Extension requires explicit user interaction</p>
                      <p className="text-sm text-gray-600 mt-1">
                        User must click the extension icon or activate the assistant panel. 
                        No automatic actions occur without user initiation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">No background scraping occurs</p>
                      <p className="text-sm text-gray-600 mt-1">
                        The extension does not run any background processes, scrape data, or collect information 
                        unless explicitly activated by the user on a specific profile.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Demo: Extension Popup */}
              <div>
                <h4 className="font-semibold mb-4">Extension Popup Preview</h4>
                <div className="max-w-sm mx-auto">
                  <Card className="p-6 border-2 border-gray-300 shadow-xl">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="font-semibold">Outreach Copilot</h3>
                    </div>

                    {onLinkedIn && profileDetected ? (
                      <div className="space-y-4">
                        <Alert className="bg-green-50 border-green-200">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <AlertDescription className="text-sm text-green-800">
                            LinkedIn profile detected. Click to activate assistant.
                          </AlertDescription>
                        </Alert>

                        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                          <Sparkles className="w-4 h-4 mr-2" />
                          Activate Assistant
                        </Button>

                        <p className="text-xs text-gray-500 text-center">
                          Requires manual activation
                        </p>
                      </div>
                    ) : (
                      <div className="text-center py-4">
                        <Linkedin className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                        <p className="text-sm text-gray-500">
                          Open a LinkedIn profile to activate
                        </p>
                      </div>
                    )}
                  </Card>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* 9.2 - Profile Data Reading */}
        <TabsContent value="profile-reading" className="space-y-6">
          <Card className="p-8 border-0 shadow-md">
            <div className="flex items-start gap-3 mb-6">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Eye className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">9.2 Use Visible Profile Data for Drafting</h3>
                <p className="text-gray-600">
                  Read-only access to publicly visible profile information
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Profile Data Display */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Visible Profile Data */}
                <div>
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-green-600" />
                    Visible Profile Data (Read-Only)
                  </h4>
                  <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <User className="w-5 h-5 text-gray-600 mt-0.5" />
                        <div>
                          <p className="text-xs text-gray-500">Name</p>
                          <p className="font-medium">{profileData.name}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Briefcase className="w-5 h-5 text-gray-600 mt-0.5" />
                        <div>
                          <p className="text-xs text-gray-500">Headline</p>
                          <p className="font-medium">{profileData.headline}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-gray-600 mt-0.5" />
                        <div>
                          <p className="text-xs text-gray-500">Location</p>
                          <p className="font-medium">{profileData.location}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Briefcase className="w-5 h-5 text-gray-600 mt-0.5" />
                        <div>
                          <p className="text-xs text-gray-500">Current Company</p>
                          <p className="font-medium">{profileData.company}</p>
                        </div>
                      </div>

                      <Separator />

                      <div className="flex items-center gap-2 text-sm">
                        <Lock className="w-4 h-4 text-green-600" />
                        <span className="text-gray-600">Session-based only (not stored)</span>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Blocked Data */}
                <div>
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <X className="w-5 h-5 text-red-600" />
                    Not Accessed (Hidden/Private)
                  </h4>
                  <Card className="p-6 bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-red-200 opacity-50">
                        <span className="text-sm text-gray-600">Email address</span>
                        <Lock className="w-4 h-4 text-red-600" />
                      </div>

                      <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-red-200 opacity-50">
                        <span className="text-sm text-gray-600">Phone number</span>
                        <Lock className="w-4 h-4 text-red-600" />
                      </div>

                      <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-red-200 opacity-50">
                        <span className="text-sm text-gray-600">Private connections</span>
                        <Lock className="w-4 h-4 text-red-600" />
                      </div>

                      <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-red-200 opacity-50">
                        <span className="text-sm text-gray-600">Hidden profile sections</span>
                        <Lock className="w-4 h-4 text-red-600" />
                      </div>

                      <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-red-200 opacity-50">
                        <span className="text-sm text-gray-600">Background data scraping</span>
                        <Lock className="w-4 h-4 text-red-600" />
                      </div>

                      <Separator />

                      <div className="flex items-center gap-2 text-sm">
                        <Shield className="w-4 h-4 text-red-600" />
                        <span className="text-gray-600">Never accessed or stored</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              <Separator />

              {/* Acceptance Criteria */}
              <div>
                <h4 className="font-semibold mb-4">✅ Acceptance Criteria</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Data is read-only and session-based</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Profile data is only read from the visible DOM elements. It exists in memory only 
                        during the active session and is cleared when the user navigates away.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Data is not stored unless user confirms</p>
                      <p className="text-sm text-gray-600 mt-1">
                        The extension will prompt: "Save this profile to your prospects list?" 
                        Data is only persisted if the user explicitly clicks "Save" or "Add to CRM".
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">System does not scrape hidden data</p>
                      <p className="text-sm text-gray-600 mt-1">
                        The extension only accesses data visible on the public profile page. 
                        No API calls, background scraping, or access to private LinkedIn data.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Confirmation Dialog */}
              <div>
                <h4 className="font-semibold mb-4">User Confirmation Flow</h4>
                <Card className="p-6 max-w-md mx-auto border-2 border-blue-200 shadow-xl">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Save Profile Data?</h4>
                        <p className="text-sm text-gray-600">
                          Do you want to save {profileData.name}'s profile information to your prospect list?
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3 text-xs space-y-1">
                      <p><strong>Name:</strong> {profileData.name}</p>
                      <p><strong>Title:</strong> {profileData.headline}</p>
                      <p><strong>Company:</strong> {profileData.company}</p>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1">
                        <X className="w-4 h-4 mr-1" />
                        Cancel
                      </Button>
                      <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600">
                        <Check className="w-4 h-4 mr-1" />
                        Save to Prospects
                      </Button>
                    </div>

                    <p className="text-xs text-gray-500 text-center">
                      Data is session-only until you confirm
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* 9.3 - Message Insert */}
        <TabsContent value="message-insert" className="space-y-6">
          <Card className="p-8 border-0 shadow-md">
            <div className="flex items-start gap-3 mb-6">
              <div className="p-2 bg-green-100 rounded-lg">
                <Sparkles className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">9.3 Insert Message from Extension</h3>
                <p className="text-gray-600">
                  Insert prepared messages with manual send requirement
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* LinkedIn Message Interface Simulation */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Extension Panel */}
                <div>
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-blue-600" />
                    Extension Assistant Panel
                  </h4>
                  <Card className="p-6 border-2 border-blue-200 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">AI-Generated Message</h4>
                        <Badge className="bg-blue-100 text-blue-700">Ready</Badge>
                      </div>

                      <Textarea
                        className="min-h-[200px] text-sm bg-white"
                        value={generatedMessage}
                        readOnly
                      />

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <Label className="text-xs mb-2">Tone</Label>
                          <Select defaultValue="professional">
                            <SelectTrigger className="h-9 text-sm">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="casual">Casual</SelectItem>
                              <SelectItem value="professional">Professional</SelectItem>
                              <SelectItem value="formal">Formal</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label className="text-xs mb-2">Length</Label>
                          <Select defaultValue="medium">
                            <SelectTrigger className="h-9 text-sm">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="short">Short</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="long">Long</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <Button 
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 h-11"
                          onClick={() => setMessageInserted(true)}
                        >
                          {messageInserted ? (
                            <>
                              <Check className="w-4 h-4 mr-2" />
                              Message Inserted
                            </>
                          ) : (
                            <>
                              <ArrowRight className="w-4 h-4 mr-2" />
                              Insert into LinkedIn
                            </>
                          )}
                        </Button>

                        <Button variant="outline" className="w-full">
                          <Copy className="w-4 h-4 mr-2" />
                          Copy to Clipboard
                        </Button>

                        <Button variant="outline" className="w-full" size="sm">
                          <RefreshCw className="w-4 h-4 mr-2" />
                          Regenerate
                        </Button>
                      </div>

                      <Alert className="bg-orange-50 border-orange-200">
                        <AlertTriangle className="h-4 w-4 text-orange-600" />
                        <AlertDescription className="text-xs text-orange-800">
                          You must click "Send" manually in LinkedIn
                        </AlertDescription>
                      </Alert>
                    </div>
                  </Card>
                </div>

                {/* LinkedIn Message Box */}
                <div>
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                    LinkedIn Message Box
                  </h4>
                  <Card className="p-6 border-2 border-gray-300 shadow-xl bg-white">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 pb-3 border-b">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                          SC
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{profileData.name}</p>
                          <p className="text-xs text-gray-500">{profileData.headline}</p>
                        </div>
                      </div>

                      <div>
                        <Label className="text-xs text-gray-600 mb-2">Message</Label>
                        <Textarea
                          className={`min-h-[200px] text-sm ${messageInserted ? 'border-green-300 bg-green-50' : ''}`}
                          value={messageInserted ? generatedMessage : ''}
                          placeholder="Type a message..."
                          readOnly={messageInserted}
                        />
                        {messageInserted && (
                          <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                            <Check className="w-3 h-3" />
                            Message inserted from extension
                          </p>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" disabled={!messageInserted}>
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" disabled={!messageInserted}>
                            Clear
                          </Button>
                        </div>
                        <Button 
                          className="bg-[#0A66C2] hover:bg-[#004182]"
                          disabled={!messageInserted}
                        >
                          <MousePointerClick className="w-4 h-4 mr-2" />
                          Send (Manual)
                        </Button>
                      </div>

                      {messageInserted && (
                        <Alert className="bg-blue-50 border-blue-200">
                          <Shield className="h-4 w-4 text-blue-600" />
                          <AlertDescription className="text-xs text-blue-800">
                            Review the message and click "Send" to send via LinkedIn
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>
                  </Card>
                </div>
              </div>

              <Separator />

              {/* Acceptance Criteria */}
              <div>
                <h4 className="font-semibold mb-4">✅ Acceptance Criteria</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Insert button pastes message</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Clicking "Insert into LinkedIn" copies the generated message into the LinkedIn 
                        message compose box. The message appears as editable text.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">User must click send</p>
                      <p className="text-sm text-gray-600 mt-1">
                        The extension NEVER auto-sends messages. After insertion, the user must review 
                        the message and manually click LinkedIn's "Send" button. No automation occurs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">System logs action after confirmation</p>
                      <p className="text-sm text-gray-600 mt-1">
                        When the user clicks LinkedIn's "Send" button, the extension logs the action 
                        (message sent to Sarah Chen on Jan 20, 2026) for analytics and tracking purposes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Log Preview */}
              <div>
                <h4 className="font-semibold mb-4">Action Logging (After Send)</h4>
                <Card className="p-6 bg-gray-50">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-white rounded-lg border">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-medium text-sm">Message inserted</p>
                          <span className="text-xs text-gray-500">2:45 PM</span>
                        </div>
                        <p className="text-xs text-gray-600">
                          Message drafted for Sarah Chen using "Professional - Medium" template
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-green-300 bg-green-50">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-medium text-sm">Message sent (manually)</p>
                          <span className="text-xs text-gray-500">2:46 PM</span>
                        </div>
                        <p className="text-xs text-gray-600">
                          User clicked "Send" in LinkedIn. Message delivered to Sarah Chen.
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-gray-500 pt-2">
                      All actions logged for compliance and analytics
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Compliance Footer */}
      <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-green-500 rounded-xl">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-lg mb-2">100% LinkedIn Compliant Extension</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Manual Control</p>
                  <p className="text-xs text-gray-600">User activates and sends all messages</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Public Data Only</p>
                  <p className="text-xs text-gray-600">No scraping of hidden information</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">No Automation</p>
                  <p className="text-xs text-gray-600">Zero auto-send or bot behavior</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
