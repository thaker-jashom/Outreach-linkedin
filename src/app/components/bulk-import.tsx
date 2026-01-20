import { useState } from "react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Badge } from "@/app/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Upload, Database, Check, AlertCircle, FileText, ChevronRight } from "lucide-react";

const mockData = [
  { name: "John Smith", role: "VP of Sales", company: "Acme Corp", linkedin: "linkedin.com/in/john-smith", notes: "Recently promoted" },
  { name: "Sarah Johnson", role: "Head of Marketing", company: "TechStart", linkedin: "linkedin.com/in/sarah-johnson", notes: "Raised Series B" },
  { name: "Michael Chen", role: "CEO", company: "DataFlow", linkedin: "linkedin.com/in/michael-chen", notes: "SaaS founder" },
  { name: "Emily Davis", role: "Sales Director", company: "CloudNine", linkedin: "linkedin.com/in/emily-davis", notes: "" },
  { name: "Robert Brown", role: "VP Growth", company: "ScaleUp", linkedin: "linkedin.com/in/robert-brown", notes: "Ex-Salesforce" },
];

export function BulkImport() {
  const [uploadMethod, setUploadMethod] = useState<"csv" | "crm">("csv");
  const [showPreview, setShowPreview] = useState(false);
  const [importing, setImporting] = useState(false);

  const handleImport = () => {
    setImporting(true);
    setTimeout(() => {
      setImporting(false);
      // Navigate to assignment screen
    }, 2000);
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-900">Bulk Prospect Import</h1>
        <p className="text-gray-600 mt-1">Import prospects safely and prepare them for outreach</p>
      </div>

      {/* Compliance Banner */}
      <Card className="p-4 mb-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-blue-600 rounded-lg">
            <Check className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-semibold text-gray-900">100% Manual Control</p>
            <p className="text-sm text-gray-600">
              All messages are sent manually by you. No automation or bot actions are used.
            </p>
          </div>
        </div>
      </Card>

      {/* Import Method Tabs */}
      <Tabs value={uploadMethod} onValueChange={(v) => setUploadMethod(v as "csv" | "crm")} className="space-y-6">
        <TabsList className="grid w-full max-w-md grid-cols-2 bg-gray-100 p-1">
          <TabsTrigger value="csv" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <Upload className="w-4 h-4 mr-2" />
            Upload CSV
          </TabsTrigger>
          <TabsTrigger value="crm" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <Database className="w-4 h-4 mr-2" />
            Connect CRM
          </TabsTrigger>
        </TabsList>

        {/* CSV Upload */}
        <TabsContent value="csv" className="space-y-6">
          <Card className="p-8 border-0 shadow-md">
            <div className="max-w-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Upload CSV File</h3>
              
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-blue-500 transition-colors cursor-pointer bg-gray-50">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-900 font-medium mb-2">Drop your CSV file here, or click to browse</p>
                <p className="text-sm text-gray-500 mb-4">Maximum file size: 10MB</p>
                <Button onClick={() => setShowPreview(true)}>
                  <FileText className="w-4 h-4 mr-2" />
                  Select File
                </Button>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm font-medium text-gray-900 mb-2">Required CSV Columns:</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-white">Name</Badge>
                  <Badge variant="secondary" className="bg-white">Role</Badge>
                  <Badge variant="secondary" className="bg-white">Company</Badge>
                  <Badge variant="secondary" className="bg-white">LinkedIn URL</Badge>
                  <Badge variant="secondary" className="bg-white">Notes (optional)</Badge>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* CRM Connect */}
        <TabsContent value="crm" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'HubSpot', icon: '🟠', connected: false },
              { name: 'Salesforce', icon: '☁️', connected: true },
              { name: 'Pipedrive', icon: '🟢', connected: false },
            ].map((crm, idx) => (
              <Card key={idx} className="p-6 border-0 shadow-md hover:shadow-lg transition-all cursor-pointer">
                <div className="text-center space-y-4">
                  <div className="text-4xl">{crm.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{crm.name}</h3>
                    {crm.connected && (
                      <Badge className="mt-2 bg-green-100 text-green-700 border-0">Connected</Badge>
                    )}
                  </div>
                  <Button 
                    className={crm.connected ? "w-full" : "w-full bg-gradient-to-r from-blue-600 to-purple-600"}
                    variant={crm.connected ? "outline" : "default"}
                    onClick={() => crm.connected && setShowPreview(true)}
                  >
                    {crm.connected ? "Import Prospects" : "Connect"}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Preview Table */}
      {showPreview && (
        <Card className="mt-8 p-8 border-0 shadow-md">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Preview & Field Mapping</h3>
            <p className="text-sm text-gray-500 mt-1">Review sample data and verify field mappings</p>
          </div>

          <div className="overflow-x-auto mb-6">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Role</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Company</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">LinkedIn URL</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Notes</th>
                </tr>
              </thead>
              <tbody>
                {mockData.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-900">{row.name}</td>
                    <td className="py-3 px-4 text-gray-600">{row.role}</td>
                    <td className="py-3 px-4 text-gray-600">{row.company}</td>
                    <td className="py-3 px-4 text-sm text-blue-600">{row.linkedin}</td>
                    <td className="py-3 px-4 text-gray-600 text-sm">{row.notes || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">487 prospects ready to import</p>
                <p className="text-sm text-gray-600">All required fields are properly mapped</p>
              </div>
            </div>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={handleImport}
              disabled={importing}
            >
              {importing ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2" />
                  Importing...
                </>
              ) : (
                <>
                  Import Prospects
                  <ChevronRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}
