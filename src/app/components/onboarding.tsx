import { useState } from "react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Badge } from "@/app/components/ui/badge";
import { Progress } from "@/app/components/ui/progress";
import { Textarea } from "@/app/components/ui/textarea";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Separator } from "@/app/components/ui/separator";
import { Alert, AlertDescription } from "@/app/components/ui/alert";
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Linkedin, 
  Target,
  MessageSquare,
  TrendingUp,
  Check,
  Chrome,
  Shield,
  Lock,
  Globe,
  Clock,
  Users,
  User,
  Mail,
  Building,
  MapPin,
  Eye,
  FileText,
  AlertTriangle,
  Settings,
  Zap,
  Play,
  ExternalLink,
  Info,
  ChevronRight,
  Rocket
} from "lucide-react";

interface OnboardingProps {
  onComplete: () => void;
}

export function Onboarding({ onComplete }: OnboardingProps) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    // Screen 2: Connect LinkedIn
    linkedinConnected: false,
    extensionInstalled: false,
    
    // Screen 3: Consent
    acceptTerms: false,
    understandRisks: false,
    allowActions: false,
    
    // Screen 4: Daily Limits
    dailyConnections: 20,
    dailyMessages: 40,
    activeHoursStart: "09:00",
    activeHoursEnd: "18:00",
    
    // Screen 5: Target Audience
    targetUrls: "",
    
    // Screen 6: Message Setup
    messageTemplate: "",
    useAI: false,
  });

  const totalSteps = 7; // 0-7 (8 screens, removed Create Account)
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleConnectLinkedIn = () => {
    // Simulate Chrome extension installation
    setTimeout(() => {
      setFormData({ 
        ...formData, 
        extensionInstalled: true,
        linkedinConnected: true 
      });
    }, 1500);
  };

  const generateAIMessage = () => {
    const template = `Hi {{firstName}},

I came across your profile and was impressed by your work at {{company}}. I noticed you're focused on {{industry}}, which aligns perfectly with what we're doing.

I'd love to connect and share some insights that might be valuable for your team's {{goal}}.

Looking forward to connecting!`;
    
    setFormData({ ...formData, messageTemplate: template, useAI: true });
  };

  const isStepValid = () => {
    switch (step) {
      case 0:
        return true; // Welcome screen, always valid
      case 1:
        return formData.linkedinConnected && formData.extensionInstalled;
      case 2:
        return formData.acceptTerms && formData.understandRisks && formData.allowActions;
      case 3:
        return formData.dailyConnections > 0 && formData.dailyMessages > 0;
      case 4:
        return formData.targetUrls.trim().length > 0;
      case 5:
        return formData.messageTemplate.trim().length > 0;
      case 6:
        return true; // Review screen
      case 7:
        return true; // Success screen
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        {step > 0 && step < 8 && (
          <>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-gray-900">Outreach Copilot AI Setup</h1>
              </div>
              <p className="text-sm text-gray-600">Less than 3 minutes to activation</p>
            </div>

            {/* Progress */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Step {step} of {totalSteps}</span>
                <span className="text-sm text-gray-600">{Math.round(progress)}% complete</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </>
        )}

        {/* Step Content */}
        <Card className="p-8 lg:p-12 border-0 shadow-2xl bg-white">
          
          {/* Screen 0: Welcome / Value Proposition */}
          {step === 0 && (
            <div className="space-y-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Automate LinkedIn Outreach — Safely & Smartly
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Grow your LinkedIn pipeline with human-like automation. Fully controlled. Fully compliant.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 text-center">
                  <Shield className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">100% Compliant</h3>
                  <p className="text-sm text-gray-600">
                    Human-in-the-loop design keeps you safe
                  </p>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 text-center">
                  <Zap className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">AI-Powered</h3>
                  <p className="text-sm text-gray-600">
                    Smart personalization at scale
                  </p>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200 text-center">
                  <TrendingUp className="w-10 h-10 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Better Results</h3>
                  <p className="text-sm text-gray-600">
                    3x higher reply rates on average
                  </p>
                </Card>
              </div>

              <Alert className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                <Info className="h-4 w-4 text-blue-600" />
                <AlertDescription className="text-sm text-gray-700">
                  <strong>Trusted by founders, SDRs, recruiters, and agencies</strong> — Join 10,000+ professionals automating outreach the right way.
                </AlertDescription>
              </Alert>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button
                  onClick={handleNext}
                  size="lg"
                  className="h-14 px-8 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-6">
                  <Play className="w-4 h-4 mr-2" />
                  See How It Works
                </Button>
              </div>
            </div>
          )}

          {/* Screen 1: Connect LinkedIn Account */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Linkedin className="w-8 h-8 text-[#0A66C2]" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Connect LinkedIn Account</h2>
                <p className="text-gray-600">Core capability activation for your outreach</p>
              </div>

              <Card className="max-w-lg mx-auto p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                <div className="text-center mb-6">
                  <Badge className="bg-blue-600 text-white mb-4">Recommended Method</Badge>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Install Chrome Extension</h3>
                  <p className="text-sm text-gray-600">
                    Safe, secure, and LinkedIn-compliant integration
                  </p>
                </div>

                {formData.extensionInstalled ? (
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-xl border-2 border-green-300">
                      <div className="flex items-center gap-3 mb-2">
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                        <p className="font-semibold text-gray-900">Extension Installed</p>
                      </div>
                      <p className="text-sm text-gray-600 ml-9">Chrome extension is active and ready</p>
                    </div>

                    <div className="p-4 bg-green-50 rounded-xl border-2 border-green-300">
                      <div className="flex items-center gap-3 mb-2">
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                        <p className="font-semibold text-gray-900">LinkedIn Connected</p>
                      </div>
                      <p className="text-sm text-gray-600 ml-9">Session detected and verified</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-6 border-2 border-dashed border-gray-300">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                          <Chrome className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900">What happens:</p>
                          <ol className="text-sm text-gray-600 mt-2 space-y-1 list-decimal list-inside">
                            <li>Extension installs in your Chrome browser</li>
                            <li>You log in to LinkedIn normally</li>
                            <li>We detect your LinkedIn session (read-only)</li>
                          </ol>
                        </div>
                      </div>
                    </div>

                    <Button
                      onClick={handleConnectLinkedIn}
                      className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      <Chrome className="w-5 h-5 mr-2" />
                      Add Chrome Extension
                    </Button>
                  </div>
                )}

                <Alert className="mt-6 bg-white border-blue-200">
                  <Lock className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-xs text-gray-700">
                    <strong>We never store your LinkedIn password.</strong> The extension only reads publicly visible data and helps you draft messages. You maintain full control.
                  </AlertDescription>
                </Alert>
              </Card>

              <div className="max-w-lg mx-auto">
                <details className="text-sm text-gray-600">
                  <summary className="cursor-pointer font-medium text-gray-700 hover:text-gray-900">
                    Advanced: Manual credentials (not recommended)
                  </summary>
                  <p className="mt-2 text-xs text-gray-500 p-3 bg-gray-50 rounded">
                    Manual login is less secure and may violate LinkedIn's terms. We strongly recommend using the Chrome extension method.
                  </p>
                </details>
              </div>
            </div>
          )}

          {/* Screen 2: Consent & Safety Confirmation */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Consent & Safety</h2>
                <p className="text-gray-600">Quick legal & trust confirmation</p>
              </div>

              <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200">
                <Alert className="mb-6 bg-white border-orange-300">
                  <AlertTriangle className="h-5 w-5 text-orange-600" />
                  <AlertDescription className="text-sm text-gray-700">
                    <strong>Important:</strong> Please read and check all boxes to continue. This ensures you understand how the platform works and your responsibilities.
                  </AlertDescription>
                </Alert>

                <div className="space-y-5">
                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg border">
                    <Checkbox
                      id="acceptTerms"
                      checked={formData.acceptTerms}
                      onCheckedChange={(checked) => 
                        setFormData({ ...formData, acceptTerms: checked as boolean })
                      }
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <Label htmlFor="acceptTerms" className="text-sm font-medium cursor-pointer text-gray-900">
                        I accept the Terms of Service and Privacy Policy <span className="text-red-500">*</span>
                      </Label>
                      <p className="text-xs text-gray-600 mt-1">
                        By using this platform, you agree to our standard terms.{" "}
                        <a href="#" className="text-blue-600 hover:underline">Read full terms</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg border">
                    <Checkbox
                      id="understandRisks"
                      checked={formData.understandRisks}
                      onCheckedChange={(checked) => 
                        setFormData({ ...formData, understandRisks: checked as boolean })
                      }
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <Label htmlFor="understandRisks" className="text-sm font-medium cursor-pointer text-gray-900">
                        I understand LinkedIn automation risks <span className="text-red-500">*</span>
                      </Label>
                      <p className="text-xs text-gray-600 mt-1">
                        While our platform is designed to be LinkedIn-compliant with human-in-the-loop controls, 
                        LinkedIn may restrict accounts that appear to use automation. We mitigate this risk but cannot guarantee account safety.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg border">
                    <Checkbox
                      id="allowActions"
                      checked={formData.allowActions}
                      onCheckedChange={(checked) => 
                        setFormData({ ...formData, allowActions: checked as boolean })
                      }
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <Label htmlFor="allowActions" className="text-sm font-medium cursor-pointer text-gray-900">
                        I allow this app to assist with actions on my behalf <span className="text-red-500">*</span>
                      </Label>
                      <p className="text-xs text-gray-600 mt-1">
                        You grant permission for Outreach Copilot AI to help draft messages, suggest connections, 
                        and provide automation assistance. <strong>All final actions require your manual approval.</strong>
                      </p>
                    </div>
                  </div>
                </div>

                <Alert className="mt-6 bg-green-50 border-green-200">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-xs text-green-800">
                    <strong>Human-in-the-loop design:</strong> You maintain complete control. No messages are sent without your explicit click.
                  </AlertDescription>
                </Alert>
              </Card>
            </div>
          )}

          {/* Screen 3: Set Daily Automation Limits */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Set Daily Limits</h2>
                <p className="text-gray-600">Safe defaults that mimic human behavior</p>
              </div>

              <div className="max-w-2xl mx-auto space-y-6">
                <Alert className="bg-blue-50 border-blue-200">
                  <Info className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-sm text-blue-800">
                    <strong>Recommended defaults are pre-set</strong> based on LinkedIn best practices. 
                    These limits help keep your account safe while maximizing outreach.
                  </AlertDescription>
                </Alert>

                <Card className="p-6 border-2">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <Label htmlFor="dailyConnections" className="text-base font-semibold">
                          Daily Connection Requests
                        </Label>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                          Recommended
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4">
                        <Input
                          id="dailyConnections"
                          type="number"
                          min="0"
                          max="100"
                          value={formData.dailyConnections}
                          onChange={(e) => setFormData({ ...formData, dailyConnections: parseInt(e.target.value) || 0 })}
                          className="h-12 text-lg font-semibold w-24 text-center"
                        />
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={formData.dailyConnections}
                          onChange={(e) => setFormData({ ...formData, dailyConnections: parseInt(e.target.value) })}
                          className="flex-1"
                        />
                        <span className="text-sm text-gray-500 w-20">per day</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        <strong>Safe range:</strong> 15-30 per day. Default: 20
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <Label htmlFor="dailyMessages" className="text-base font-semibold">
                          Daily Messages
                        </Label>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                          Recommended
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4">
                        <Input
                          id="dailyMessages"
                          type="number"
                          min="0"
                          max="200"
                          value={formData.dailyMessages}
                          onChange={(e) => setFormData({ ...formData, dailyMessages: parseInt(e.target.value) || 0 })}
                          className="h-12 text-lg font-semibold w-24 text-center"
                        />
                        <input
                          type="range"
                          min="0"
                          max="200"
                          value={formData.dailyMessages}
                          onChange={(e) => setFormData({ ...formData, dailyMessages: parseInt(e.target.value) })}
                          className="flex-1"
                        />
                        <span className="text-sm text-gray-500 w-20">per day</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        <strong>Safe range:</strong> 30-50 per day. Default: 40
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <Label className="text-base font-semibold mb-3 block">
                        Active Hours <span className="text-xs font-normal text-gray-500">(Auto-set delay between actions)</span>
                      </Label>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="activeStart" className="text-sm text-gray-600 mb-2">Start Time</Label>
                          <Input
                            id="activeStart"
                            type="time"
                            value={formData.activeHoursStart}
                            onChange={(e) => setFormData({ ...formData, activeHoursStart: e.target.value })}
                            className="h-11"
                          />
                        </div>
                        <div>
                          <Label htmlFor="activeEnd" className="text-sm text-gray-600 mb-2">End Time</Label>
                          <Input
                            id="activeEnd"
                            type="time"
                            value={formData.activeHoursEnd}
                            onChange={(e) => setFormData({ ...formData, activeHoursEnd: e.target.value })}
                            className="h-11"
                          />
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Default: 9 AM – 6 PM (your timezone). Actions are spread evenly across these hours.
                      </p>
                    </div>

                    <Alert className="bg-purple-50 border-purple-200">
                      <Clock className="h-4 w-4 text-purple-600" />
                      <AlertDescription className="text-xs text-purple-800">
                        <strong>Delay between actions:</strong> Automatically randomized (2-5 minutes) to mimic natural human behavior.
                      </AlertDescription>
                    </Alert>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* Screen 4: Choose Target Audience */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Choose Target Audience</h2>
                <p className="text-gray-600">Who do you want to reach?</p>
              </div>

              <div className="max-w-2xl mx-auto space-y-6">
                <Alert className="bg-blue-50 border-blue-200">
                  <Info className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-sm text-blue-800">
                    <strong>At least one source required.</strong> You can paste LinkedIn profile URLs, search URLs, or Sales Navigator URLs.
                  </AlertDescription>
                </Alert>

                <Card className="p-6 border-2">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="targetUrls" className="text-base font-semibold mb-2 flex items-center gap-2">
                        <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                        Paste LinkedIn URLs
                      </Label>
                      <Textarea
                        id="targetUrls"
                        placeholder={`Examples:
• https://linkedin.com/in/john-smith
• https://linkedin.com/search/results/people/?keywords=CTO
• https://linkedin.com/sales/search/people

Paste one URL per line, or paste multiple URLs separated by commas.`}
                        value={formData.targetUrls}
                        onChange={(e) => setFormData({ ...formData, targetUrls: e.target.value })}
                        className="min-h-[160px] font-mono text-sm"
                      />
                    </div>

                    {formData.targetUrls.trim() && (
                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                          <p className="font-semibold text-gray-900">URLs Validated</p>
                        </div>
                        <p className="text-sm text-gray-600">
                          Estimated reach: <strong>{formData.targetUrls.split('\n').filter(line => line.trim()).length} prospects</strong>
                        </p>
                      </div>
                    )}
                  </div>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="p-4 bg-blue-50 border-blue-200">
                    <User className="w-6 h-6 text-blue-600 mb-2" />
                    <h4 className="font-semibold text-sm text-gray-900 mb-1">Profile URLs</h4>
                    <p className="text-xs text-gray-600">
                      Individual LinkedIn profiles you want to contact
                    </p>
                  </Card>

                  <Card className="p-4 bg-purple-50 border-purple-200">
                    <Target className="w-6 h-6 text-purple-600 mb-2" />
                    <h4 className="font-semibold text-sm text-gray-900 mb-1">Search URLs</h4>
                    <p className="text-xs text-gray-600">
                      LinkedIn search results to pull prospects from
                    </p>
                  </Card>

                  <Card className="p-4 bg-green-50 border-green-200">
                    <TrendingUp className="w-6 h-6 text-green-600 mb-2" />
                    <h4 className="font-semibold text-sm text-gray-900 mb-1">Sales Navigator</h4>
                    <p className="text-xs text-gray-600">
                      Advanced targeting with Sales Navigator search
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          )}

          {/* Screen 5: Message Setup */}
          {step === 5 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Message Setup</h2>
                <p className="text-gray-600">What do you want to say?</p>
              </div>

              <div className="max-w-2xl mx-auto space-y-6">
                <div className="flex items-center justify-center gap-4">
                  <Button
                    onClick={generateAIMessage}
                    className={`h-12 px-6 ${formData.useAI ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-200 text-gray-700'}`}
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Generate with AI
                  </Button>
                  <span className="text-gray-400">or</span>
                  <Button
                    onClick={() => setFormData({ ...formData, useAI: false })}
                    variant={!formData.useAI ? "default" : "outline"}
                    className="h-12 px-6"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Write Manually
                  </Button>
                </div>

                <Card className="p-6 border-2">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="messageTemplate" className="text-base font-semibold mb-2 flex items-center justify-between">
                        <span>{formData.useAI ? 'AI-Generated Message' : 'Your Message Template'}</span>
                        <Badge variant="secondary" className="text-xs">
                          {formData.messageTemplate.length}/300 chars
                        </Badge>
                      </Label>
                      <Textarea
                        id="messageTemplate"
                        placeholder="Hi {{firstName}},

I noticed your work at {{company}} and wanted to reach out...

[Your personalized message here]"
                        value={formData.messageTemplate}
                        onChange={(e) => setFormData({ ...formData, messageTemplate: e.target.value })}
                        className="min-h-[200px] text-sm"
                      />
                      <p className="text-xs text-gray-500 mt-2">
                        Use variables like <code className="bg-gray-100 px-1 rounded">{'{{firstName}}'}</code>, 
                        <code className="bg-gray-100 px-1 rounded ml-1">{'{{company}}'}</code>, 
                        <code className="bg-gray-100 px-1 rounded ml-1">{'{{industry}}'}</code> for personalization
                      </p>
                    </div>

                    {formData.useAI && formData.messageTemplate && (
                      <Alert className="bg-purple-50 border-purple-200">
                        <Sparkles className="h-4 w-4 text-purple-600" />
                        <AlertDescription className="text-xs text-purple-800">
                          <strong>AI-powered personalization:</strong> This template will be customized for each prospect using their profile data.
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>
                </Card>

                {formData.messageTemplate && (
                  <Card className="p-5 bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
                    <h4 className="font-semibold text-sm text-gray-900 mb-3 flex items-center gap-2">
                      <Eye className="w-4 h-4 text-green-600" />
                      Preview with Sample Data
                    </h4>
                    <div className="bg-white p-4 rounded-lg border text-sm">
                      {formData.messageTemplate
                        .replace(/\{\{firstName\}\}/g, 'Sarah')
                        .replace(/\{\{company\}\}/g, 'TechFlow Solutions')
                        .replace(/\{\{industry\}\}/g, 'SaaS')
                        .replace(/\{\{goal\}\}/g, 'sales enablement')}
                    </div>
                  </Card>
                )}
              </div>
            </div>
          )}

          {/* Screen 6: Review & Launch */}
          {step === 6 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Review & Launch</h2>
                <p className="text-gray-600">Everything looks good? Let's go!</p>
              </div>

              <div className="max-w-2xl mx-auto space-y-4">
                <Alert className="bg-orange-50 border-orange-300">
                  <AlertTriangle className="h-5 w-5 text-orange-600" />
                  <AlertDescription className="text-sm text-orange-800">
                    <strong>You can pause, edit, or stop anytime.</strong> Full control is always in your hands.
                  </AlertDescription>
                </Alert>

                <Card className="border-2 border-blue-200">
                  <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-b">
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">Setup Summary</h3>
                    <p className="text-sm text-gray-600">Review your configuration before launch</p>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Linkedin className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">LinkedIn Account</p>
                        <p className="text-sm text-gray-600">
                          {formData.linkedinConnected ? '✓ Connected via Chrome Extension' : 'Not connected'}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => setStep(2)}>
                        Edit
                      </Button>
                    </div>

                    <Separator />

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Settings className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">Daily Limits</p>
                        <p className="text-sm text-gray-600">
                          {formData.dailyConnections} connection requests • {formData.dailyMessages} messages
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Active hours: {formData.activeHoursStart} - {formData.activeHoursEnd}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => setStep(4)}>
                        Edit
                      </Button>
                    </div>

                    <Separator />

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Target className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">Target Audience</p>
                        <p className="text-sm text-gray-600">
                          {formData.targetUrls.split('\n').filter(line => line.trim()).length} prospects from LinkedIn URLs
                        </p>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => setStep(5)}>
                        Edit
                      </Button>
                    </div>

                    <Separator />

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">Message Template</p>
                        <div className="text-sm text-gray-600 bg-gray-50 rounded p-3 mt-2 border">
                          {formData.messageTemplate.substring(0, 120)}
                          {formData.messageTemplate.length > 120 ? '...' : ''}
                        </div>
                        {formData.useAI && (
                          <Badge className="bg-purple-100 text-purple-700 border-0 mt-2">
                            <Sparkles className="w-3 h-3 mr-1" />
                            AI-Powered
                          </Badge>
                        )}
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => setStep(6)}>
                        Edit
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* Screen 7: Success / Dashboard Entry */}
          {step === 7 && (
            <div className="space-y-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl animate-bounce">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-3">
                  Your LinkedIn Automation is Live! 🚀
                </h2>
                <p className="text-lg text-gray-600 max-w-xl mx-auto">
                  You're all set! Your first outreach campaign is ready to roll.
                </p>
              </div>

              <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
                <h3 className="font-semibold text-lg text-gray-900 mb-4 text-center">What happens next?</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-blue-600">1</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Prospects are being analyzed</p>
                      <p className="text-sm text-gray-600">AI is researching your targets and generating personalized messages</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-purple-600">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Daily queue is building</p>
                      <p className="text-sm text-gray-600">You'll see {formData.dailyMessages} ready-to-send messages each day</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-green-600">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">You review and send manually</p>
                      <p className="text-sm text-gray-600">Check each message and click "Send" when ready — full control, always</p>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="max-w-2xl mx-auto">
                <h3 className="font-semibold text-lg text-gray-900 mb-4 text-center">Quick Actions</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button
                    onClick={onComplete}
                    className="h-auto py-4 flex flex-col items-center gap-2 bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <TrendingUp className="w-6 h-6" />
                    <span className="text-sm font-semibold">View Live Activity</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="h-auto py-4 flex flex-col items-center gap-2 border-2"
                  >
                    <Zap className="w-6 h-6" />
                    <span className="text-sm font-semibold">Upgrade Plan</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="h-auto py-4 flex flex-col items-center gap-2 border-2"
                  >
                    <Users className="w-6 h-6" />
                    <span className="text-sm font-semibold">Invite Team</span>
                  </Button>
                </div>
              </div>

              <Alert className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                <Sparkles className="h-5 w-5 text-blue-600" />
                <AlertDescription className="text-sm text-gray-700">
                  <strong>Pro Tip:</strong> Check your Daily Queue each morning to review and send messages. 
                  The more consistent you are, the better your results will be!
                </AlertDescription>
              </Alert>
            </div>
          )}

          {/* Navigation */}
          {step > 0 && step < 8 && (
            <div className="flex items-center justify-between mt-8 pt-6 border-t">
              <Button
                variant="outline"
                onClick={handleBack}
                className="h-12 px-6"
              >
                <ChevronRight className="w-5 h-5 mr-2 rotate-180" />
                Back
              </Button>

              <Button
                onClick={handleNext}
                disabled={!isStepValid()}
                className="h-12 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50"
              >
                {step === 6 ? "Start Automation" : "Continue"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          )}

          {/* Success Screen CTA */}
          {step === 7 && (
            <div className="text-center mt-8 pt-6 border-t">
              <Button
                onClick={onComplete}
                size="lg"
                className="h-14 px-10 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
              >
                Go to Dashboard
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}