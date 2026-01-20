import { useState } from "react";
import * as React from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { AuthPage } from "@/app/components/auth-page";
import { Onboarding } from "@/app/components/onboarding";
import { Dashboard } from "@/app/components/dashboard";
import { ProspectIntelligence } from "@/app/components/prospect-intelligence";
import { MessageGenerator } from "@/app/components/message-generator";
import { SequenceBuilder } from "@/app/components/sequence-builder";
import { Analytics } from "@/app/components/analytics";
import { Settings } from "@/app/components/settings";
import { ChromeExtension } from "@/app/components/chrome-extension";
import { BulkImport } from "@/app/components/bulk-import";
import { BulkAssignment } from "@/app/components/bulk-assignment";
import { DailyQueue } from "@/app/components/daily-queue";
import { FollowUpTracker } from "@/app/components/follow-up-tracker";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Avatar, AvatarFallback } from "@/app/components/ui/avatar";
import { Badge } from "@/app/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import {
  LayoutDashboard,
  Users,
  MessageSquare,
  GitBranch,
  BarChart3,
  Settings as SettingsIcon,
  Chrome,
  Menu,
  X,
  Sparkles,
  Search,
  Bell,
  Upload,
  ListChecks,
  TrendingUp,
  LogOut,
  User,
  HelpCircle
} from "lucide-react";

function TopBar({ onMenuClick, onLogout }: { onMenuClick: () => void; onLogout: () => void }) {
  return (
    <div className="sticky top-0 z-40 bg-white border-b border-gray-200 h-16 flex items-center px-6 gap-4">
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="sm"
        className="lg:hidden"
        onClick={onMenuClick}
      >
        <Menu className="w-5 h-5" />
      </Button>

      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search prospects, messages, sequences..."
            className="pl-10 bg-gray-50 border-gray-200"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* Notifications */}
        <Button variant="ghost" size="sm" className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </Button>

        {/* User profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-3 pl-3 border-l">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium">Sarah Johnson</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
              <Avatar>
                <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                  SJ
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <div>
                <p className="font-medium">Sarah Johnson</p>
                <p className="text-xs text-gray-500 font-normal">sarah@company.com</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="w-4 h-4 mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SettingsIcon className="w-4 h-4 mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem>
              <HelpCircle className="w-4 h-4 mr-2" />
              Help & Support
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={onLogout} className="text-red-600">
              <LogOut className="w-4 h-4 mr-2" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const location = useLocation();
  
  const navItems = [
    { path: "/", icon: LayoutDashboard, label: "Dashboard" },
    { path: "/prospect", icon: Users, label: "Prospects" },
    { path: "/message", icon: MessageSquare, label: "Message Generator" },
    { path: "/sequence", icon: GitBranch, label: "Sequences" },
    { path: "/bulk-import", icon: Upload, label: "Bulk Import", badge: "New" },
    { path: "/daily-queue", icon: ListChecks, label: "Daily Queue", badge: "32" },
    { path: "/tracker", icon: TrendingUp, label: "Follow-Up Tracker" },
    { path: "/analytics", icon: BarChart3, label: "Analytics" },
    { path: "/settings", icon: SettingsIcon, label: "Settings" },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white border-r border-gray-200 z-50 transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-64`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-lg">Outreach Copilot</h1>
                <p className="text-xs text-gray-500">AI-Powered Assistant</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={onClose}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-5rem)]">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors relative ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
                {item.badge && (
                  <Badge className={`ml-auto ${
                    isActive 
                      ? "bg-white/20 text-white border-0" 
                      : item.badge === "New"
                        ? "bg-green-100 text-green-700 border-0"
                        : "bg-blue-100 text-blue-700 border-0"
                  }`}>
                    {item.badge}
                  </Badge>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}

function Layout({ onLogout }: { onLogout: () => void }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      {/* Main content */}
      <div className="lg:ml-64">
        <TopBar onMenuClick={() => setSidebarOpen(true)} onLogout={onLogout} />

        {/* Page content */}
        <main className="min-h-[calc(100vh-4rem)]">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/prospect" element={<ProspectIntelligence />} />
            <Route path="/message" element={<MessageGenerator />} />
            <Route path="/sequence" element={<SequenceBuilder />} />
            <Route path="/bulk-import" element={<BulkImport />} />
            <Route path="/bulk-assignment" element={<BulkAssignment />} />
            <Route path="/daily-queue" element={<DailyQueue />} />
            <Route path="/tracker" element={<FollowUpTracker />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/extension" element={<ChromeExtension />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
    setHasCompletedOnboarding(false);
  };

  // Development: Press 'D' key to skip auth and onboarding
  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'D' && e.shiftKey) {
        setIsAuthenticated(true);
        setHasCompletedOnboarding(true);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Show auth page if not logged in
  if (!isAuthenticated) {
    return <AuthPage onLogin={() => setIsAuthenticated(true)} />;
  }

  // Show onboarding if first time user
  if (!hasCompletedOnboarding) {
    return <Onboarding onComplete={() => setHasCompletedOnboarding(true)} />;
  }

  // Show main app
  return (
    <BrowserRouter>
      <Layout onLogout={handleLogout} />
    </BrowserRouter>
  );
}