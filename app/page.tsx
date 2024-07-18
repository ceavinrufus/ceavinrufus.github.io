import HomeContent from "@/components/HomeContent";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 mx-auto overflow-clip">
      <FloatingNav navItems={navItems} />
      <HomeContent />
    </main>
  );
}
