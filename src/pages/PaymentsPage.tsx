import { useState, useEffect } from "react";
import { DollarSign, Download, ArrowUpRight, Search } from "lucide-react";
import { motion } from "framer-motion";
import { Table, TableRow, TableCell } from "../components/Table";
import Card from "../components/Card";
import Button from "../components/Button";
import Input from "../components/Input";
import { pageTransition } from "../animations/variants";
import { type Transaction } from "../types";

const mockTransactions: Transaction[] = [
  { id: "TX1001", user: "Avinash Magar", amount: 250, date: "2024-05-01 14:30", status: "Completed" },
  { id: "TX1002", user: "Priya Singh", amount: 120, date: "2024-05-02 09:15", status: "Completed" },
  { id: "TX1003", user: "Rahul Verma", amount: 450, date: "2024-05-02 11:45", status: "Pending" },
  { id: "TX1004", user: "Sonia Das", amount: 80, date: "2024-05-03 16:20", status: "Completed" },
  { id: "TX1005", user: "Amit Patel", amount: 300, date: "2024-05-03 18:00", status: "Failed" },
];

const PaymentsPage = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="space-y-8"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Payment Transactions</h1>
          <p className="text-white/60">Monitor revenue flow and transaction history.</p>
        </div>
        <Button className="gap-2">
          <Download className="w-4 h-4" /> Download Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <RevenueCard title="Total Earnings" value={145230} prefix="$" />
        <RevenueCard title="Today's Revenue" value={1250} prefix="$" />
        <RevenueCard title="Success Rate" value={98.5} suffix="%" />
      </div>

      <Card className="p-0 overflow-hidden bg-transparent border-none shadow-none" hoverEffect={false}>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 w-4 h-4" />
            <Input placeholder="Search by transaction ID or user..." className="pl-12" />
          </div>
          <div className="flex gap-2">
            <Button variant="secondary">All Status</Button>
            <Button variant="secondary">Last 30 Days</Button>
          </div>
        </div>

        <Table headers={["ID", "User", "Amount", "Date", "Status"]}>
          {mockTransactions.map((tx) => (
            <TableRow key={tx.id}>
              <TableCell className="font-mono text-xs text-white/40">{tx.id}</TableCell>
              <TableCell className="font-bold text-white">{tx.user}</TableCell>
              <TableCell className="font-bold text-accent">${tx.amount}</TableCell>
              <TableCell className="text-xs">{tx.date}</TableCell>
              <TableCell>
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                  tx.status === "Completed" ? "bg-green-500/10 text-green-500" : 
                  tx.status === "Pending" ? "bg-accent/10 text-accent" : "bg-red-500/10 text-red-500"
                }`}>
                  {tx.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="flex items-center justify-between">
          <div>
            <h4 className="text-white font-bold mb-1">Quick Payouts</h4>
            <p className="text-xs text-white/40">Total pending for astrologers: <span className="text-white">$12,450</span></p>
          </div>
          <Button size="sm">Process Payouts</Button>
        </Card>
        <Card className="flex items-center justify-between">
          <div>
            <h4 className="text-white font-bold mb-1">Tax Summary</h4>
            <p className="text-xs text-white/40">Estimated tax for Q2: <span className="text-white">$4,200</span></p>
          </div>
          <Button variant="secondary" size="sm">View Details</Button>
        </Card>
      </div>
    </motion.div>
  );
};

const RevenueCard = ({ title, value, prefix = "", suffix = "" }: any) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    // let totalMiliseconds = 2000;
    // let incrementTime = (totalMiliseconds / end) * 5;

    let timer = setInterval(() => {
      start += Math.ceil(end / 100);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <Card className="relative group overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-white/5 rounded-xl group-hover:bg-accent/10 transition-colors">
          <DollarSign className="w-6 h-6 text-white/40 group-hover:text-accent transition-colors" />
        </div>
        <div className="flex items-center gap-1 text-xs text-green-500 font-bold">
          <ArrowUpRight className="w-3 h-3" /> 12%
        </div>
      </div>
      <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest mb-1">{title}</p>
      <div className="text-3xl font-bold text-white flex items-baseline">
        <span className="text-accent mr-1">{prefix}</span>
        {count.toLocaleString()}
        <span className="text-sm ml-1 text-white/40">{suffix}</span>
      </div>
    </Card>
  );
};

export default PaymentsPage;
