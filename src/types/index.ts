export interface User {
  id: string;
  name: string;
  email: string;
  status: "Active" | "Inactive";
  joinedDate: string;
}

export interface Astrologer {
  id: string;
  name: string;
  specialty: string;
  status: "Pending" | "Approved" | "Rejected";
  rating: number;
  experience: string;
}

export interface Transaction {
  id: string;
  user: string;
  amount: number;
  date: string;
  status: "Completed" | "Pending" | "Failed";
}

export interface StatCard {
  title: string;
  value: string | number;
  change: number;
  icon: React.ReactNode;
}
