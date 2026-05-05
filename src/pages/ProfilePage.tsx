import { cloneElement } from "react";
import { User, CreditCard, Bell, Shield, LogOut, ChevronRight, Star } from "lucide-react";
import Card from "../components/Card";
import Button from "../components/Button";
import Input from "../components/Input";

const ProfilePage = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row items-center gap-8 pb-8 border-b border-white/5">
        <div className="relative">
          <div className="w-32 h-32 bg-accent rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-accent">
            AM
          </div>
          <button className="absolute bottom-0 right-0 p-2 bg-surface border border-white/10 rounded-full text-white/60 hover:text-white transition-colors">
            <User className="w-4 h-4" />
          </button>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-white mb-1">Avinash Magar</h1>
          <p className="text-white/60 mb-4">Premium Member since Jan 2024</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <span className="px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-xs font-bold rounded-full">
              LEO ASCENDANT
            </span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 text-white/60 text-xs font-bold rounded-full">
              KUNDLI VERIFIED
            </span>
          </div>
        </div>
        <div className="flex-1 md:text-right w-full">
          <Button variant="secondary" className="w-full md:w-auto">Edit Profile</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Account Settings */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <h3 className="text-xl font-bold text-white mb-6">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="First Name" defaultValue="Avinash" />
              <Input label="Last Name" defaultValue="Magar" />
              <Input label="Email Address" defaultValue="avinash@example.com" type="email" />
              <Input label="Phone Number" defaultValue="+91 98765 43210" />
            </div>
            <div className="mt-8 flex justify-end">
              <Button>Save Changes</Button>
            </div>
          </Card>

          <Card>
            <h3 className="text-xl font-bold text-white mb-6">Saved Predictions</h3>
            <div className="space-y-4">
              <SavedItem 
                title="Career Growth 2024" 
                date="2 days ago" 
                category="Professional"
              />
              <SavedItem 
                title="Compatibility with Priya" 
                date="1 week ago" 
                category="Relationship"
              />
              <SavedItem 
                title="Financial Forecast Q3" 
                date="2 weeks ago" 
                category="Finance"
              />
            </div>
          </Card>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <Card className="border-accent/20 bg-accent/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-accent rounded-lg">
                <Star className="text-white w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Premium Plan</h3>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Status</span>
                <span className="text-green-500 font-bold">Active</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Next Billing</span>
                <span className="text-white">15 Jun 2024</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/60">AI Credits</span>
                <span className="text-white">Unlimited</span>
              </div>
            </div>
            <Button variant="secondary" className="w-full bg-transparent hover:bg-white/5">Manage Subscription</Button>
          </Card>

          <div className="space-y-2">
            <MenuOption icon={<Bell />} label="Notifications" />
            <MenuOption icon={<Shield />} label="Privacy & Security" />
            <MenuOption icon={<CreditCard />} label="Payment Methods" />
            <button className="flex items-center justify-between w-full p-4 rounded-xl text-red-400 hover:bg-red-500/10 transition-all">
              <div className="flex items-center gap-3">
                <LogOut className="w-5 h-5" />
                <span className="font-bold">Log Out</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SavedItem = ({ title, date, category }: any) => (
  <div className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-xl hover:border-white/20 transition-all cursor-pointer group">
    <div>
      <h4 className="text-white font-bold group-hover:text-accent transition-colors">{title}</h4>
      <p className="text-xs text-white/40">{category} • {date}</p>
    </div>
    <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-white transition-colors" />
  </div>
);

const MenuOption = ({ icon, label }: any) => (
  <button className="flex items-center justify-between w-full p-4 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-all">
    <div className="flex items-center gap-3">
      {cloneElement(icon, { className: "w-5 h-5" })}
      <span className="font-bold">{label}</span>
    </div>
    <ChevronRight className="w-4 h-4 opacity-30" />
  </button>
);

export default ProfilePage;
