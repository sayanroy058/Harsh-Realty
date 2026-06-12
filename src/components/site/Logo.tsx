import logo from "@/assets/logo.jpg";
import { Link } from "@tanstack/react-router";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <span className="inline-flex items-center rounded-xl bg-white/95 px-2 py-1 shadow-md ring-1 ring-black/10">
        <img
          src={logo}
          alt="HarshArti Realty"
          className={`${compact ? "h-8" : "h-10"} w-auto max-w-[180px] object-contain`}
        />
      </span>
    </Link>
  );
}
