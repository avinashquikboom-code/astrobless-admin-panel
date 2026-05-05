import { useState } from "react";
import { Star, MessageSquare, ShieldCheck, Clock, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Table, TableRow, TableCell } from "../components/Table";
import Card from "../components/Card";
import Button from "../components/Button";
import { pageTransition } from "../animations/variants";
import { type Astrologer } from "../types";

const mockAstrologers: Astrologer[] = [
  { id: "1", name: "Dr. Aditya Sharma", specialty: "Vedic, Numerology", status: "Pending", rating: 4.9, experience: "15 Years" },
  { id: "2", name: "Meera Iyer", specialty: "Tarot, Psychic", status: "Approved", rating: 4.8, experience: "8 Years" },
  { id: "3", name: "Vikram Malhotra", specialty: "KP Astrology", status: "Pending", rating: 4.7, experience: "22 Years" },
  { id: "4", name: "Sonia Kapoor", specialty: "Lal Kitab, Vastu", status: "Rejected", rating: 5.0, experience: "12 Years" },
  { id: "5", name: "Anand Gupta", specialty: "Nadi Astrology", status: "Approved", rating: 4.6, experience: "10 Years" },
];

const AstrologersManagementPage = () => {
  const [astrologers, setAstrologers] = useState<Astrologer[]>(mockAstrologers);

  const handleStatusChange = (id: string, newStatus: "Approved" | "Rejected") => {
    setAstrologers(prev => prev.map(astro => 
      astro.id === id ? { ...astro, status: newStatus } : astro
    ));
  };

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="space-y-8"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-start gap-8">
        <div>
          <h1 className="text-4xl font-black text-white tracking-tight">Astrologer Approvals</h1>
          <p className="text-white/40 font-medium mt-1">Review and manage professional astrologer applications.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" size="sm" className="bg-white/5 border-white/5 px-4">Export List</Button>
          <Button variant="primary" size="sm" className="px-4">Platform Stats</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Table headers={["Name", "Specialty", "Experience", "Rating", "Status", "Actions"]}>
          <AnimatePresence mode="popLayout">
            {astrologers.map((astro) => (
              <TableRow key={astro.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center font-bold text-accent">
                      {astro.name[0]}
                    </div>
                    <div>
                      <div className="font-bold text-white">{astro.name}</div>
                      <div className="text-[10px] text-white/40">ID: {astro.id}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{astro.specialty}</TableCell>
                <TableCell>{astro.experience}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1 text-accent">
                    <Star className="w-3 h-3 fill-accent" />
                    <span className="font-bold">{astro.rating}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <StatusBadge status={astro.status} />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {astro.status === "Pending" ? (
                      <>
                        <Button 
                          size="sm" 
                          className="bg-green-500/10 text-green-500 border border-green-500/20 hover:bg-green-500 hover:text-white"
                          onClick={() => handleStatusChange(astro.id, "Approved")}
                        >
                          Approve
                        </Button>
                        <Button 
                          size="sm" 
                          variant="secondary"
                          className="hover:bg-red-500 hover:text-white"
                          onClick={() => handleStatusChange(astro.id, "Rejected")}
                        >
                          Reject
                        </Button>
                      </>
                    ) : (
                      <Button size="sm" variant="ghost" className="gap-2">
                        View Profile <ExternalLink className="w-3 h-3" />
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </AnimatePresence>
        </Table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard icon={<ShieldCheck />} label="Verified Experts" value="384" />
        <MetricCard icon={<MessageSquare />} label="Active Consultations" value="1,240" />
        <MetricCard icon={<Clock />} label="Avg Response Time" value="4.2m" />
      </div>
    </motion.div>
  );
};

const StatusBadge = ({ status }: { status: Astrologer["status"] }) => {
  const colors = {
    Approved: "bg-green-500/10 text-green-500 border-green-500/20",
    Pending: "bg-accent/10 text-accent border-accent/20",
    Rejected: "bg-red-500/10 text-red-500 border-red-500/20"
  };

  return (
    <motion.span
      layout
      className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${colors[status]}`}
    >
      {status}
    </motion.span>
  );
};

const MetricCard = ({ icon, label, value }: any) => (
  <Card className="flex items-center gap-4">
    <div className="p-3 bg-white/5 text-white/40 rounded-xl">
      {icon}
    </div>
    <div>
      <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">{label}</p>
      <p className="text-xl font-bold text-white">{value}</p>
    </div>
  </Card>
);

export default AstrologersManagementPage;
