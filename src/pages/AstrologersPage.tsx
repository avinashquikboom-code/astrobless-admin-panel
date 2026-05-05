import { Star, MessageSquare, Phone, ShieldCheck, Clock, Filter } from "lucide-react";
import Card from "../components/Card";
import Button from "../components/Button";
import Input from "../components/Input";
import { cn } from "../utils/cn";

const astrologers = [
  {
    id: 1,
    name: "Dr. Aditya Sharma",
    specialty: "Vedic, Numerology",
    rating: 4.9,
    reviews: 1240,
    price: 25,
    status: "Online",
    experience: "15 Years",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: 2,
    name: "Meera Iyer",
    specialty: "Tarot, Psychic",
    rating: 4.8,
    reviews: 850,
    price: 30,
    status: "Busy",
    experience: "8 Years",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: 3,
    name: "Vikram Malhotra",
    specialty: "KP Astrology, Palmistry",
    rating: 4.7,
    reviews: 2100,
    price: 20,
    status: "Online",
    experience: "22 Years",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: 4,
    name: "Sonia Kapoor",
    specialty: "Lal Kitab, Vastu",
    rating: 5.0,
    reviews: 430,
    price: 45,
    status: "Offline",
    experience: "12 Years",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200"
  }
];

const AstrologersPage = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Live Astrologers</h1>
          <p className="text-white/60">Consult with India's top verified astrologers in real-time.</p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Input placeholder="Search name or specialty..." className="pl-10 py-2.5" />
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 w-4 h-4" />
          </div>
          <Button variant="secondary" className="px-4">
            Filter
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
        {astrologers.map((astro) => (
          <AstrologerCard key={astro.id} astro={astro} />
        ))}
      </div>
    </div>
  );
};


const AstrologerCard = ({ astro }: any) => (
  <Card className="p-0 overflow-hidden group">
    <div className="flex flex-col sm:flex-row">
      {/* Left side - Profile */}
      <div className="sm:w-1/3 relative">
        <img 
          src={astro.image} 
          alt={astro.name} 
          className="w-full h-48 sm:h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 bg-background/60 backdrop-blur-md rounded-full border border-white/10">
          <div className={cn(
            "w-2 h-2 rounded-full",
            astro.status === "Online" ? "bg-green-500" : astro.status === "Busy" ? "bg-accent" : "bg-white/20"
          )} />
          <span className="text-[10px] font-bold text-white uppercase">{astro.status}</span>
        </div>
      </div>

      {/* Right side - Info */}
      <div className="p-6 sm:w-2/3 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-xl font-bold text-white">{astro.name}</h3>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-sm font-bold text-white">{astro.rating}</span>
            </div>
          </div>
          <p className="text-accent text-sm font-medium mb-3">{astro.specialty}</p>
          
          <div className="grid grid-cols-2 gap-y-3 mb-6">
            <div className="flex items-center gap-2 text-white/50 text-xs">
              <Clock className="w-3.5 h-3.5" />
              <span>{astro.experience} Exp</span>
            </div>
            <div className="flex items-center gap-2 text-white/50 text-xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified</span>
            </div>
            <div className="flex items-center gap-1 text-white/50 text-xs">
              <span>{astro.reviews.toLocaleString()} Reviews</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div>
            <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Pricing</p>
            <p className="text-lg font-bold text-white">₹{astro.price}<span className="text-sm font-normal text-white/40">/min</span></p>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-3 bg-white/5 hover:bg-accent/10 border border-white/10 rounded-xl transition-all text-white hover:text-accent">
              <MessageSquare className="w-5 h-5" />
            </button>
            <Button size="sm" className="gap-2">
              <Phone className="w-4 h-4" /> Call
            </Button>
          </div>
        </div>
      </div>
    </div>
  </Card>
);

export default AstrologersPage;
