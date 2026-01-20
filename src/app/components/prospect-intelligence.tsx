import { useState } from "react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Badge } from "@/app/components/ui/badge";
import { Progress } from "@/app/components/ui/progress";
import { Separator } from "@/app/components/ui/separator";
import { Lightbulb, Sparkles, Target, TrendingUp, Linkedin } from "lucide-react";

export function ProspectIntelligence() {
  const [analyzing, setAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleAnalyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setShowResults(true);
    }, 1500);
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-900">Prospect Intelligence</h1>
        <p className="text-gray-600 mt-1">Research prospects and uncover personalization opportunities</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Panel: Prospect Input */}
        <div className="space-y-6">
          <Card className="p-8 border-0 shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Prospect Information</h3>
            
            <div className="space-y-6">
              {/* LinkedIn URL */}
              <div>
                <Label htmlFor="linkedin-url" className="text-sm font-medium text-gray-700">
                  LinkedIn Profile URL
                </Label>
                <div className="relative mt-2">
                  <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="linkedin-url"
                    placeholder="https://linkedin.com/in/john-smith"
                    className="pl-11"
                  />
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">Or enter manually</span>
                </div>
              </div>

              {/* Manual Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Full Name
                  </Label>
                  <Input 
                    id="name" 
                    placeholder="John Smith" 
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="role" className="text-sm font-medium text-gray-700">
                    Role/Title
                  </Label>
                  <Input 
                    id="role" 
                    placeholder="VP of Sales" 
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                    Company
                  </Label>
                  <Input 
                    id="company" 
                    placeholder="Acme Corp" 
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="industry" className="text-sm font-medium text-gray-700">
                    Industry
                  </Label>
                  <Input 
                    id="industry" 
                    placeholder="SaaS" 
                    className="mt-2"
                  />
                </div>
              </div>

              <Button 
                onClick={handleAnalyze} 
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg text-base"
                disabled={analyzing}
              >
                {analyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" />
                    Analyze Prospect
                  </>
                )}
              </Button>
            </div>
          </Card>
        </div>

        {/* Right Panel: AI Insights */}
        <div className="space-y-6">
          {!showResults ? (
            <Card className="p-12 border-0 shadow-md bg-gradient-to-br from-gray-50 to-white flex flex-col items-center justify-center text-center min-h-[600px]">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Ready to analyze
              </h3>
              <p className="text-gray-600 max-w-sm">
                Enter prospect information on the left to unlock AI-powered insights and personalization hooks
              </p>
            </Card>
          ) : (
            <>
              {/* ICP Match Score */}
              <Card className="p-8 border-0 shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">ICP Match Score</h3>
                    <p className="text-sm text-gray-500">Ideal Customer Profile alignment</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 mb-4">
                  <div className="relative w-32 h-32">
                    <svg className="w-full h-full -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="#E5E7EB"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${87 * 3.52} ${100 * 3.52}`}
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#4F46E5" />
                          <stop offset="100%" stopColor="#9333EA" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-gray-900">87</div>
                        <div className="text-sm text-gray-500">%</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <Badge className="bg-green-100 text-green-700 border-0 mb-2">
                      High Match
                    </Badge>
                    <p className="text-sm text-gray-600">
                      Strong alignment with your ideal customer profile. This prospect shows excellent fit based on role, industry, and company signals.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Personalization Hooks */}
              <Card className="p-8 border-0 shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <Lightbulb className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Personalization Hooks</h3>
                    <p className="text-sm text-gray-500">Key talking points for your message</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <TrendingUp className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Recently promoted to VP of Sales</p>
                      <p className="text-sm text-gray-600 mt-1">Congratulate on new role and discuss growth initiatives</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Target className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Company raised Series B ($25M) 3 months ago</p>
                      <p className="text-sm text-gray-600 mt-1">Reference scaling challenges and expansion plans</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Lightbulb className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Previously worked at competitor for 5 years</p>
                      <p className="text-sm text-gray-600 mt-1">Leverage industry knowledge and common pain points</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Suggested Outreach Angle */}
              <Card className="p-8 border-0 shadow-md bg-gradient-to-br from-blue-50 to-purple-50">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Suggested Outreach Angle</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-blue-600 hover:bg-blue-700 border-0 px-3 py-1">
                    Growth & Scaling
                  </Badge>
                  <Badge className="bg-purple-600 hover:bg-purple-700 border-0 px-3 py-1">
                    Sales Efficiency
                  </Badge>
                  <Badge className="bg-green-600 hover:bg-green-700 border-0 px-3 py-1">
                    Industry Expertise
                  </Badge>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Focus on helping them scale sales operations post-funding. Reference their experience and demonstrate understanding of SaaS-specific challenges.
                </p>
                <Button className="w-full mt-6 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Generate Personalized Message
                </Button>
              </Card>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
