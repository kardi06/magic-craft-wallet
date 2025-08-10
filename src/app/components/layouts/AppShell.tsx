import * as React from "react";

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
          {/* logo can be an <img> from public/icons or a simple sparkles emoji for now */}
          <img
            src="/icons/magiccraft-48.png"
            alt=""
            className="h-6 w-6 rounded-md"
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
        <section className="magic-card">{children}</section>
      </main>
    </div>
  );
}
