import { Bell, Lock, Globe } from "lucide-react";
import Card from "../components/Card";
import Button from "../components/Button";

const SettingsPage = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
        <p className="text-white/60">Manage your account preferences and application settings.</p>
      </div>

      <div className="space-y-6">
        <Card>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-accent/10 rounded-lg">
              <Bell className="text-accent w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Notifications</h3>
          </div>
          <div className="space-y-4">
            <SettingToggle 
              title="Daily Horoscope Alerts" 
              description="Receive a notification every morning with your daily prediction."
              defaultChecked
            />
            <SettingToggle 
              title="Astro Chat Responses" 
              description="Get notified when AI or astrologers respond to your messages."
              defaultChecked
            />
            <SettingToggle 
              title="Promotional Offers" 
              description="Stay updated with latest discounts and features."
            />
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Lock className="text-blue-500 w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Security</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
              <div>
                <h4 className="text-white font-bold">Two-Factor Authentication</h4>
                <p className="text-xs text-white/40">Add an extra layer of security to your account.</p>
              </div>
              <Button variant="secondary" size="sm">Enable</Button>
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
              <div>
                <h4 className="text-white font-bold">Change Password</h4>
                <p className="text-xs text-white/40">Update your account password regularly.</p>
              </div>
              <Button variant="secondary" size="sm">Update</Button>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Globe className="text-purple-500 w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Regional Settings</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-white/70 ml-1">Preferred Language</label>
              <select className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 appearance-none">
                <option>English</option>
                <option>Hindi</option>
                <option>Marathi</option>
                <option>Gujarati</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-white/70 ml-1">Calculation System</label>
              <select className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 appearance-none">
                <option>Vedic (Nirayana)</option>
                <option>Western (Sayana)</option>
              </select>
            </div>
          </div>
        </Card>

        <div className="flex justify-end gap-4">
          <Button variant="ghost">Discard Changes</Button>
          <Button>Save Preferences</Button>
        </div>
      </div>
    </div>
  );
};

const SettingToggle = ({ title, description, defaultChecked = false }: any) => (
  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-all">
    <div className="flex-1 pr-4">
      <h4 className="text-white font-bold">{title}</h4>
      <p className="text-xs text-white/40">{description}</p>
    </div>
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" defaultChecked={defaultChecked} className="sr-only peer" />
      <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white/40 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent peer-checked:after:bg-white"></div>
    </label>
  </div>
);

export default SettingsPage;
