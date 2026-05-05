import { Shield, CreditCard, Mail, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import Button from "../components/Button";
import Input from "../components/Input";
import { pageTransition } from "../animations/variants";

const SettingsPage = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="max-w-4xl mx-auto space-y-8"
    >
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Admin Settings</h1>
        <p className="text-white/60">Configure global platform parameters and security policies.</p>
      </div>

      <div className="space-y-6">
        <Card>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-accent/10 rounded-lg">
              <Shield className="text-accent w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">System Access</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Admin Email" defaultValue="admin@astrobless.com" icon={<Mail />} />
            <Input label="Session Timeout (minutes)" defaultValue="30" type="number" />
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <CreditCard className="text-blue-500 w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Payment Configuration</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-white/70 ml-1">Platform Commission (%)</label>
              <Input defaultValue="20" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-white/70 ml-1">Payout Cycle</label>
              <select className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 appearance-none">
                <option>Weekly</option>
                <option>Bi-weekly</option>
                <option>Monthly</option>
              </select>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-red-500/10 rounded-lg">
              <Trash2 className="text-red-500 w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white text-red-500">Danger Zone</h3>
          </div>
          <div className="p-4 bg-red-500/5 rounded-xl border border-red-500/10 flex items-center justify-between">
            <div>
              <h4 className="text-white font-bold">Clear System Cache</h4>
              <p className="text-xs text-white/40">This will force all users to re-fetch latest data.</p>
            </div>
            <Button variant="secondary" className="border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white">Clear Cache</Button>
          </div>
        </Card>

        <div className="flex justify-end gap-4">
          <Button variant="ghost">Reset to Defaults</Button>
          <Button>Update Global Settings</Button>
        </div>
      </div>
    </motion.div>
  );
};

export default SettingsPage;
