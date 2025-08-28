import PortfolioCard from "./PortfolioCard";

interface PortfolioItem {
  title: string;
  description: string;
  subtitle: string;
  image: string;
}

interface PortfolioGridProps {
  items: PortfolioItem[];
}

export default function PortfolioGrid({ items }: PortfolioGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {items.map((item, index) => (
        <PortfolioCard key={index} item={item} index={index} />
      ))}
    </div>
  );
}