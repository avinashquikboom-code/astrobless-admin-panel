import { useState } from "react";
import { Search, Filter, MoreVertical, UserPlus, Mail, Calendar, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Table, TableRow, TableCell } from "../components/Table";
import Card from "../components/Card";
import Button from "../components/Button";
import Input from "../components/Input";
import Modal from "../components/Modal";
import { pageTransition } from "../animations/variants";
import { type User } from "../types";

const mockUsers: User[] = [
  { id: "1", name: "Avinash Magar", email: "avinash@example.com", status: "Active", joinedDate: "2024-01-15" },
  { id: "2", name: "Priya Singh", email: "priya@example.com", status: "Active", joinedDate: "2024-02-10" },
  { id: "3", name: "Rahul Verma", email: "rahul@example.com", status: "Inactive", joinedDate: "2024-03-05" },
  { id: "4", name: "Sonia Das", email: "sonia@example.com", status: "Active", joinedDate: "2024-03-20" },
  { id: "5", name: "Amit Patel", email: "amit@example.com", status: "Active", joinedDate: "2024-04-01" },
];

const UsersPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleRowClick = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
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
          <h1 className="text-4xl font-black text-white tracking-tight">Users Management</h1>
          <p className="text-white/40 font-medium mt-1">Oversee and manage platform users and their activities.</p>
        </div>
        <Button size="sm" className="gap-2 px-4 h-10">
          <UserPlus className="w-4 h-4" /> Add User
        </Button>
      </div>

      <Card className="p-0 overflow-hidden border-none shadow-none bg-transparent" hoverEffect={false}>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 w-4 h-4" />
            <Input placeholder="Search users by name or email..." className="pl-12" />
          </div>
          <Button variant="secondary" className="gap-2">
            <Filter className="w-4 h-4" /> Filters
          </Button>
        </div>

        <Table headers={["Name", "Email", "Status", "Joined Date", "Actions"]}>
          {mockUsers.map((user) => (
            <TableRow key={user.id} onClick={() => handleRowClick(user)}>
              <TableCell className="font-bold text-white">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  user.status === "Active" ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                }`}>
                  {user.status}
                </span>
              </TableCell>
              <TableCell>{user.joinedDate}</TableCell>
              <TableCell>
                <button className="p-2 text-white/30 hover:text-white transition-colors">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="User Details"
      >
        {selectedUser && (
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-2xl font-bold">
                {selectedUser.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">{selectedUser.name}</h4>
                <p className="text-white/40 text-sm">ID: {selectedUser.id}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <DetailItem icon={<Mail />} label="Email" value={selectedUser.email} />
              <DetailItem icon={<Calendar />} label="Joined" value={selectedUser.joinedDate} />
              <DetailItem icon={<Shield />} label="Account Status" value={selectedUser.status} />
            </div>

            <div className="pt-6 border-t border-white/5 flex gap-3">
              <Button variant="secondary" className="flex-1">Suspend User</Button>
              <Button className="flex-1">Reset Password</Button>
            </div>
          </div>
        )}
      </Modal>
    </motion.div>
  );
};

const DetailItem = ({ icon, label, value }: any) => (
  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
    <div className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">
      {icon && <span className="[&>svg]:w-3 [&>svg]:h-3">{icon}</span>}
      {label}
    </div>
    <div className="text-sm font-bold text-white">{value}</div>
  </div>
);

export default UsersPage;
