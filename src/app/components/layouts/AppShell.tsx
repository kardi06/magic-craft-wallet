import * as React from "react";
import logoUrl from "@logo.png";

type Props = {
  title?: string;
  rightSlot?: React.ReactNode; // e.g., network selector / account
  children: React.ReactNode;
};

export default function AppShell({
  title = "MagicCraft",
  rightSlot,
  children,
}: Props) {
  return (
    <div className="magic-page min-h-screen flex flex-col">
      {/* header */}
      <header className="flex items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-2">
          {/* logo */}
          <img
            // src="/images/magiccraft-logo.svg"
            src={logoUrl}
            alt="MagicCraft logo"
            className="h-8 w-8 rounded-md ring-1 ring-white/10"
            // onError={(e) => {
            //   const target = e.currentTarget as HTMLImageElement;
            //   if (target.src.indexOf("logo.png") === -1) target.src = "/images/logo.png";
            // }}
          />
          <h1 className="magic-heading">
            Magic<span className="gold">Craft</span>
          </h1>
        </div>
        <div className="flex items-center gap-2">
          {/* use a subtle pill for environment or network */}
          <span className="pill hidden md:inline">Mainnets</span>
          {rightSlot}
        </div>
      </header>

      {/* content */}
      <main className="flex-1 px-4 pb-4">
        <section className="magic-card border-surface-border bg-surface-card">{children}</section>
      </main>
    </div>
  );
}
