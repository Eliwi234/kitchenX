import { Settings, Shield, Bell } from "lucide-react";

export function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">System Configuration</h1>
        <p className="text-text-secondary mt-1">High-level view of platform status.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-surface p-6 rounded-2xl shadow-sm border border-border flex flex-col items-center text-center">
          <div className="p-3 bg-green-100 text-green-700 rounded-full mb-3">
            <Shield size={24} />
          </div>
          <h3 className="font-semibold text-text-primary">System Status</h3>
          <p className="text-sm text-green-600 mt-1 font-medium">All Systems Operational</p>
        </div>
        <div className="bg-surface p-6 rounded-2xl shadow-sm border border-border flex flex-col items-center text-center">
          <div className="p-3 bg-blue-100 text-blue-700 rounded-full mb-3">
            <Settings size={24} />
          </div>
          <h3 className="font-semibold text-text-primary">Active Version</h3>
          <p className="text-sm text-text-secondary mt-1">v2.4.0-stable</p>
        </div>
        <div className="bg-surface p-6 rounded-2xl shadow-sm border border-border flex flex-col items-center text-center">
          <div className="p-3 bg-yellow-100 text-yellow-700 rounded-full mb-3">
            <Bell size={24} />
          </div>
          <h3 className="font-semibold text-text-primary">Pending Alerts</h3>
          <p className="text-sm text-text-secondary mt-1">2 Unresolved Disputes</p>
        </div>
      </div>

      <div className="bg-surface border border-border rounded-2xl shadow-sm overflow-hidden p-6">
        <h2 className="text-lg font-semibold text-text-primary mb-4">Quick Links</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <button className="p-4 border border-border rounded-xl text-sm font-medium text-text-primary hover:bg-background transition-colors text-center">
            Review Performance
          </button>
          <button className="p-4 border border-border rounded-xl text-sm font-medium text-text-primary hover:bg-background transition-colors text-center">
            General Settings
          </button>
          <button className="p-4 border border-border rounded-xl text-sm font-medium text-text-primary hover:bg-background transition-colors text-center">
            Resolve Disputes
          </button>
          <button className="p-4 border border-border rounded-xl text-sm font-medium text-text-primary hover:bg-background transition-colors text-center">
            Check Logs
          </button>
        </div>
      </div>
    </div>
  );
}
